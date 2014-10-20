d3.json('http://localhost:4567/reasons', function(reasons){

var svg = d3.select('body').append('svg')
.attr('y', 100)
.attr('width', 900)
.attr('height', 500)

// var format = ("%Y-%m-%dT%H:%M:%SZ")
// var dateFn = function(d) { return format.parse(d.time)}

// var x = d3.time.scale()
// 	.range([50-850])
// 	.domain(d3.extent(reasons, dateFn))


var g = svg.selectAll('g')
	.data(reasons)
	.enter().append('g')

g.append('circle')
	.attr('r', 0)
.transition().duration(2000).ease('elastic')
		.attr('cx', function(d, i) { return (i+1) * 30 })
		.attr('cy', 100)
		.attr('r', 10)
		.style('stroke-width', '4px')
		.style('stroke', 'blanchedalmond')


var circles = d3.selectAll('circle')
	.on('click', showInfo)
	.on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
  .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})

function showInfo(){

	var div = d3.select('.content')
		.text(d3.select(this).data()[0].author)

}







// g.append('text')
// 	// .attr('class', 'hidden')
// 	.attr('x', function(d, i) { return (i+1) * 50 })
// 	.attr('y', 50)
// 	.attr('text-anchor', 'middle')
// 	.text(function(d) { return d.author })


	// svg.selectAll('text')
	// 	.data(reasons)
	// 	.enter().append('text')
	// 	.attr('class', 'hidden')
	// 	.attr('x', function(d, i) { return (i+1) * 50})
	// 	.attr('y', 60)
	// 	.attr('text-anchor', 'middle')
	// 	.text(function(d) { return d.author})

});