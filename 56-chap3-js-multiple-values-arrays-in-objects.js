
//you can see activity is now an array in the object
let company = {
  companyName: 'Health Candy',
  activity: ["Food Manufacturing", "Improving kids' health", "Manufacturing toys"],
  address: {
    street: '2nd street',
    number: '123',
    zipcode: '33316',
    city: 'Miami',
    stat: 'Florida'
  },
  yearOfEstablishment: 2021
}

//to access any element in the array we use an index.

console.log(company.activity[1]); // Improving kids' health

