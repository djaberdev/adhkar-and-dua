import { Link } from "react-router";
import { CategoryInfo, Time } from "./components";
import { categories } from "./constants";

const Homepage = () => {

    return (
        <section className="relative min-h-screen w-full max-w-[780px] mx-auto border-dashed border-2 border-t-0 border-b-0 max-md:border-0 border-[#aaa]">
            <div className={`px-4 flex flex-col items-center text-center relative w-full bg-[url('./assets/mosque-background-1.jpg')] bg-center bg-no-repeat bg-cover dark-overlay`}>
                <div className="relative pt-10">
                    <h1 className="text-6xl max-md:text-5xl font-semibold font-noto! text-grey mb-15">أذكـــار و دعــاء</h1>
                    <Time />
                </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 m-4">
                {categories.map((category) => (
                    <Link
                        key={category.link}
                        to={`/${category.link}`}
                        className="flex items-end relative bg-[url('./assets/placeholder.png')] bg-image-settings min-h-[300px] rounded-xl overflow-hidden dark-overlay-on-hover group"
                    >
                        <div className="w-full flex flex-col gap-4 max-sm:gap-3 p-4 pb-7 translate-y-full duration-300 group-hover:translate-y-0 overflow-hidden">
                            <h2 className="text-3xl max-sm:text-2xl text-grey font-noto! leading-[2] w-full whitespace-nowrap overflow-hidden text-ellipsis">{category.category}</h2>
                            <CategoryInfo TTS={category.timeToSay} En={ category.encouragement} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Homepage;