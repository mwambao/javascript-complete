
//objects in objects i.e. we have address in company.
let company = {
    companyName: 'Health Candy',
    activity: 'Food manufacturing',
    address: {
        street: '2nd street',
        number: '123',
        zipcode: '33316',
        city: 'Miami',
        stat: 'Florida'
    },
    yearOfEstablishment: 2021
};

console.log(company);
/*
{
  companyName: 'Health Candy',
  activity: 'Food manufacturing',
  address: {
    street: '2nd street',
    number: '123',
    zipcode: '33316',
    city: 'Miami',
    stat: 'Florida'
  },
  yearOfEstablishment: 2021
}
*/

//lets change or access one of the properties of the address. This is similar to arrays

company.address.zipcode = '3707';
console.log(company.address.zipcode); //3707

//or

company['address']['number'] = '2300';
console.log(company['address']['number']); //2300