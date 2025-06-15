import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <section className="p-5 relative min-h-screen w-full max-w-[768px] mx-auto border-dashed border-2 border-t-0 border-b-0 max-md:border-0 border-[#aaa]">
            <div className="flex-center-all flex-col p-4 w-[100%] h-[94vh] bg-secondary-green/40 rounded-2xl">
                <img src="/src/assets/error.png" alt="error" className="w-[350px]" />
                <div className="flex flex-col items-center mt-4 gap-5">
                    <h2 className="text-2xl">أنـت في الصفحة الخطـــأ !</h2>
                    <Link to={'/'} className="py-3.5 px-5 rounded-md text-white bg-secondary-green/80 duration-300 hover:bg-secondary-green">
                        <span>إرجــع إلى الصفحة الرئيسية</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;