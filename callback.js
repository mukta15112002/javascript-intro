function sample(a,b,cb){
    var p=a+b
    var q=a-b
    var result=cb(p,q)
    return result

 }
function sum(p,q){
    return(p+q)
}
function sub(p,q){
    return(p-q)
}

console.log(sample(16,8,sum))
