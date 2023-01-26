var dice;
function rollDice() {
    dice = (Math.floor(Math.random() * 6) + 1);
}
rollDice();
console.log("Current dice value", dice);
//Math.Floor static method always rounds down and returns the integer
// Math.random() - retruns the value between 0 to 1
