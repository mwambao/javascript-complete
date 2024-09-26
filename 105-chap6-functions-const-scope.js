//constants are blocked-scoped just like let

function doingStuff() {
    if (true) {
        const x = "Local"; // <-- x is blocked scoped
    }
}

doingStuff(); // ReferenceError: x is not defined