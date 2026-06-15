import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { state } from "../store";
import { useSnapshot } from "valtio";

import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'; 

gsap.registerPlugin(MotionPathPlugin);

const AdvancedDhikr = () => {

    
    const snap = useSnapshot(state);

    // TEST
    // useEffect(() => {
    //     console.log(snap.TasbeehInfo.uniqueKey);
    // }, [state.TasbeehInfo]);
    
    let tasbeehOBJ = snap?.TasbeehInfo;
    let availableWidth = snap.availableView.width;
    
    // Advanced Tasbeeh Functionality
    const [countProg, setCountProg] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const btnRef = useRef(null);

    useEffect(() => {
        if (snap.TasbeehInfo) {
            setCountProg(snap.TasbeehInfo.count);
        }
    }, [snap.TasbeehInfo?.count]);

    function handleClick() {

        setCountProg(prev => prev - 1);

        if (Number(snap.TasbeehInfo.count) > 1) {
            if (countProg === 1) {
                setIsFinished(true);
                btnRef.current.classList.add("disabled-btn");

                // Set the dhikr as FINISHED within the SessionStorage
                sessionStorage.setItem(`dhikr-finish-${snap.TasbeehInfo.uniqueKey}`, "true");      

                // Realod page to show FINISH-COVER
                setTimeout(() => {
                    window.location.reload();
                }, 3500);

            }
        } else {
            setIsFinished(true);
            btnRef.current.classList.add("disabled-btn");

            // Set the dhikr as FINISHED within the SessionStorage
            sessionStorage.setItem(`dhikr-finish-${snap.TasbeehInfo.uniqueKey}`, "true");

            // Realod page to show FINISH-COVER
            setTimeout(() => {
                window.location.reload();
            }, 3500);

        }
    }

    useGSAP(() => {
        if (countProg || countProg === 0) {
            
            gsap.to(`.bullet-${Number(countProg)}`, {
                opacity: 1,
                ease: "power2.inOut",
                duration: 0.67,
            })

            gsap.to(`.bullet-${Number(countProg)}`, {
                ease: "power2.inOut",
                duration: 1.2,
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    end: tasbeehOBJ.count <= 10 && countProg > 0 ? [(countProg / countProg) - (countProg * 0.05)] : tasbeehOBJ.count === 1 && countProg > 0 ? [(countProg / countProg) - (countProg * 0.03)] : [(countProg / countProg) - (countProg * 0.002)]
                }
            })

        }

    }, [countProg]);

    // Action When Finish Dhikr
    useEffect(() => {
        if (isFinished === true) {
            setTimeout(() => {

                handleClose();

                btnRef.current.classList.remove("disabled-btn");

                // Main resets to give the ability to restart again
                setIsFinished(false);

                setCountProg(snap.TasbeehInfo.count);

                gsap.set(".bullet", { clearProps: "all" });
                
            }, 3000);
        }
    }, [isFinished]);

    // Functionality
    const pageRef = useRef(null);

    function handleClose() {
        pageRef.current.classList.replace("show_CP", "hide_CP");
    }

    return (
        <section 
            ref={pageRef}
            className={clsx("advanced-dhikr fixed z-5 h-[calc(100vh_-_8px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-soft-green border-1 border-primary-green rounded-xl flex flex-col items-center justify-between duration-600 overflow-hidden hide_CP")}
            style={{
                width: (availableWidth !== null && availableWidth) - 16,
            }}
        >
            
            {/* Part 01 — Show */}
            <div
                className="relative flex-center-all w-full h-[30%]"
            >
                <h2 
                    className="text-2xl max-w-[80%] text-center leading-[1.6]"
                >{tasbeehOBJ.content}</h2>
            </div>

            {/* Part 02 - SABHA */}
            <div className="relative w-full h-[30%] flex-center-all">

                {/* Path */}
                <svg 
                    width="961" 
                    height="96" 
                    viewBox="0 0 961 96" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-2"
                >
                    <path id="path" d="M1.00026 94.1095C1.00026 94.1095 302.419 4.54941 501 1.10948C681.852 -2.02332 960 63.1095 960 63.1095" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>

                {/* Bullets */}
                <div className="-left-[300px] absolute w-[300px] h-[300px] gap-6 flex items-center">
                    {Array.from({ length: tasbeehOBJ.count }).map((_, index) => (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink" 
                            xmlns:svgjs="http://svgjs.dev/svgjs" 
                            viewBox="0 0 800 800"
                            className={`bullet-${index} bullet absolute size-[300px] opacity-0`}
                            key={`BLT-${index}`}
                        >
                            <defs><radialGradient id="sssurface-grad-dark" r="75%" cx="20%" cy="20%">
                                <stop offset="0%" stop-color="hsla(160, 46%, 25%, 1.00)" stop-opacity="0"></stop>
                                <stop offset="100%" stop-color="#003322" stop-opacity="1"></stop>
                                </radialGradient><radialGradient id="sssurface-grad-light" r="25%" cx="30%" cy="30%">
                                <stop offset="0%" stop-color="#508b76" stop-opacity="0.75"></stop>
                                <stop offset="100%" stop-color="hsla(160, 46%, 25%, 1.00)" stop-opacity="0"></stop>
                            </radialGradient></defs>
                            <g>
                                <circle r="96" cx="400" cy="400" fill="hsla(160, 46%, 25%, 1.00)"></circle>
                                <circle r="96" cx="400" cy="400" fill="url(#sssurface-grad-dark)"></circle>
                                <circle r="96" cx="400" cy="400" fill="url(#sssurface-grad-light)"></circle>
                            </g>
                        </svg>
                    ))} 
                </div>

            </div>

            {/* Part 03 — BTN */}
            <div 
                ref={btnRef}
                className="relative w-[150px] h-[150px] flex-center-all mb-10 duration-500"
            >
                <button 
                    className="absolute w-[90%] h-[90%] bg-primary-green/85 rounded-full text-soft-green duration-500 hover:bg-primary-green active:bg-secondary-green active:scale-[0.94] cursor-pointer z-1"
                    onClick={() => handleClick()}
                >
                    <span className="z-2 text-5xl text-soft-green select-none shadow-2xl">{countProg}</span>
                </button>

                <div className="absolute w-[96%] h-[96%] bg-transparent outline-6 outline-primary-green rounded-full"></div>
            </div>

        </section>
    );
};

export default AdvancedDhikr;