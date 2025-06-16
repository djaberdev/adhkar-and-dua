import { useState, useEffect } from "react";
import HijriDate from "hijri-date/lib/safe";
import { hijriMonths } from "../constants/index";

const Time = () => {    

    const [nowDate, setNowDate] = useState(new Date());

    useEffect(() => {

        const interval = window.setInterval(() => {
            setNowDate(new Date());
        }, (60 * 1000)); // every 01 minute

        return () => window.clearInterval(interval); // Cleanup

    }, []);

    function formatHijri(todayHijri) {
        return `${todayHijri.getDate()} ${hijriMonths[todayHijri.getMonth() - 1]} ${todayHijri.getFullYear()}`;
    };

    function formatClock(date) {

        let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ;
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes() ;
        let meridium = hours < 12 ? 'صبــاحا' : 'مســاء' ;

        return `${hours}:${minutes} ${meridium}`;
    };

    return (
        <div className="space-y-1.5 py-6 px-8 bg-white rounded-t-2xl">
            <p className="text-2xl max-sm:text-xl font-semibold text-primary-green">{formatClock(nowDate)}</p>
            <p className="text-xl max-sm:text-lg text-primary-green">{formatHijri(new HijriDate())}</p>
        </div>
    );
};

export default Time;