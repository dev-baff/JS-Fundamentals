const size = parseInt(process.argv[2]);


//Start loop and end here if condition doesn`t meet
for (; isNaN(size); ) {
    console.log("Missing size");
    process.exit();
}

//Condition for squares
for (r = 0; r < size; r++) {
    console.log("X".repeat(size));
}
