const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
//a)
console.log(dutchSports[0])
console.log(dutchSports[1])
console.log(dutchSports[2])

//b)
for (i=0; i<=2; i++) {
    console.log(dutchSports[i])
}

for (const item in dutchSports) {
    console.log(dutchSports[item])
}

for (element of dutchSports) {
    console.log(element)
}

//c)
for (i=0; i<=20; i+=2) {
    console.log(i)
}


//d)
for (i=0; i<=2; i++) {
    for(j=0; j<=10; j++)
    console.log(j)

    //e)
    for(j=0; j<=20; j+=2)
    console.log(j)

    //f)
    for(k=0; k<=30; k+=3)
    console.log(k)
}


 // g) Fibonacci Series
let series = [0, 1]

for (i=0; i<=50; i++) {
    nextNumber = series[i] + series[i+1]
    series.push(nextNumber)
}
console.log(series)

//h) bubblesort
list = [2,7,5,10,4,9,3,1,8,6]


for (item in list) {
    for (i=0; i<=list.length; i++) {
        if (list[i] > list[i+1]) {
            list.splice(i, 0, list[i+1])
            list.splice(i+2, 1)
            console.log(list)
        }
    }
}
