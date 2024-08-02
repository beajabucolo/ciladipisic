// Sample data
let data = [
  { name: 'Alice', value: 35 },
  { name: 'Bob', value: 20 },
  { name: 'Charlie', value: 45 }
];

// Format function for tooltip
let formatTooltip = d3.format(',.2f');

// Create a bar chart using D3.js
let svg = d3.select('body').append('svg')
  .attr('width', 400)
  .attr('height', 200);

let bars = svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 80)
  .attr('y', d => 200 - d.value)
  .attr('width', 40)
  .attr('height', d => d.value)
  .attr('fill', 'steelblue');

// Add text labels
svg.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .text(d => d.name)
  .attr('x', (d, i) => i * 80 + 10)
  .attr('y', 190)
  .attr('font-family', 'sans-serif')
  .attr('font-size', '20px')
  .attr('fill', 'white')
  .attr('text-anchor', 'middle');

// Add tooltips
bars.on('mouseover', function(d) {
    d3.select(this).attr('fill', 'orange');
    let xPos = parseFloat(d3.select(this).attr('x')) + 20;
    let yPos = parseFloat(d3.select(this).attr('y')) + 10;
    svg.append('text')
      .attr('id', 'tooltip')
      .attr('x', xPos)
      .attr('y', yPos)
      .text(formatTooltip(d.value))
      .attr('font-family', 'sans-serif')
      .attr('font-size', '12px')
      .attr('fill', 'black');
  })
  .on('mouseout', function() {
    d3.select(this).attr('fill', 'steelblue');
    d3.select('#tooltip').remove();
  });
