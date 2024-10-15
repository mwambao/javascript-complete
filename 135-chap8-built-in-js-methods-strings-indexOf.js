//indexOf() can be used to 

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

let index_re = poem.indexOf("re");

//it will log 7 since the first occurence of re occurs in are 
console.log(index_re); //7

//it will log -1. -1 means the string it was searching was not found
console.log(poem.indexOf("Python")); // -1


/* You can use if to check whethere it is -1 before dealing with the result

if (poem.indexOf("Python") != -1 ) {
    //do stuff
}

/*
