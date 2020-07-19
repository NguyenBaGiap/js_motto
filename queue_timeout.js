// queue normal

const callback1 = () => {
    console.log("callback1...time = " + new Date().getSeconds())
}
const callback2 = () => {
    console.log("callback2...time = " + new Date().getSeconds())
}

(function(){
    console.log('start...' + new Date().getSeconds())

    setTimeout(callback1, 1000)

    let x = Date.now()
    while(Date.now() - x < 5000){}

    setTimeout(callback2, 5000)


    console.log('end...' + new Date().getSeconds())
})()

// example timeout
const callback1 = () => {
    console.log("callback1...start time = " + new Date().getSeconds())
    let x = Date.now()
    while(Date.now() - x < 9000){
    }
    console.log("callback1...end time = " + new Date().getSeconds())
}
const callback2 = () => {
    console.log("callback2...time = " + new Date().getSeconds())
}

(function(){
    console.log('start...' + new Date().getSeconds())

    setTimeout(callback1, 1000)

    setTimeout(callback2, 5000)



    console.log('end...' + new Date().getSeconds())
})()