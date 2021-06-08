const dutchSports = ["Voetbal", "Hockey", "Schaatsen"]
//a)
dutchSports.splice(3, 0, "Zeilen", "Zwemmen")
console.log(dutchSports)
//b) 
dutchSports.unshift("Volleybal")
console.log(dutchSports)
//c)
function checkSport (x) {
    if(x.includes('bal')) {
        return x
    } 
}

ballSports = dutchSports.map( x => checkSport(x))
ballSports.splice(ballSports.indexOf(undefined), ballSports.length);
console.log(ballSports)
console.log(ballSports.length)
//d)
console.log(dutchSports)
dutchSports.splice(1,2)
console.log(dutchSports)

//e)
dutchSports.sort()
console.log(dutchSports)
//f)
 for (i=0; i<dutchSports.length; i++) {
     console.log(dutchSports[i])
 }

 //g) 
 sportsLength = []
 for (i=0; i<dutchSports.length; i++) {
     newItem = dutchSports[i].length
     sportsLength.push(newItem)
 }

 console.log(sportsLength)