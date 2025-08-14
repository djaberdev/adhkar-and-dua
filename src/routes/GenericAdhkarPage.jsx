import { useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router";
import { DataContext } from "../context/DataContext";
import { Header, DhikrCard, Sidebar } from "../components";
import emptyFolder from "../assets/empty-folder.png";

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

    return (
        <section className="relative min-h-screen w-full max-w-[768px] mx-auto border-dashed border-2 border-t-0 border-b-0 max-md:border-0 border-[#aaa] overflow-x-hidden">
            <Header
                // toggleSidebar={() => setIsSidebarOpen(prev => !prev)} 
                category={category} 
                timeToSay={timeToSay} 
                encouragement={encouragement} 
            />
            {/* Stoped because of an issue in the production */}
            {/* <Sidebar isOpen={isSidebarOpen} /> */}

            <div className="flex flex-col items-center gap-5 px-5 my-6">
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
        </section>
    );
};

export default GenericAdhkarPage;