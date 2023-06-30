"use strict";
const start = new Date().getMilliseconds();
setTimeout(function () {
    const now = new Date().getMilliseconds() - start;
    console.log("Function was called after " + now + "s");
}, 500);
console.log("Started blocking operation");
while (new Date().getMilliseconds() - start < 2) { }
console.log("Finished blocking operation");
