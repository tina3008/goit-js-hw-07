'use strict';

const getTotalBalanceByGender = (users, gender) => {

    return users.filter(user => user.gender == gender)
    .reduce((add, user) => { return add + user.balance},0)

 }

 const allusers = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allusers, "male")); // 12053

console.log(getTotalBalanceByGender(allusers, "female")); // 8863



console.log(getTotalBalanceByGender(allusers, "male")); // 12053

console.log(getTotalBalanceByGender(allusers, "female")); // 8863

