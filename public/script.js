var size = 500

var color = ["#156b87", "#876315", "#543510", "#872815"]

d3.json('http://localhost:4567/reasons', function(data){  


	var svg = d3.select("body").append("svg")
	  .attr("width", size)
	  .attr("height", size)


	var pack = d3.layout.pack()
	    .size([size, size])
	    .sort(d3.descending)
	    .padding(3)


	svg.selectAll("circle")
	    .data(pack.nodes(data).slice(1))
	  .enter().append("circle")
	  	.attr('r', 0)
			.transition().duration(2000).ease('elastic')
	    .attr("cx", function(d) { return d.x; })
	    .attr("cy", function(d) { return d.y; })
	    .attr("r", function(d) { return d.r; })
	    .style('fill', function(d) {return color[d.time_of_day]});

	 d3.selectAll('circle').on('click', showInfo)
	 	 	.on('mouseover', hoverTrue)
	 	 	.on('mouseout', hoverFalse)

	 d3.select('button').on('click', filter)
 

} )//end AJAX

function filter(){
	var svg = d3.select('svg')
	console.log(svg)
}

function showInfo(d){
	d3.selectAll('circle').classed('selected', false)
	var div = d3.select('.content')
	.text(d.content)
	d3.select(this).classed('selected', true)
}

function hoverTrue(){
	d3.select(this).classed('text-hover', true)
}

function hoverFalse(){
	d3.select(this).classed('text-hover', false)
}

d3.select(self.frameElement).style('height', size)

// var leaves = d3.selectAll('leaf')
// 	leaves.on('click', showInfo)
// 	.on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
//   .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})




