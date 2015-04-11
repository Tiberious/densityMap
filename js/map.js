/* Basic Dot-density map of twitter locations in tucson area using d3.js */

var width = 960,
    height = 960;

var scale0 = (width - 1) / 2 / Math.PI;

var projection = d3.geo.mercator();

var zoom = d3.behavior.zoom()
    .translate([width / 2, height / 2])
    .scale([scale0, 8 * scale0])
    .on("zoom", zoomed);

var path = d3.geo.path()
  .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

var g = svg.append("g");

svg.append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height);

 svg 
    .call(zoom)
    .call(zoom.event);

 d3.json("assets/usa_states.json", function(error, states) {
   g.append("path")
      .datum({type: "Sphere"})
      .attr("class", "sphere")
      .attr("d", path);

   g.append("path")
      .datum(topojson.merge(states, states.objects.states.geometries))
      .attr("class", "land")
      .attr("d", path)
 });

function zoomed() {
    projection
        .translate(zoom.translate())
        .scale(zoom.scale());

    g.selectAll("path")
      .attr("d", path);

}

d3.select(self.frameElement).style("height", height + "px");


