const CategoryInfo = ({ TTS, En }) => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
                <i className="ri-time-line flex-center-all w-[30px] h-[30px] rounded-full bg-white/20 backdrop-blur-[5px] ring-1 ring-grey/40 text-[#e0e0e0]"></i>
                <p className="text-[15px] max-sm:text-sm text-[#e0e0e0] flex-1 whitespace-nowrap text-ellipsis overflow-hidden">{TTS === "" ? "غير محدد" : TTS }</p>
            </div>
            <div className="flex items-center gap-3">
                <i className="ri-check-fill flex-center-all w-[30px] h-[30px] rounded-full bg-white/20 backdrop-blur-[5px] ring-1 ring-grey/40 text-[#e0e0e0]"></i>
                <p className="text-[15px] max-sm:text-sm text-[#e0e0e0] flex-1 whitespace-nowrap text-ellipsis overflow-hidden">{En}</p>
            </div>
        </div>
    );
};

export default CategoryInfo;