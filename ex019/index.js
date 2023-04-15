var num  = [5, 8, 2, 8, 9, 3]
console.log (num)
console.log (num.length)
console.log(num[1])
console.log(num.sort())
console.log(num.push(1))

var pos = num.indexOf(4)
if (pos == -1) {
   console.log('o valor nao foi encontrado') 
}else {
    console.log(pos)
}
