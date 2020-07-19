function main(){
    console.log('start ----' + new Date().getSeconds());

    setTimeout(
        function callback1(){ console.log('callback1 ----'+ new Date().getSeconds()); }
        , 2000);

    setTimeout(
        function callback2(){console.log('callback2 ----'+ new Date().getSeconds());}
        , 5000);

    runWhileLoopForNSeconds(5);
    console.log('end---------'+ new Date().getSeconds());
}

main();

function runWhileLoopForNSeconds(sec){
    let start = Date.now(), now = start;
    while (now - start < (sec*1000)) {
        now = Date.now();
    }
}