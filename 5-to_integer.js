//Retrieve the argument from command line
const num = Number(process.argv[2]);


// Check if num is NaN
if (isNaN(num)) {
    console.log("Not a number");
} else { 
    console.log("My number: " + num);
}