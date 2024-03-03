function add(){
    var a=10
    var b=20
    var c=24
    var d=65
    var e=96
    console.log(a+b+c+d+e)
}
add()
function sub(){
    var a=10
    var b=20
    var c=24
    var d=65
    var e=96
    console.log(a-b-c+d-e)
}
sub()
function mul(){
    var a=10
    var b=20
    var c=24
    var d=65
    var e=96
    console.log(a*b*c*d*e)
}
mul()
function div(){
    var a=10
    var b=20
    var c=24
    var d=65
    var e=96
    console.log(a/b/c*d*e)
}
div()

function leapyear(year){
    return(year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016))
console.log(leapyear(2000))
console.log(leapyear(1700))
console.log(leapyear(1800))
