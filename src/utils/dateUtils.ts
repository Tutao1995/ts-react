import { compareNumberWidthNine } from "./common";
import { dateType } from "../tsTypes/types";

// 获取某年某月有多少天
const getMonthDays = (year: number, month: number) => {
    let d = new Date(year, month, 0);
    return d.getDate();
};
// 时间转 年-月-日
const formatTimeToDate = (time: number = new Date().getTime()) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = compareNumberWidthNine(date.getMonth() + 1);
    const day = compareNumberWidthNine(date.getDate());
    return `${year}-${month}-${day}`;
};
// 时间转 年-月-日 时：分：秒
const formatTimeToDateTime = (time: number = new Date().getTime()) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = compareNumberWidthNine(date.getMonth() + 1);
    const day = compareNumberWidthNine(date.getDate());
    const hour = compareNumberWidthNine(date.getHours());
    const minute = compareNumberWidthNine(date.getMinutes());
    const second = compareNumberWidthNine(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
// 20200606 -> 2020-06-06
const formatStrToDate = (param: dateType) => {
    const temp = String(param);
    return `${temp.slice(0, 4)}-${temp.slice(4, 6)}-${temp.slice(6)}`;
};
// 120 -> 00:02:00
const formatSecondToHMS = (param: number) => {
    const hour = compareNumberWidthNine(Math.ceil(param / 60 / 60));
    const minute = compareNumberWidthNine(Math.ceil((param / 60) % 60));
    const second = compareNumberWidthNine(Math.ceil(param % 60));
    return `${hour}:${minute}:${second}`;
};
//获取当前月过去的天数  如果是当月的1号则返回上个月
const getCurrentMonthPassed = () => {
    let start,
        end,
        dateNow = new Date();
    let year = dateNow.getFullYear();
    let month = dateNow.getMonth();
    let day = dateNow.getDate();
    if (day === 1) {
        //如果为当月的第一天 展示为前一个月
        start = formatTimeToDate(
            dateNow.setTime(new Date(year, month - 1, 1).getTime())
        );
        end = formatTimeToDate(
            dateNow.setTime(new Date().getTime() - 3600 * 1000 * 24 * 1)
        );
    } else {
        start = formatTimeToDate(
            dateNow.setTime(new Date(year, month, 1).getTime())
        );
        end = formatTimeToDate(
            dateNow.setTime(new Date().getTime() - 3600 * 1000 * 24 * 1)
        );
    }
    return {
        start,
        end,
    };
};
export {
    getMonthDays,
    formatTimeToDate,
    formatTimeToDateTime,
    formatStrToDate,
    formatSecondToHMS,
    getCurrentMonthPassed,
};
