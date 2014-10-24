var w = 900
		h = 500

var data = []

var svg = d3.select('body').append('svg')
	.attr('width', w)
	.attr('height', h)

//DECLARING FORCE VARIABLE
// var force = d3.layout.force()
//   .nodes(nodes)
//   .size([900,550])
//   .friction(0.9)
//   .charge([-1500])
//   .gravity(0.3)
//   .start();

var pack = d3.layout.pack()
	.size([900, 500])
	.padding(5)
	.value(function(d){ return 1+ Math.floor(Math.random()*50); })


	// .value(function (d) {console.log(d.length);return d.size})


d3.json('http://localhost:4567/reasons', function(reasons){

	var nodes = pack.nodes(reasons)

	var circles = svg.selectAll('circle')
		.data(nodes)
		.enter().append('circle')
			.attr('r', 0)
			.attr('opacity', function(d){return Math.sqrt(d.value)/10})
		.transition().duration(2000).ease('elastic')
			.attr('cx', function(d){ return d.value/2 * 30})
			.attr('cy', function(d){ return  Math.sin(Date.parse(d.time)) * (-400) })
			.attr('r', function(d){ return String(d.content).length/2 })
			.style('stroke-width', '4px')
			.style('stroke', 'blanchedalmond')
});

//ACTIVATING THE FORCE
// force.on("tick", function() {
//  nodes.attr("cx", function(d) { return d.x; })
//       .attr("cy", function(d) { return d.y; })
//  });






// var circles = svg.selectAll('circle')
// 	.data(reasons)
// 	.enter().append('circle')
// 	.attr('r', 0)
// .transition().duration(2000).ease('elastic')
// 		.attr('cx', function(d, i) { return (i+1) * 30 })
// 		.attr('cy', 100)
// 		.attr('r', 10)
// 		.style('stroke-width', '4px')
// 		.style('stroke', 'blanchedalmond')


// var circles = d3.selectAll('circle')
// 	.on('click', showInfo)
// 	.on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
//   .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})

// function showInfo(){

// 	var div = d3.select('.content')
// 		.text(d3.select(this).data()[0].author)

// }


