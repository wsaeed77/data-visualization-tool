// Enhanced bar chart with axes and labels
d3.csv("data/sample-data.csv").then(data => {
    const svg = d3.select("#chart").append("svg")
        .attr("width", 600)
        .attr("height", 400);

    const x = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, 600])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([400, 0]);

    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("x", d => x(d.category))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => 400 - y(d.value))
        .attr("fill", "steelblue");

    svg.append("g")
        .attr("transform", "translate(0,400)")
        .call(d3.axisBottom(x));

    svg.append("g")
        .call(d3.axisLeft(y));
});
