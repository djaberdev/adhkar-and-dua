const CategoryInfo = ({ TTS, En }) => {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
                <i className="ri-time-line flex-center-all w-[30px] h-[30px] rounded-full bg-white/30 backdrop-blur-[3px] ring-1 ring-grey/50"></i>
                <p className="text-[15px] max-sm:text-sm text-[#ccc]">{TTS === "" ? "غير محدد" : TTS }</p>
            </div>
            <div className="flex items-center gap-3">
                <i className="ri-check-fill flex-center-all w-[30px] h-[30px] rounded-full bg-white/30 backdrop-blur-[3px] ring-1 ring-grey/50"></i>
                <p className="text-[15px] max-sm:text-sm text-[#ccc]">{En}</p>
            </div>
        </div>
    );
};

export default CategoryInfo;