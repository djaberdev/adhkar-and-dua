import { useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router";
import { DataContext } from "../context/DataContext";
import { Header, DhikrCard, Sidebar } from "../components";
import emptyFolder from "../assets/empty-folder.png";

import { state } from "../store";
import { useSnapshot } from "valtio";

import clsx from "clsx";

import { AnimatePresence } from "framer-motion";
import AdvancedDhikr from "../components/AdvancedDhikr";

const GenericAdhkarPage = ({ link, category, timeToSay, encouragement }) => {

    // Get The "Data" From "DataContext" Depends On The Specific "Category"
    const data = useContext(DataContext);
    const specificAdhkar = data ? data[category] : [];

    {/* Stoped because of an issue in the production */}
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const location = useLocation();
    const prevPathRef = useRef(location.pathname);

    // Some Resets When The Pathname (URL) Get Changed 
    useEffect(() => {
        if (prevPathRef.current !== location.pathname) {
            sessionStorage.clear();
            window.scrollTo({top: 0, left: 0, behavior: "smooth"});
            window.location.reload();
        };
    }, [location.pathname]);

    // State
    const snap = useSnapshot(state);

    // Update Available View
    const sectionRef = useRef(null);

    useEffect(() => {

        // On Update
        state.availableView.width = sectionRef.current.offsetWidth;

        // On Resize
        window.addEventListener("resize", () => {
            state.availableView.width = sectionRef.current.offsetWidth;
        });

    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full max-w-[768px] mx-auto border-dashed border-2 border-t-0 border-b-0 max-md:border-0 border-[#aaa] overflow-x-hidden">
            <Header
                // toggleSidebar={() => setIsSidebarOpen(prev => !prev)} 
                category={category} 
                timeToSay={timeToSay} 
                encouragement={encouragement} 
            />
            {/* Stoped because of an issue in the production */}
            {/* <Sidebar isOpen={isSidebarOpen} /> */}

            <div className="relative flex flex-col items-center gap-5 px-5 my-6">
                {data 
                ? (
                    specificAdhkar.length !== 0 
                    ? specificAdhkar.map((dhObject, i) => (
                        Array.isArray(dhObject) 
                        ? dhObject.map((obj, j) => <DhikrCard 
                            key={`Dhikr-${i}-${j}`} 
                            uniqueKey={`${link}-${i}-${j}`}
                            dhikrObject={obj} 
                        />)
                        : <DhikrCard 
                            key={`Dhikr-${i}`} 
                            uniqueKey={`${link}-${i}`}
                            dhikrObject={dhObject} 
                        />
                    ))
                    : <div className="flex flex-col items-center gap-3 mt-4">
                        <img src={emptyFolder} alt="empty" width={105} />
                        <p className="text-lg text-center">لا تـــوجد أذكــار ليتم عـرضـها !</p>
                    </div>
                ) 
                : (
                    <p className="py-2 px-4 rounded-lg ring-2 ring-primary-green bg-primary-green/20 w-fit">جـــاري التحميل ...</p>
                )}

            </div>

            {/* Advanced Dhikr Controller */}
            <div 
                className={clsx("fixed w-[54px] h-[54px] left-1/2 -translate-x-1/2 bottom-4 border-2 border-shiny-green backdrop-blur-[5px] z-5 cursor-pointer duration-600 flex-center-all", snap.isTasbeehWanted ? "bg-soft-green rounded-xl scale-108" : "bg-primary-green/70 rounded-lg", snap.isTasbeehConfirmed ? "translate-y-30 rotate-15 opacity-50" : "translate-y-0 opacity-100")}
            >
                <div 
                    className={clsx("relative flex-center-all")}
                >
                    <i class={clsx("ri-arrow-up-s-line absolute text-[22px] duration-300 opacity-100 animate-pulse", !snap.isTasbeehWanted && "opacity-0!")}></i> 
                    <i className={clsx("ri-focus-3-line absolute text-[24px] duration-300 opacity-100", snap.isTasbeehWanted && "opacity-0!")}></i>
                </div> 
            </div>

            {/* Advanced Dhikr Page */}
            <AdvancedDhikr />

        </section>
    );
};

export default GenericAdhkarPage;