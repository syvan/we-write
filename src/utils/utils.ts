//事件节流
export function throttle(fn: Function,delay: number){
    let last = 0,
        timer: any = null;
    
        return () {
            let contxt = this,
                args = arguments,
                now = +new Date();
            
            if(now - last < delay){
                clearTimeout(timer);
                timer = setTimeout(function() {
                    last = now;
                    fn.apply(contxt,args);
                },delay)
            }
        }
}