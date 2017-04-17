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
                        .attr("cx", 30)
                  .attr("cy", 30)
                  .attr("r", 20);
  },
 
  destroy () {
    // Optional clean up when a component is being unmounted... 
  }
})
 
export default WidgetMyChart