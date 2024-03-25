import { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import Menu from '../components/Menu'
import RightPanel from '../components/RightPanel';
import LeftPanel from '../components/LeftPanel';

const IndexPage = () => {
  const [graphData, setGraphData] = useState(null);
  const svgRef = useRef();

  useEffect(() => {
    // Fetch data from Flask backend
    fetch('http://localhost:5000/api/data2')
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
  
    const width = 800;
    const height = 600;
  
    // Add a group element for the links
    const linkGroup = svg.append('g')
      .attr('class', 'links');
  
    // Add a group element for the nodes
    const nodeGroup = svg.append('g')
      .attr('class', 'nodes');
  
    // Agregar líneas para los enlaces
    const links = linkGroup.selectAll('.link')
      .data(data.links)
      .enter().append('line')
      .attr('class', 'link')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);
  
    // Agregar círculos para los nodos
    const nodes = nodeGroup.selectAll('.node')
      .data(data.nodes)
      .enter().append('circle')
      .attr('class', 'node')
      .attr('r', 5)
      .attr('fill', 'steelblue')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
  
    // Definir la simulación de fuerza
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked);
  
    // Funciones de arrastre
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
  
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
  
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  
    // Función de actualización de los elementos durante la simulación
    function ticked() {
      links
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  
      nodes
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    }
  };
  
  
  return (
    <div className='container'>
        <div className='main-container'>
        <LeftPanel />
            <div align="center">
                <Menu />
                <h1>Interactive Network Graph</h1>
                <svg ref={svgRef} width="800" height="600"></svg>
            </div>
        </div>
        <RightPanel />
    </div>
  );
};

export default IndexPage;