import { Link } from "react-router";
import { categories } from "../constants";
import clsx from "clsx";

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={clsx("absolute top-0 -right-full w-0 z-5 h-fit rounded-bl-2xl bg-primary-green shadow-3xl overflow-y-auto hide-scrollbar duration-1200", isOpen && "right-0 w-2/4 max-sm:w-[62%]")}>
            <div className="p-6 flex flex-col gap-5">
                {categories.map(({ category, link, icon }) => (
                    <Link
                        key={link}
                        to={`/${link}`}
                        className="w-full flex-center-between gap-3 py-2 pl-2 pr-4 bg-soft-green/20 rounded-full duration-300 hover:bg-soft-green/30"
                    >
                        <span className="text-lg max-sm:text-base text-grey flex-1 ellipsis-text">{category}</span>
                        <img src={icon} alt={link} className="w-[60px]"/>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;