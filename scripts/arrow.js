this.firstName = "Ahmed";
this.lastName = "Edoughri";

const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName }
    }
}

let x = o.person.fullName();
console.log(x);
  
// or:
// const o = {
//     msg: 'An object',
//     person: {
//         firstName: 'Grace',
//         lastName: 'Hopper',
//         age: 89,
//         fullName: function () { return this.firstName + ' ' + this.lastName }
//     }
// }

// let x = o.person.fullName();
// console.log(x);
//