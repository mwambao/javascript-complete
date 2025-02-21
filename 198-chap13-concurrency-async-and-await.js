function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        }, 2000);
    });
}


async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}

talk(2); // something2
talk(4); // something4
talk(6); // something6