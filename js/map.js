/* Basic Dot-density map of twitter locations in tucson area using d3.js */

var width = 960,
    height = 960;

var scale0 = (width - 1) / 2 / Math.PI;

var projection = d3.geo.mercator();

var path = d3.geo.path()
  .projection(projection);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");

var g = svg.append("g");

d3.json("assets/usa_states.json", function(error, arcs) {
  if (error) return console.error(error);

  svg.append("path")
    .datum(topojson.feature(arcs, arcs.objects.subunites))
    .attr("d", d3.geo.path().projection(de.geo.mercator()));
});

d3.select(self.frameElement).style("height", height + "px");


