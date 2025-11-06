//Constant for languages and the adjectives

const langs_adjs = [
    {lang: "C", adj: "fun"},
    {lang: "Python", adj: "cool"},
    {lang: "JavaScript", adj: "amazing"}
];

let result = [];

for (let i = 0; i  < langs_adjs.length; i++) {

    const item = langs_adjs[i];

    result.push(`${item.lang} is ${item.adj}`);
}

console.log(result.join("\n"));