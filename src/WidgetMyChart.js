import d3Wrap from 'react-d3-wrap'
import * as d3 from 'd3'
 
// https://www.npmjs.com/package/react-d3-wrap

const WidgetMyChart = d3Wrap({
  initialize (svg, data, options) {
    // Optional initialize method called once when component mounts 
  },
 
  update (svg, data, options) {
    // setup container, root svg element passed in along with data and options 
    console.log(d3);
    const chart = d3.select(svg)
      .append('g')
      .attr('transform', `translate(${options.margin.left}, ${options.margin.top})`)
 
    // continue your d3 implementation as usual... 
    var circle = chart.append("circle")
                        .attr("cx", 50)
                  .attr("cy", 70)
                  .attr("r", 33);

    circle.attr("fill","red" );

    var width = 420, barHeight = 20;

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width]);


    chart.attr("width", width)
      .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("fill", "#00FF00")
        .attr("opacity", 0.6)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });



  },
 
  destroy () {
    // Optional clean up when a component is being unmounted... 
  }
})
 
export default WidgetMyChart