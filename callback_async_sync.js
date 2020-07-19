
const callbackAsync = (i) => {
    setTimeout(function(){
        console.log("i call = " + i + " time call= "+new Date().getSeconds())
    }, 1000)
}
const callbackSync = (i) => {
    console.log("i call = " + i + " time call= "+new Date().getSeconds())
}
function asyncForEach(arr, callback){
    arr.forEach(callback)
}

(function(){
    console.log('start time = ' + new Date().getSeconds())

    // asyncForEach([1,2,3,4,5,6],callbackAsync)
    const numbers = [1,2,3,4,5,6];

    numbers.forEach(callbackSync);

    console.log('end time = ' + new Date().getSeconds())
})()
