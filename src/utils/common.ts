const compareNumberWidthNine = (param: number) => {
    return param > 9 ? param : `0${9}`;
};
// 函数防抖
/* 
  函数防抖（debounce）：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
  如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
  如下图，持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件。
*/
const debounce = (fn: Function, wait: number = 300) => {
    let timeout: number | null = null;
    return function () {
        if (timeout !== null) window.clearTimeout(timeout);
        timeout = window.setTimeout(fn, wait);
    };
};

//函数节流
/* 
函数节流（throttle）：当持续触发事件时，保证一定时间段内只调用一次事件处理函数。
节流通俗解释就比如我们水龙头放水，阀门一打开，水哗哗的往下流，秉着勤俭节约的优良传统美德，我们要把水龙头关小点，最好是如我们心意按照一定规律在某个时间间隔内一滴一滴的往下滴。
如下图，持续触发scroll事件时，并不立即执行handle函数，每隔1000毫秒才会执行一次handle函数。
*/
const throttle = (fn: Function, wait: number = 300) => {
    let timer: number | null = null;
    let throttled: Function = function (): void {
        let args = arguments;
        if (!timer) {
            timer = window.setTimeout(function (this:any) {
                fn.apply(this, args);
                timer = null;
            }, wait);
        }
    };
    return throttled;
};

export  { compareNumberWidthNine, debounce, throttle };
