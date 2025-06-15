import HijriDate from "hijri-date/lib/safe";
import { hijriMonths } from "../constants/index";

const Time = () => {    

    function formatHijri(todayHijri) {
        return `${todayHijri.getDate()} ${hijriMonths[todayHijri.getMonth() - 1]} ${todayHijri.getFullYear()}`;
    };

    function formatClock(nowDate) {

        let hours = nowDate.getHours() < 10 ? `0${nowDate.getHours()}` : nowDate.getHours() ;
        let minutes = nowDate.getMinutes() < 10 ? `0${nowDate.getMinutes()}` : nowDate.getMinutes() ;
        let meridium = hours < 12 ? 'صبــاحا' : 'مســاء' ;

        return `${hours}:${minutes} ${meridium}`;
    };

    return (
        <div className="space-y-1.5 py-6 px-8 bg-white rounded-t-2xl">
            <p className="text-2xl max-sm:text-xl font-semibold text-primary-green">{formatClock(new Date())}</p>
            <p className="text-xl max-sm:text-lg text-primary-green">{formatHijri(new HijriDate())}</p>
        </div>
    );
};

export default Time;