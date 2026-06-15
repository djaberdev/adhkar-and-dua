import { useState, useEffect } from "react";
import { Link } from "react-router";
import { CategoryInfo, Time } from "./components";
import { categories } from "./constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Homepage = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    // Track When The Site Is Fully Loaded
    useEffect(() => {

        const handleLoad = () => setIsLoaded(true);

        // if (document.readyState === "complete") {
        //     handleLoad();
        // } else {
        //     window.addEventListener("load", handleLoad);
        // }

        return () => window.removeEventListener("load", handleLoad);

    }, []);

    // Handle Scrollbar While Loading
    // useEffect(() => {
    //     document.body.style.overflow = isLoaded ? "auto" : "hidden"; 
    // }, [isLoaded]);

    // Loading Animation
    useGSAP(() => {

        const mainTL = gsap.timeline({
            onComplete: () => setIsLoaded(true)
        });

        const starsTL = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.inOut" }, delay: 0.3 });

        starsTL.to(".star-1", {
            x: 200,
            y: 75,
            rotate: 20,
            scale: 1
        })

        starsTL.to(".star-2", {
            x: -180,
            y: 100,
            rotate: -130,
            scale: 0.8
        })

        starsTL.to(".star-3", {
            x: -80,
            y: -140,
            rotate: 62,
            scale: 0.6
        })

        mainTL.add(starsTL);
        mainTL.fromTo(".heading",
            {
                scale: 0.9,
                opacity: 0,
                y: 16
            },
            {
                scale: 1.1,
                opacity: 1,
                y: 0
            }
        )
        mainTL.from(".line path", {
            duration: 1.2,
            drawSVG: 0,
            ease: "power2.inOut"
        }, "<");

    });

    // Reveal Content Animation
    useGSAP(() => {
        if (isLoaded) {
            gsap.fromTo(".preloader",
                {
                    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
                },
                {
                    clipPath: "polygon(0 0, 100% 0%, 100% 0%, 0 0%)",
                    duration: 1.6,
                    ease: "power2.inOut"
                }
            )
        }
    }, [isLoaded])

    return (
        <section className="relative min-h-screen w-full max-w-[860px] mx-auto border-dashed border-2 border-t-0 border-b-0 max-md:border-0 border-[#aaa]">
            
            {/* Preload Screen */}
            <div 
                className="preloader absolute top-1/2 left-1/2 -translate-1/2 w-[calc(100%_-_5px)] h-[calc(100%_-_5px)] rounded-xl bg-soft-green z-10 overflow-hidden"
            >

                <div className="relative w-full h-screen flex-center-all">
                    <h1 className="heading text-7xl font-semibold font-noto! text-primary-green mb-15 -mt-12">أذكـــار و دعــاء</h1>

                    {/* SVG Line */}
                    <svg 
                        width="956" 
                        height="128" 
                        viewBox="0 0 956 128" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="line absolute bottom-10"
                    >
                        <path d="M4.00098 123.532C4.00098 123.532 279.654 6.22551 466.001 4.03209C661.246 1.73393 951.501 123.532 951.501 123.532" stroke="#225B48" strokeWidth="8" strokeLinecap="round"/>
                    </svg>

                    {/* Shiny Stars */}
                    <div className="absolute w-full h-2/4 flex-center-all -mt-12">
                        <svg 
                            width="80" 
                            height="80" 
                            viewBox="0 0 80 80" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="star-1 absolute"
                        >
                            <g opacity="0.8">
                                <path d="M40 1.66667L53.3333 26.6667L78.3333 40L53.3333 53.3333L40 78.3333L26.6667 53.3333L1.66667 40L26.6667 26.6667L40 1.66667Z" fill="#3A9778"/>
                            </g>
                        </svg>

                        <svg 
                            width="80" 
                            height="80" 
                            viewBox="0 0 80 80" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="star-2 absolute"
                        >
                            <g opacity="0.8">
                                <path d="M40 1.66667L53.3333 26.6667L78.3333 40L53.3333 53.3333L40 78.3333L26.6667 53.3333L1.66667 40L26.6667 26.6667L40 1.66667Z" fill="#3A9778"/>
                            </g>
                        </svg>

                        <svg 
                            width="80" 
                            height="80" 
                            viewBox="0 0 80 80" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="star-3 absolute"
                        >
                            <g opacity="0.8">
                                <path d="M40 1.66667L53.3333 26.6667L78.3333 40L53.3333 53.3333L40 78.3333L26.6667 53.3333L1.66667 40L26.6667 26.6667L40 1.66667Z" fill="#3A9778"/>
                            </g>
                        </svg>
                    </div>

                </div>
            </div>

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
                        className={"relative flex items-end min-h-[380px] rounded-xl overflow-hidden dark-overlay-on-hover duration-300 group hover:shadow-[0px_0px_10px_2px_rgba(0,0,0,0.15)]"}
                    >
                        {category.bg ? (
                            <img 
                                src={category.bg}
                                alt={category.link}
                                className="absolute inset-0 w-full h-full z-0 object-cover"
                            />
                        ) : (
                            <img 
                                src="/src/assets/placeholder.png"
                                alt="placeholder"
                                className="absolute inset-0 w-full h-full z-0 object-cover"
                            />
                        )}
                        <div className="w-full flex flex-col gap-4 max-sm:gap-3 p-4 pb-7 translate-y-full max-md:translate-y-0 duration-300 group-hover:translate-y-0 overflow-hidden z-2">
                            <h2 className="text-3xl max-sm:text-2xl text-grey font-noto! leading-[2] w-full whitespace-nowrap overflow-hidden text-ellipsis">{category.category}</h2>
                            <CategoryInfo TTS={category.timeToSay} En={category.encouragement} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Homepage;