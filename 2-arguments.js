const ideas = process.argv.length - 2;

if(ideas === 0) {
    console.log("No argument");
} else if(ideas === 1) {
    console.log("Argumment found");
} else{
    console.log("Arguments found");
}