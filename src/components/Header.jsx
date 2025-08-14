import { useState } from "react";
import { Link } from "react-router";
import CategoryInfo from "./CategoryInfo";
import { Collapse } from "react-collapse";

const Header = ({ toggleSidebar, category, timeToSay, encouragement }) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <header className="relative flex flex-col p-5 pb-6.5 bg-primary-green rounded-b-2xl">
            <div className="flex-center-between gap-4 mb-3">
                <h1 className="text-3xl max-md:text-2xl font-bold font-noto! text-grey leading-[2.2] w-full ellipsis-text">{category}</h1>
                <div className="flex flex-row-reverse items-center gap-3">
                    <Link
                        to={'/'}
                        className="translate-y-1.5 flex-center-all w-[45px] h-[45px] rounded-md bg-soft-green/95 duration-300 hover:bg-soft-green active:scale-[0.96]"
                        title="اِرجـع إلى الصـفحة الرئيسية"
                    >
                        <i className="ri-home-4-line text-2xl text-primary-green"></i>
                    </Link>

                    <button
                        className="translate-y-1.5 flex-center-all w-[45px] h-[45px] rounded-md bg-soft-green/95 duration-300 hover:bg-soft-green active:scale-[0.96] cursor-pointer"
                        title="إعـرض/إخـفي القـائمة الجـانبية"
                        onClick={toggleSidebar}
                    >
                        <i className="ri-menu-3-line text-2xl text-primary-green"></i>
                    </button>
                    
                    <button
                        className="translate-y-1.5 flex-center-all w-[45px] h-[45px] rounded-md bg-soft-green/95 duration-300 hover:bg-soft-green active:scale-[0.96] cursor-pointer"
                        title="إعـرض معلومات عن هذا القــسم"
                        onClick={() => setIsCollapsed(prev => !prev)} 
                    >
                        <i className="ri-arrow-down-s-line text-2xl text-primary-green"></i>
                    </button>

                    <button
                        className="translate-y-1.5 flex-center-all w-[45px] h-[45px] rounded-md bg-red-500 hover:bg-red-500/95 duration-300  active:scale-[0.96] cursor-pointer"
                        title="اِبـدأ من جـديـد"
                        onClick={() => {
                            window.sessionStorage.clear();
                            window.location.reload();
                        }}
                    >
                        <i className="ri-reset-right-line text-2xl text-grey"></i>
                    </button>
                </div>
            </div>
            <Collapse isOpened={isCollapsed}>
                <div className="p-1">
                    <CategoryInfo TTS={timeToSay} En={encouragement} />
                </div>  
            </Collapse>
        </header>
    );
};

export default Header;