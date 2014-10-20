d3.json('http://localhost:4567/reasons', function(reasons){

var svg = d3.select('body').append('svg')
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
		.attr('cx', function(d, i) { return (i+1) * 50 })
		.attr('cy', 50)
		.attr('r', 10)
		.style('fill', 'brown')

// g.append('text')
// 	// .attr('class', 'hidden')
// 	.attr('x', function(d, i) { return (i+1) * 50 })
// 	.attr('y', 50)
// 	.attr('text-anchor', 'middle')
// 	.text(function(d) { return d.author })

var circles = d3.selectAll('circle')
	.on('click', showInfo)


function showInfo(){

thisG = d3.select(this)
// console.log(thisG.data()[0].author)

var div = d3.select('.showInfo')
	.style("left", 100)
  .style("top", 100)
	.text(thisG.data()[0].author)

}

	// svg.selectAll('text')
	// 	.data(reasons)
	// 	.enter().append('text')
	// 	.attr('class', 'hidden')
	// 	.attr('x', function(d, i) { return (i+1) * 50})
	// 	.attr('y', 60)
	// 	.attr('text-anchor', 'middle')
	// 	.text(function(d) { return d.author})

});