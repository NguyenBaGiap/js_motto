const callback1 = () => {
    const  x = Date.now()
    while(Date.now() - x < 5000){

    }
    console.log('call back1....' + new Date().getSeconds())
}
const callback2 = () => {
    console.log('call back2....' + new Date().getSeconds())
}
const callback3 = () => {
    console.log('call back3....' + new Date().getSeconds())
}
function test() {
    console.log('start test..')
    setTimeout(callback1,1000)
    setTimeout(callback2,1000)
    setTimeout(callback3,1000)
    console.log('end test..')
}

(function(){
    console.log('start....' + new Date().getSeconds())
    test()

    console.log('end....' + new Date().getSeconds())
})()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop