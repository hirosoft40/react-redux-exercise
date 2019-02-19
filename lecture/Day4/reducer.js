// var state = {
//   clicks: 0,
//   count: 0
// };

// console.log(state);
// var newState = {
//   ...state,
//   clicks: state.clicks + 1,
//   count: state.count + 1
// };
// console.log(newState);

// ============
// var state = {
//   house: {
//     name: "test",
//     points: 17
//   }
// };

// console.log(state);

// var newState = {
//   ...state,
//   house: {
//     ...state.house,
//     points: state.house.points + 5
//   }
// };

// console.log(newState);

// ============

// var state ={
//   house:'Texas',
//   school:{
//     name:"Hogwarts",
//     lastName:'Something',
//     house:{
//       name:"Ravenclaw",
//       lastName:"Snow",
//       points:17
//     }
//   }
// }
// console.log(state);

// var newState = {
//   ...state,
//   school:{
//     ...state.school,
//     house:{
//       ...state.school.house,
//       points:state.school.house.points + 5
//     }
//   }
// }
// console.log(newState)

// const state = {
//   houses: {
//     gryffindor: {
//       points: 15
//     },
//     ravenclaw: {
//       points: 18
//     },
//     hufflepuff: {
//       points: 7
//     },
//     slytherin: {
//       points: 5
//     }
//   }
// };
// console.log(state);

// const key = "ravenclaw";
// var newState = {
//   ...state,
//   houses: {
//     ...state.houses,
//     [key]: {
//       ...state.houses[key],
//       points: state.houses[key].points + 4
//     }
//   }
// };
// console.log(newState);

//=====
// var state = [3,4,5,6];
// var newItem = 1
// var newState = [
//   newItem,
//   ...state
// ]

// console.log(newState)

//=================
// var state = [1,2,'X',4];
// var newState = state.map((item)=>{
//   if(item === 'X'){
//     return 3
//   }
//   return item;
// })
// console.log(newState)

//=================
// const newItem = 4;
// const newState = state.slice();
// newState.splice(3,0,newItem)
// return newState;

//=================
// var state = [1,2,3,4];

// const newState = [
//   ...state.slice(0,3),
//   newItem,
//   ...state.slice(3)
// ]

//==================
var state = [1, 2, "X", 4];
var newState = state.filter((item, index) => {
  if (item === "X") {
    return false;
  }
  return true;
});
