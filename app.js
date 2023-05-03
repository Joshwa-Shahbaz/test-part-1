'use strict'

// const calcAverage = ( score1 , score2 , score3 ) =>{
//    let totalScores  = score1 + score2 + score3
//    return totalScores/3;
// }

// let dolphineAverage = calcAverage(44 , 23 , 71);
// let koalasAverage = calcAverage(65 , 54 , 49);

// console.log( ` ${dolphineAverage} is the average of dolphine` )
// console.log( ` ${koalasAverage} is the average of koalas` )

// const checkwinner = ( dolphineAverage , koalasAverage) => {
//    dolphineAverage > koalasAverage ? console.log(`Doplhines wins (${dolphineAverage} vs ${koalasAverage})`):
//    console.log(`koalas wins (${koalasAverage} vs ${dolphineAverage})`)
//    }

// checkwinner(dolphineAverage , koalasAverage);

//39. introduction to arrays

// arrys are written in square brackets
// const friends = ["joshwa shahbaz " , " yashua " , " muneeb "]
// document.write(`<h1>${friends}</h1>`)
// console.log(friends.length)

// friends[0] = " tom holland ";

// document.write(`<h1>${friends}</h1>`)

// friends[friends.length -2] = " food hub ";
// document.write(`<h1>${friends}</h1>`) 


//40. basic arry operations 


// push add elements into the arry
// adds elemenst to the end of the array
// friends.push(" joshwa shahbaz ")
// document.write(`<h1>${friends}</h1>`) 
// console.log(friends.length)


// .unShift
// unshift ads the elemenst to the beginning of the array

// friends.unshift("evil dead rise ")
// document.write(`<h1>${friends}</h1>`) 

// const remove = document.getElementById("remove");

// remove.addEventListener("click" , () =>{
//    friends.pop(friends.length -1 )
//    document.write(`<h1>${friends}</h1>`) 
// } )

// const tip = bill =>{
//    const calcTip = bill;
//    const fifteenPer = 15;
//    const twentyPer = 20;

//    calcTip <= 300  ? console.log(bill/100*fifteenPer)
//    :console.log(bill/100*twentyPer)

// }

// const data = [125, 555 , 44];

// const billTip = [tip(data[0]) , tip(data[1]) , tip(data[2])];

// console.log(data[0] + billTip[0])

// const data1 = [12 , 13 , 14]
// const data2 = [12 , 13 , 14]

// console.log(data1[0]+data2[0])

// getting data from input field and saving using javascript


// const array = [];

// function add(){
//    const info = document.getElementById("id").value;
//    array.push(info);
//   document.write(`<p> ${array} <p>`)
// }


// introdunction to object

// const joshwa = {
//    firstName : "joshwa" ,
//    lastName : "shahbaz",
//    job : "programmer",
//    birthYear : 2004  ,  
//    friends : ["peter" , "tom" , "justin"],
//    calcAge : function(){
//       this.age = 2023 - this.birthYear
//       return this.age;
//    },
//    driverLicence : true
// }




// console.log(`${joshwa.firstName} ${joshwa.lastName}  has ${joshwa.friends.length} friends and his best friend name is called ${joshwa.friends[0]}`)



// const myName = `Hi, I am  ${joshwa["firstName" ]} ${ joshwa["lastName"] }`
// document.write(myName)

// console.log(joshwa.friends.indexOf("peter"))

// console.log(`${joshwa.firstName} is a ${joshwa.calcAge()}-years ${joshwa["job"]}, and he has ${joshwa.driverLicence ? "a" : "no" } driverlicence `)

// const mark ={
//   fullName : "mark miller",
//   mass : 78,
//   height : 1.69,
//   calcBmi : function(){
//       return this.mass/this.height**2;
//     }
// }

// const john ={
//   fullName : "john smith",
//   mass : 92,
//   height : 1.95,
//   calcBmi : function(){
//       return this.mass/this.height**2;
//     }
// }

// mark.calcBmi() > john.calcBmi()  ? console.log(`${mark.fullName} BMI (${mark.calcBmi().toFixed(1)}) is higher than ${john.fullName} (${john.calcBmi().toFixed(1)})! `) 
// : console.log(`${john.fullName} BMI (${john.calcBmi().toFixed(1)}) is higher than ${mark.fullName} (${mark.calcBmi().toFixed(1)})! `);

// function averageBmi(mass , height){
//   return mass/height**2;
// }

// function calcBmi (fullName , mass , height ){
//   const mydata = {
//     name : fullName,
//     kg : mass,
//     tall : height,
//     average : averageBmi(mass , height).toFixed(1)
//   }
//   return(mydata)
// }


// const joshwa =  calcBmi("joshwa" , 65 , 6.3);

// console.log(joshwa.name)
// const haseeb =  calcBmi("haseeb" , 75 , 6.5);


//----------------- The for loop

// for (var num = 1 ; num <= 10 ; num++){
//   console.log(num);
// }

// const myData = [
//   "joshwa",
//   "shahbaz",
//   2023-2004,
//   "cricket",
//   ["tom" , "peter" , "john"],
//   true
// ]

// console.log(myData.length)

// for(let i = 0 ; i <= myData.length-1 ; i++ ){
//   console.log(myData[i])
// }

// const years = [2003 , 2001 , 1985 , 2000 , 1956 , "joshwa shahbaz" , "sameer"];
// function age(years){
//   return 2023-years
// }
// for( let x = 0; x <= years.length-1 ; x++  ){
//   console.log(`${x}: ${age(years[x])}`);
// }


// for(let c = 1; c < 10 ; c++){
//   if (c === 4) break;
//   console.log(c)
// };


//--------------------- while loop 
// var data = 1;
// while(data <=10){
//   console.log(10 + data);
//   data++
// }

// let dice = Math.trunc(Math.random() * 6) + 1 ;
// console.log(dice)



// const bills = [
//   22,295,176,440,37,105,480,10,1110,52
// ]

// const tip =[];
// const total = []; 


// const calctip = (bill) =>{
//   const money = bill;
//   const fifteen = 15;
//   const twenty = 20;
//   return money <= 300 ? money/100*fifteen : money/100*twenty;
// }

// for(let s = 0 ; s <= bills.length-1 ; s++){
//     const data =  calctip(bills[s]);
//     tip.push(data)
//     total.push(data + bills[s])
//   }
//   console.log(tip , total)


//  let count = 1;
const array = [];

const handleSubmit = (e)=> {
  console.log("dgdfgd",e)
 e.preventDefault();
}
var btn;

function remove(){
  btn.parentNode.remove()
}

function add(){
  const data = document.getElementById("id").value;
  const h1 = document.createElement("h1")
  h1.innerHTML = `${data} <button>x</button>`;
  btn = h1.childNodes[1];
  btn.addEventListener("click" , remove())
  // btn.id = count++;
  btn.classList.add("remove");
  const print = document.body.append(h1);
  // array.push(data)
  // console.log(array);
};

// DOM

const loginForm = document.getElementById("myForm")

loginForm.addEventListener("submit" , (e)=>{
  e.preventDefault();
})
