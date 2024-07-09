
const width = 600;
const height = 600;


// add an svg element to the page
let svg = d3.select("body").append("svg").attr("width", width).attr("height", height);

d3.select("textarea").on("input", e =>{
    let frequencies = {};
    e.target.value.split("").forEach(char => {
        let currentCount = frequencies[char] || 0;
        frequencies[char] = currentCount + 1;
    });

    let data = Object.entries(frequencies).map(pair => {
        return { char: pair[0], count: pair[1]};
    })

    data.sort((a, b) => d3.ascending(a.char, b.char));

    console.log(data)
})