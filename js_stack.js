// stack
function foo(){
    console.log('foo call..')
    bar()
}
function bar(){
    console.log('bar call..')
    buu()
}
function buu(){
    throw Error('quit stack')
}

(function(){
    console.log('start.....')
    foo()
    console.log('end.....')
})()

// maximum stack
function foo(){
    console.log('foo')
    foo()
}

(function(){
    console.log('start.....')
    foo()
})()

//