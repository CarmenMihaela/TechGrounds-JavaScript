let arrayLike = document.querySelectorAll('div')
console.log(arrayLike)

//a)
listInitial = [1, 3, 9]
listLike = Array.from(listInitial, x => x * 3)
console.log(listLike)

//b) 
listFiltered = listInitial.filter(x => x > 1)
console.log(listFiltered)

//c)
listFind = listInitial.find(x => x >= 9)
console.log(listFind)

//d)
listSome= listInitial.some(x => x*3)
console.log(listSome)

//e)
listEvery= listInitial.every(x => x >= 9)
console.log(listEvery)

//f)
listInclude= listInitial.includes(3)
console.log(listInclude)