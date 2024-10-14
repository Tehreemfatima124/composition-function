const makeCofee = (cofee) =>`${cofee} in a Cup` 
 const addingCup = (cofee) => `add sugar and ${cofee}`
 const readycoffe = (cofee) => `make a cofee ${cofee}`
 const cofeeready =(cofee) => readycoffe(addingCup(makeCofee(cofee)))
 console.log(cofeeready('milk'))

//////////////////////////////////////////// spread operator ///////////////////////////////////////////////////////////////////////////////////////////

// let travelpacking = ['cloths','jackets','shoes']
// let newpacking = [...travelpacking,'sockes','cap','umberalla']
// console.log(newpacking)

///////////////////////////////////////////////  rest operator  ////////////////////////////////////////////////////////////////////////////////////////

// let totalstudents = ['ali','ahmad','arooj','fatima','umar','awais']
// let absentstudents = ['umar','awais']
// let presentstudents = [...absentstudents]
// console.log(presentstudents)
