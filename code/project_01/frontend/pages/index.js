import { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

const IndexPage = () => {
  const [graphData, setGraphData] = useState(null);
  const svgRef = useRef();

  useEffect(() => {
    // Fetch data from Flask backend
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => {
        setGraphData(data);
        renderGraph(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderGraph = data => {
    const svg = d3.select(svgRef.current);

    // Clear previous graph
    svg.selectAll('*').remove();

    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const xScale = d3.scaleBand()
      .domain(data.nodes.map(d => d.id))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data.nodes, d => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis);

    svg.selectAll('.bar')
      .data(data.nodes)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.id))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d.value));
  };

  return (
    <div>
      <h1>Interactive Graph</h1>
      <svg ref={svgRef} width="600" height="400"></svg>
    </div>
  );
};

export default IndexPage;
