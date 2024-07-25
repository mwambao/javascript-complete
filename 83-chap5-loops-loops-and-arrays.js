
let names = ["Chantal", "John", "Bobbi", "Maxime", "Jair"];

for (i=0 ; i < names.length ; i++ ) {
    if (names[i].startsWith("M")) {
        delete names[i];
        continue;
    }
    names[i] = names[i] = "Hello " + names[i]
}
console.log(names);

/*
[
  'Hello Chantal',
  'Hello John',
  'Hello Bobbi',
  <1 empty item>,  <---- We have deleted Maxime
  'Hello Jair'
]
*/