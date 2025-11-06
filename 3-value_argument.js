const age = process.argv[2];

if (age === undefined) {
    console.log("No argument");
} else if (age <= 18) {
    console.log("Not qualified");
} else {
    console.log("Qualified");
}