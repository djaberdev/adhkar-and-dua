import { useState, useEffect } from "react";
import checked from "../assets/checked.png";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import clsx from "clsx";

const DhikrCard = ({ dhikrObject, uniqueKey }) => {

    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [dhikrCount, setDhikrCount] = useState(Number(dhikrObject.count));
    const [isDhikrFinish, setIsDhikrFinish] = useState(false);
    const [isTextCopied, setIsTextCopied] = useState(false);

    // Restore The Finish State From The sessionStorage 
    useEffect(() => {
        
        let stored = sessionStorage.getItem(`dhikr-finish-${uniqueKey}`);
        if (stored === "true") setIsDhikrFinish(true);

    }, [uniqueKey]);

    // Save The Finish State In The sessionStorage 
    useEffect(() => {

        if (dhikrCount === 0) {
            setIsDhikrFinish(true);
            sessionStorage.setItem(`dhikr-finish-${uniqueKey}`, "true");
        };
        
    }, [dhikrCount, uniqueKey]);

    // ? Using The [uniqueKey] As A Dependency Array Make Sure That The Dhikr Card Is Unique And Also Trigger The Effect For Each Individual Card

    return dhikrObject.category !== "stop" && (
        <div 
            className={clsx("w-full relative bg-secondary-green/25 rounded-xl border-2 border-b-0 border-secondary-green/35 shadow-sm duration-500 hover:bg-secondary-green/32")}
        >
            <div className={clsx("flex-center-all absolute top-1/2 left-1/2 -translate-1/2 h-full bg-black/60 backdrop-blur-xl z-2 rounded-xl duration-500 cursor-auto select-none w-0 scale-[0.6] opacity-0 invisible", isDhikrFinish && "w-full scale-[1] opacity-100 visible")}>
                <div className="flex flex-col items-center gap-3.5 text-center">
                    <img src={checked} alt="checked" width={60} />
                    <p className="text-lg text-grey">لــقد أنـــهيتَ هـذا الذكــر</p>
                </div>
            </div>

            <div className="relative flex flex-col p-6">
                <p className={clsx("flex-1 text-lg font-normal leading-[1.7]")}>
                    {dhikrObject.content.split(/[\\n,'\n']+/).filter(Boolean).join('')}
                </p>
                

                <div className={"bg-primary-green/90 p-2 rounded-full flex items-center gap-2 mt-6 duration-500 cursor-auto mb-5"}>
                    <button
                        className={clsx("flex-center-all w-[45px] h-[45px] rounded-full bg-soft-green duration-300 hover:bg-shiny-green/50 cursor-pointer group active:scale-[0.95] overflow-hidden", isTextCopied && "w-[128px]")}
                        title="نــسخ النص"
                        onClick={() => {
                            window.navigator.clipboard.writeText(dhikrObject.content.split(/[\\n,'\n']+/).filter(Boolean).join(''));
                            setIsTextCopied(true);
                            setTimeout(() => { setIsTextCopied(false) }, 2000);
                        }}
                    >
                        <div className={clsx("flex items-center duration-300", isTextCopied && "gap-2")}>
                            <i className={clsx("text-[22px] duration-300 group-hover:text-grey", isTextCopied ? "ri-check-fill" : "ri-file-copy-line")}></i>
                            <p className={clsx("text-[15px] duration-300 group-hover:text-grey whitespace-nowrap w-0 scale-x-0 opacity-0", isTextCopied && "w-fit scale-x-100 opacity-100")}>تـم النــسخ</p>
                        </div>
                    </button>

                    <button
                        className="flex-center-all w-[45px] h-[45px] rounded-full bg-soft-green duration-300 hover:bg-shiny-green/50 cursor-pointer group active:scale-[0.95]"
                        title="معلــومات"
                        onClick={() => setIsInfoOpen(prev => !prev)}
                    >
                        <i className="ri-info-i text-[22px] group-hover:text-grey"></i>
                    </button>

                    <button 
                        className="flex-1 flex-center-all gap-2 bg-soft-green h-[45px] rounded-full duration-450 cursor-pointer hover:bg-soft-green/96 active:scale-[0.96] select-none"
                        onClick={() => setDhikrCount(prev => prev > 0 && prev - 1)}
                        title="تــكرار الذكــر"
                    >
                        <p className="text-[17px]">تــكرار</p>
                        <span className={clsx("w-[33px] h-[33px] rounded-full bg-primary-green flex-center-all text-grey", dhikrCount === 100 && "w-[40px]")}>{dhikrCount}</span>
                    </button>

                    <button
                        className="flex-center-all w-[45px] h-[45px] rounded-full border-2 border-grey bg-red-500 hover:bg-red-500/95 duration-300 cursor-pointer group active:scale-[0.95] group"
                        title="إنــهاء الذكــر"
                        onClick={() => setDhikrCount(0)}
                    >
                        <div className="h-full w-0.5 bg-grey rotate-45 group-hover:rotate-[55deg] duration-300"></div>
                    </button>
                </div>

                <SlideDown className={clsx("bg-secondary-green/25 rounded-lg border-b-0 border-secondary-green/30 shadow-sm")}>
                    {isInfoOpen && (
                        <div className="space-y-2.5 p-3">
                            <div className="flex items-start gap-2.5">
                                <span className="py-1.5 px-3 text-[13px] text-grey bg-primary-green rounded-full">المــصـدر</span>
                                <p className="text-[14.5px] leading-[1.6] translate-y-1">{dhikrObject.reference ? dhikrObject.reference : "غير محدد"}</p>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="py-1.5 px-3 text-[13px] text-grey bg-primary-green rounded-full">الشــرح</span>
                                <p className="text-[14.5px] leading-[1.6] translate-y-1">{dhikrObject.description ? dhikrObject.description : "غير محدد"}</p>
                            </div>
                        </div>
                    )}
                </SlideDown>
            </div>
        </div>
    );
};

export default DhikrCard;