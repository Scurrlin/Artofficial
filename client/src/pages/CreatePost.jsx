import React, { Suspense, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getRandomPrompt } from '../utils';
import { FormField, ModelSelector, PromptGuide } from '../components';
import { GUIDED_MODELS } from '../components/PromptGuide';
import { IMAGE_MODELS } from '../constants';

const Loader = React.lazy(() => import('../components/Loader'));

const CreatePost = ({ onBusyChange, selectedModel, onModelChange }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const currentModel = IMAGE_MODELS.find((m) => m.id === selectedModel) || IMAGE_MODELS[0];

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);

  const [dripTiles, setDripTiles] = useState(() => {
    if (typeof window === 'undefined') return 2;
    const w = window.innerWidth;
    return w >= 1280 ? 4 : w >= 768 ? 3 : 2;
  });

  useEffect(() => {
    const updateTiles = () => {
      const w = window.innerWidth;
      setDripTiles(w >= 1280 ? 4 : w >= 768 ? 3 : 2);
    };
    window.addEventListener('resize', updateTiles);
    return () => window.removeEventListener('resize', updateTiles);
  }, []);

  useEffect(() => {
    onBusyChange?.(generatingImg || loading);
    return () => onBusyChange?.(false);
  }, [generatingImg, loading, onBusyChange]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setForm((prev) => ({ ...prev, photo: '' }));
        setGeneratingImg(true);

        const controller = new AbortController();
        abortControllerRef.current = controller;

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/image`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
            model: selectedModel,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          let errorMessage;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message;
          } catch {
            errorMessage = await response.text();
          }
          throw new Error(errorMessage || `Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setForm((prev) => ({ ...prev, photo: `data:image/png;base64,${data.photo}` }));
        toast.success('Image generated successfully!');
      } catch (err) {
        if (err.name === 'AbortError') {
          toast.success('Image generation cancelled');
          return;
        }
        console.error('Error generating image:', err);
        toast.error(err.message || 'Failed to generate image. Please try again.');
      } finally {
        abortControllerRef.current = null;
        setGeneratingImg(false);
      }
    } else {
      toast.error('Please provide a prompt');
    }
  };

  const cancelGeneration = () => {
    abortControllerRef.current?.abort();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form, model: selectedModel }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }

        await response.json();
        toast.success('Image shared successfully!');
        navigate('/');
      } catch (err) {
        console.error('Error sharing post:', err);
        toast.error(err.message || 'Failed to share image. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      toast.error('Please generate an image with proper details');
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="max-w-[600px] mx-auto lg:mx-0 lg:max-w-none">
          <h1 className="font-extrabold text-[#10131f] text-[32px]">Create Image</h1>
          <p className="mt-2 mb-6 text-[#10131f] text-[16px] ">Click the "Surprise me" button for one of 50 curated prompts!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex flex-col gap-5 w-full max-w-[600px] mx-auto lg:w-1/2 lg:max-w-[600px] lg:mx-0">
              <ModelSelector
                selectedModel={selectedModel}
                onChange={onModelChange}
                disabled={generatingImg || loading}
              />
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />

              <FormField
                labelName="Prompt"
                name="prompt"
                placeholder="Enter your prompt here"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
                isTextarea
                disabled={generatingImg || loading}
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={generateImage}
                  disabled={generatingImg || loading}
                  className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {generatingImg ? 'Generating...' : 'Generate'}
                </button>
                <button
                  type={generatingImg ? 'button' : 'submit'}
                  onClick={generatingImg ? cancelGeneration : undefined}
                  disabled={!generatingImg && (!form.photo || loading)}
                  className="text-white bg-[#10131f] font-medium rounded-md text-base px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sharing...' : generatingImg ? 'Cancel' : 'Add to Feed'}
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className={`relative aspect-square w-full max-w-md short:max-w-sm rounded-xl border border-[#10131f]/30 flex justify-center items-center overflow-hidden ${form.photo || generatingImg ? 'bg-[#10131f]' : ''}`}>
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={form.prompt}
                    className="w-full h-full object-cover"
                  />
                ) : generatingImg ? (
                  <Suspense fallback={null}>
                    <Loader variant="light" />
                  </Suspense>
                ) : (
                  <div
                    className="absolute inset-0 bg-[#10131f]"
                    style={{
                      transform: 'translateZ(0)',
                      maskImage: `url('${currentModel.iconLogo}'), linear-gradient(#fff, #fff)`,
                      maskSize: '75% 75%, 100% 100%',
                      maskPosition: 'center, center',
                      maskRepeat: 'no-repeat, no-repeat',
                      maskComposite: 'exclude',
                      WebkitMaskImage: `url('${currentModel.iconLogo}'), linear-gradient(#fff, #fff)`,
                      WebkitMaskSize: '75% 75%, 100% 100%',
                      WebkitMaskPosition: 'center, center',
                      WebkitMaskRepeat: 'no-repeat, no-repeat',
                      WebkitMaskComposite: 'xor',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </section>

      {GUIDED_MODELS.has(selectedModel) && (
        <div className="-mx-4 sm:-mx-8 -mb-8 mt-8">
          <svg
            viewBox={`0 0 ${dripTiles * 1920} 650`}
            preserveAspectRatio="none"
            className="w-full block h-[80px] sm:h-[110px] lg:h-[140px]"
            style={{ marginBottom: '-1px' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="drip"
                d="M-4 0 C633.6 0 1267.2 0 1924 0 C1924 125.07 1924 250.14 1924 379 C1911.10231187 387.89768813 1904.98506152 393.21864699 1892.25 393.6875 C1885.87435346 393.40095409 1881.67302114 392.38025355 1877 388 C1876.49597656 387.55011719 1875.99195313 387.10023438 1875.47265625 386.63671875 C1865.91841434 376.82904867 1861.43154243 363.12887313 1859 350 C1858.74597412 348.64636353 1858.74597412 348.64636353 1858.48681641 347.26538086 C1857.2224979 340.1589392 1856.5736168 333.13532002 1856.125 325.9375 C1854.66588991 305.79697212 1851.64053705 283.80386516 1836.25 269.1875 C1827.79904337 262.35683956 1818.59012626 260.67261264 1807.93359375 261.6953125 C1797.91960135 263.27327494 1790.16467031 270.39323717 1784 278 C1775.97066934 289.81903629 1773.37737004 302.92069493 1771.875 316.875 C1771.70671095 318.33979412 1771.53742877 319.80447446 1771.3671875 321.26904297 C1770.41906542 329.54365652 1769.65912401 337.82227173 1769 346.125 C1768.2873504 354.79171295 1766.78867229 362.72143278 1764 371 C1763.46052734 372.61648438 1763.46052734 372.61648438 1762.91015625 374.265625 C1758.8553878 385.13295055 1752.79210556 391.62120285 1742.515625 396.90625 C1735.68583577 399.87572358 1728.30507067 399.90641255 1721 399 C1715.8755511 396.63251988 1713.05149859 392.73679538 1710.75 387.6875 C1707.64277027 378.66695202 1705.7704571 369.04511888 1704.29296875 359.6328125 C1702.53446248 348.53830716 1699.91729403 340.67320635 1690.6875 333.625 C1678.18151623 325.21404624 1664.44412768 322.8113765 1649.609375 325.6484375 C1633.91691289 330.45476752 1622.87010281 340.88809152 1615 355 C1612.61194977 360.18076736 1610.64364826 365.53932317 1609 371 C1608.80494873 371.62543701 1608.60989746 372.25087402 1608.40893555 372.89526367 C1606.30858381 380.72623953 1606.55647403 388.88888153 1606.5625 396.9375 C1606.56289276 398.13940979 1606.56289276 398.13940979 1606.56329346 399.36560059 C1606.61995879 414.08615799 1608.40860932 427.70111601 1612 442 C1612.38487664 443.54810905 1612.76946096 445.09629078 1613.15380859 446.64453125 C1614.88585585 453.60474017 1616.6348863 460.56063349 1618.39355469 467.51416016 C1624.38620401 491.25320223 1629.40451769 514.56070304 1624 539 C1623.80535156 539.93714844 1623.61070313 540.87429688 1623.41015625 541.83984375 C1620.84325031 552.66945283 1615.18680466 561.62312231 1608 570 C1607.45214844 570.67804687 1606.90429688 571.35609375 1606.33984375 572.0546875 C1599.36465246 579.93435414 1589.45567118 585.69335292 1578.90234375 586.640625 C1567.69265082 587.10979473 1557.54963584 585.9984563 1548.625 578.6875 C1539.77851205 570.16664964 1536.17884315 560.56997478 1535.796875 548.3046875 C1535.57272653 532.99591472 1537.31861957 518.75269704 1540.53515625 503.8046875 C1545.60036095 479.94194536 1547.02130205 457.07358491 1542 433 C1541.83371094 432.19578613 1541.66742187 431.39157227 1541.49609375 430.56298828 C1534.28868649 396.86835933 1519.51666005 362.07576055 1490.703125 341.34765625 C1478.93999997 333.79388479 1466.8338082 330.30379437 1453 332 C1437.58450276 335.77169293 1426.05223809 346.22371408 1415 357 C1414.07703125 357.89460938 1413.1540625 358.78921875 1412.203125 359.7109375 C1407.91747644 363.93165199 1403.81548226 368.24563717 1399.90234375 372.8125 C1397.06220386 376.07836928 1394.12252465 379.25206688 1391.18774414 382.43261719 C1388.24589738 385.62510105 1385.36327478 388.86148251 1382.5 392.125 C1369.37916404 406.69591053 1352.6436459 420.74590397 1332.37109375 422.2734375 C1309.3191307 422.86862225 1293.13019601 409.00576372 1277 394 C1274.5464967 391.57748267 1272.13060409 389.12254883 1269.72192383 386.65551758 C1252.84122652 369.37468522 1232.98291192 350.92151248 1207.34936523 350.48046875 C1206.34719971 350.48691406 1205.34503418 350.49335938 1204.3125 350.5 C1203.25812744 350.50644531 1202.20375488 350.51289063 1201.11743164 350.51953125 C1192.23096386 350.72643071 1185.1179409 352.20916199 1177 356 C1176.09942871 356.41813965 1176.09942871 356.41813965 1175.18066406 356.84472656 C1162.20686775 362.99451033 1150.74857601 371.53734942 1139.18115234 379.94946289 C1127.87130931 388.16663976 1116.76243687 395.87231228 1104.125 401.9375 C1103.3400415 402.31551758 1102.55508301 402.69353516 1101.74633789 403.08300781 C1087.1590976 409.86201179 1069.72877159 410.56127569 1054.49072266 405.26025391 C1033.43430507 397.23850287 1016.85276238 382.04509088 1000.421875 367.14453125 C996.95426695 364.07402025 993.37351633 361.15448451 989.76953125 358.24609375 C987.95958997 356.77822882 986.16446321 355.29185447 984.38671875 353.78515625 C972.29357041 343.59108009 959.80615087 335.61096583 945 330 C944.31437988 329.72115967 943.62875977 329.44231934 942.92236328 329.1550293 C936.77395357 326.83136675 931.15422525 326.57925688 924.625 326.6875 C923.66078125 326.68427734 922.6965625 326.68105469 921.703125 326.67773438 C899.80839923 326.83915662 883.1143751 336.40201715 867.4375 351.25 C856.19120558 362.99788971 848.95585958 376.67846044 843.6875 391.9375 C843.45716064 392.59121582 843.22682129 393.24493164 842.98950195 393.91845703 C838.25283785 408.488262 837.49033742 423.18747774 837.625 438.375 C837.63098206 439.74764008 837.63098206 439.74764008 837.63708496 441.14801025 C837.74212877 461.78283354 839.74431931 481.65628196 843.94921875 501.8671875 C847.66246272 519.89693301 849.4023453 537.30380069 849.5 555.6875 C849.51035278 556.57769836 849.52070557 557.46789673 849.53137207 558.3850708 C849.75066557 582.25996152 843.92860231 602.66476068 827.125 620.3125 C817.45015564 629.6186384 806.08606842 635.08260591 792.5625 635.5 C777.12665133 635.0112244 764.60491114 628.56741515 754.0625 617.44140625 C747.58760168 609.77699062 743.56158806 601.31081823 740 592 C739.49919922 590.86691406 739.49919922 590.86691406 738.98828125 589.7109375 C735.6137443 580.45430254 735.63714341 571.33251523 735.6875 561.625 C735.68998749 560.86412079 735.69247498 560.10324158 735.69503784 559.31930542 C735.75421664 547.62634381 736.29365591 536.40690484 739 525 C739.23106445 524.00548828 739.46212891 523.01097656 739.70019531 521.98632812 C742.82876996 508.75580238 746.57289318 495.81086278 751.00512695 482.9609375 C753.92769291 474.43305085 756.38848662 465.80741011 758.7421875 457.10693359 C759.0103125 456.11902832 759.2784375 455.13112305 759.5546875 454.11328125 C759.78655762 453.24485596 760.01842773 452.37643066 760.25732422 451.48168945 C761 449 761 449 761.99829102 446.57617188 C763.14185967 443.63516861 763.81236685 440.75347773 764.47265625 437.66796875 C764.73240234 436.45689453 764.99214844 435.24582031 765.25976562 433.99804688 C765.52466797 432.74056641 765.78957031 431.48308594 766.0625 430.1875 C766.33126953 428.94162109 766.60003906 427.69574219 766.87695312 426.41210938 C768.78588654 417.43869418 770.14908416 408.82027038 770.203125 399.65234375 C770.20882507 398.87798477 770.21452515 398.10362579 770.22039795 397.30580139 C770.22978448 395.67466571 770.23635644 394.0435116 770.24023438 392.41235352 C770.24988001 389.96790744 770.28093905 387.52432558 770.3125 385.08007812 C770.48849221 359.27932569 762.50182492 335.37411411 744.5703125 316.43359375 C730.40233535 302.66501062 711.94294046 295.74209022 692.25366211 295.6809082 C678.87492836 295.91744336 667.09236001 302.28634435 657.48828125 311.29296875 C638.30930028 332.15801398 636.97043814 359.20323588 637.82275391 386.08886719 C638.2055526 394.53574744 639.27455602 402.85931498 640.56787109 411.20947266 C641.15716999 415.01494516 641.69528589 418.82713732 642.23510742 422.63989258 C642.48409612 424.38655531 642.7377007 426.13257043 642.99731445 427.87768555 C646.4632265 451.31737877 646.33800455 472.25978454 636 494 C635.58234375 494.91136719 635.1646875 495.82273437 634.734375 496.76171875 C629.69015903 506.92262506 621.48181383 517.16223977 611 522 C610.36320313 522.31453125 609.72640625 522.6290625 609.0703125 522.953125 C601.33652194 526.16337769 591.3383512 526.34217068 583.25 524.30859375 C580.99884189 523.37451946 579.04721249 522.31958877 577 521 C575.97519531 520.36384766 575.97519531 520.36384766 574.9296875 519.71484375 C562.25703833 511.06564023 556.38389261 496.47472535 553 482 C552.47017805 477.06752208 552.42712041 472.2070851 552.5 467.25 C552.51135986 465.93322266 552.52271973 464.61644531 552.53442383 463.25976562 C552.73233963 453.31373065 553.86046488 444.41860535 557 435 C557.40863281 433.75347656 557.81726563 432.50695312 558.23828125 431.22265625 C560.29318551 425.26152531 562.59096819 419.39758216 564.96875 413.55859375 C566.62986303 409.43727165 568.20263266 405.28240249 569.78125 401.12890625 C570.49756449 399.28990656 571.23752074 397.45928043 572.03125 395.65234375 C575.89535235 386.81788395 577.84984493 377.36435857 580 368 C580.37705078 366.43958984 580.37705078 366.43958984 580.76171875 364.84765625 C584.76392993 345.51782777 582.78595522 326.8455221 572.5625 309.9375 C571.40662478 308.26930454 570.22071725 306.62134913 569 305 C568.45601562 304.27425781 567.91203125 303.54851562 567.3515625 302.80078125 C560.60510612 294.48648642 551.52874213 288.27830656 541 286 C529.09271649 284.76205091 519.48603897 286.40290505 509.8125 293.5625 C493.24971909 307.75916935 489.16006881 328.41537915 484.625 348.75 C474.9892343 391.02599631 474.9892343 391.02599631 458.44140625 402.82421875 C449.48998999 408.31743556 442.57899379 409.93555727 432 409 C425.29800617 407.30844245 420.74759876 402.62595726 417 397 C411.69281779 387.99013252 411.63336921 379.41887024 411.44067383 369.24169922 C411.06997321 355.61393738 408.34910878 342.08725735 400 331 C399.2575 329.948125 398.515 328.89625 397.75 327.8125 C393.90372366 323.87880829 389.61389096 320.96905974 385 318 C384.31164062 317.53335937 383.62328125 317.06671875 382.9140625 316.5859375 C368.89157102 307.82859608 349.12993117 306.5436984 333.2109375 309.8828125 C314.10898014 314.61024594 297.56335199 326.49996533 287 343 C274.8323706 363.4801683 269.9288594 386.30652921 269.76171875 409.93359375 C269.75197021 411.07182587 269.74222168 412.21005798 269.73217773 413.38278198 C269.56576072 437.87458186 269.89671656 461.71705931 273.68310547 485.93554688 C274.39009656 490.54133784 275.02964465 495.1571651 275.68305969 499.77079773 C276.22135835 503.56515749 276.76623774 507.35803005 277.33666992 511.14770508 C282.73853974 547.26361507 283.95512785 586.63803631 262.90625 618.1328125 C252.7720287 631.31464383 238.41205377 640.30298734 222 643 C206.98903509 644.43994801 193.05675315 640.08795494 181.36132812 630.68212891 C166.04983928 617.42747715 158.50958975 600.09432396 153.015625 580.98046875 C152.84321289 580.38129639 152.67080078 579.78212402 152.49316406 579.16479492 C150.62718168 570.97387125 150.67275067 562.66396907 150.625 554.3125 C150.62043793 553.53955597 150.61587585 552.76661194 150.61117554 551.97024536 C150.56524376 529.79421558 153.64477467 507.9040294 156.53125 485.95605469 C161.3335031 449.18880435 163.35521875 408.01480651 141.90234375 375.85546875 C128.795607 358.84763431 108.92054387 349.64489463 88.1015625 346.390625 C58.27855395 343.14333662 31.89228569 352.05971508 8.65234375 370.640625 C6.74654871 372.20460648 4.8527082 373.78338445 2.9765625 375.3828125 C1 377 1 377 -4 377 C-4 252.59 -4 128.18 -4 0 Z"
              />
              <mask id="dripMask">
                <rect width={dripTiles * 1920} height="650" fill="white" />
                {Array.from({ length: dripTiles }, (_, i) => (
                  <use key={i} href="#drip" fill="black" transform={`translate(${i * 1920}, 0)`} />
                ))}
              </mask>
            </defs>
            <rect width={dripTiles * 1920} height="650" fill="black" mask="url(#dripMask)" />
          </svg>
          <div className="bg-black">
            <div className="max-w-4xl mx-auto px-3 sm:px-8 pt-2 sm:pt-3 pb-12">
              <PromptGuide selectedModel={selectedModel} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
