var size = 500

//CHECK THIS FUNCTION
// var color = d3.scale.quantize()
//     .range(["#156b87", "#876315", "#543510", "#872815"]);


var color = ["#156b87", "#876315", "#543510", "#872815"]

// var svg = d3.select('body').append('svg')
// 	.attr('width', size)
// 	.attr('height', size)
// 	// .append('g')
// 	// .attr('transform', 'translate(2,2)')


// var pack = d3.layout.pack()
// 	// .sort(d3.descending)
// 	.size([size - 10, size - 10])
	// .padding(2)
	// .value( function(d) { return d.size })
	// .value(function(d){ return Math.abs(Math.sin(Date.parse(d.time))) * 10 })
	// .value(function(d){ return 1+ Math.floor(Math.random()*50); })//value is a random number for now
// 
// var tweet = 50
// var retweet = 20
// var pic = 80
// var link = 40

// var root = {
//   children: [
//   	{value: tweet, color: 0},
//   	{value: retweet, color: 1},
//     {value: pic, color: 2},
//     {value: link, color: 3},
//     {value: link, color: 3},
//     {value: pic, color: 2},
//     ]
// };

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

 } )


// d3.json('http://localhost:4567/reasons', function(d){ 
// 	svg.selectAll('circle')
// 	.data(pack.nodes(d))
// 	.enter().append('circle')
// 	 .attr("cx", function(d) { return d.x; })
//    .attr("cy", function(d) { return d.y; })
//    .attr("r", function(d) { return d.r; })
//  })



// //AJAX THE DATA
// d3.json('http://localhost:4567/reasons', function(reasons){

// 	var node = svg.datum(reasons).selectAll('.node')
// 		.data(pack.nodes)
// 		.enter().append('circle')
// 			.attr('class', function(d) {return d.children ? "node root" : "leaf node"; })
// 			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
// 			.attr('opacity', 0.5)
// 			.attr('r', 0)
// 			.transition().duration(2000).ease('elastic')
//       .attr("r", function(d) { return d.r; });

// 	// var circles = svg.selectAll('circle')
// 	// 	.data(pack.nodes(reasons).slice(1))
// 	// 	.enter().append('circle')
// 	// 		.attr('r', 0)
// 	// 		.attr('opacity', function(d){return Math.sqrt(d.value)/10})
// 	// 	.transition().duration(2000).ease('elastic')
// 	// 		.attr('cx', function(d){ return d.value/2 * 30})
// 	// 		.attr('cy', function(d){ return  Math.abs(Math.sin(Date.parse(d.time))) * 400})
// 	// 		.attr('r', function(d){ return String(d.content).length/2 })
// 	// 		.style('stroke-width', '4px')
// 	// 		.style('stroke', function(d) {return color(d.value)})


// })
// .on('load', function(){
// 	d3.selectAll('circle').on('click', function(){console.log('hi')})
// })

//CHECK THIS FUNCTION
d3.select(self.frameElement).style('height', size)


// var leaves = d3.selectAll('leaf')
// 	leaves.on('click', showInfo)
// 	.on("mouseover", function(d) {d3.select(this).classed("text-hover",true);})
//   .on("mouseout" , function(d) {d3.select(this).classed("text-hover",false);})

// function showInfo(){

// 	var div = d3.select('.content')
// 		.text(d3.select(this).data()[0].author)

// }


