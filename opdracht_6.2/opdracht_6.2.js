//a) b)

let Club1 = {
    name: "Books and Hooks",
    type: "reading and fishing",
    total: 24,
    contactInfo: {
    address: "Acaciastraat 50",
    telephone:  "06060606",
    person: "Carmen" } }

console.log(Club1)

//c)

let Club2 = {
    name: "Books and Pucks",
    type: "reading and fishing",
    total: 24,
    contactInfo: {
    address: "Acaciastraat 50",
    telephone:  "06060606",
    person: "Elly" } }

    let Club3 = {
        name: "Books and Looks",
        type: "reading and fishing",
        total: 24,
        contactInfo: {
        address: "Acaciastraat 50",
        telephone:  "06060606",
        person: "Adrienn" } }

        let Club4 = {
            name: "Books and Kooks",
            type: "reading and fishing",
            total: 24,
            contactInfo: {
            address: "Acaciastraat 50",
            telephone:  "06060606",
            person: "Maher" } }
        
            let Club5 = {
                name: "Books and Nooks",
                type: "reading and fishing",
                total: 24,
                contactInfo: {
                address: "Acaciastraat 50",
                telephone:  "06060606",
                person: "Patrick" } }


 let array5 = [Club1, Club2, Club3, Club4, Club5]
 console.log(array5)

 for (i=0; i<array5.length; i++) {
     console.log(array5[i].name)
     console.log(array5[i].contactInfo.telephone)
     console.log(array5[i].contactInfo.person)
 }

 //selection sort
 //The idea behind selection sort is that you loop through the input 
 //array linearly, selecting the first smallest element, and then swap it to the first position. 
 //Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, 
 //and so on and so forth until your array is completely sorted. 

 selectionList = [10, 8, 7, 4, 2, 3, 9, 6, 5, 1, 0]

 let selectionSort = (arr) => {
     let len = arr.length;
     for (let i = 0; i < len; i++) {
         let min = i;
         for (let j = i + 1; j < len; j++) {
             if (arr[min] > arr[j]) {
                 min = j;
             }
         }
         if (min !==i) {
             let tmp = arr[i];
             arr[i] = arr[min];
             arr[min] = tmp;
         }
     }
     return arr;
 }

 console.log(selectionSort(selectionList))


