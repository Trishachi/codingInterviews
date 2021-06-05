//Notes
// Bind allows you to execute some code while redefining the meaning of the "this" keyword.

//Resources
// https://www.javascripttutorial.net/javascript-bind/
// https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method

var myModule = {
  name: "Chisom",
  getName: function () {
    return console.log(this.name);
  },
};

myModule.getName();
var someName = myModule.getName.bind({ name: "Bob" });

someName();
