import './App.css';
import React, { useEffect, useRef, useState, useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";
import * as d3 from "d3";
import {
  data as p2data,
  clusterIds as p2ClusterIds,
  clusters as p2clusters
} from "./CLUSTERSTARTUP.js";


const projectMap = {
  STARTUP: {
    data: p2data,
    clusterIds: p2ClusterIds,
    clusters: p2clusters
  }
};

function App() {
  const [activeProject, setActiveProject] = useState("STARTUP");
  const [initialCenter, setInitialCenter] = useState(true);
  const [collapsedClusters, setCollapsedClusters] = useState(
    projectMap[activeProject].clusterIds
  );
  const [hiddenClusters, setHiddenClusters] = useState([]);
  const forceRef = useRef();

  useEffect(() => {
    forceRef.current.d3Force("charge").strength(-200);
    forceRef.current.d3Force("link").distance(7);
    forceRef.current.d3Force("charge").distanceMax(4);
    forceRef.current.d3Force(
      "collide",
      d3.forceCollide().radius((node) => {  
        return node.isClusterNode ? node.val / 10 : node.val;
        //return node.cluster_size ? node.cluster_size : node.degrees / 100;
      })
    );
  }, []);

  useEffect(() => {
    setCollapsedClusters(projectMap[activeProject].clusterIds);
    setInitialCenter(true);
  }, [activeProject]);

  const toggleClusterCollapse = (clusterId) => {
    if (collapsedClusters.includes(clusterId)) {
      setCollapsedClusters(collapsedClusters.filter((id) => id !== clusterId));
    } else {
      setCollapsedClusters([...collapsedClusters, clusterId]);
    }
  };

  const handleNodeClick = (node) => {
    toggleClusterCollapse(node.id);
    if (collapsedClusters.includes(node.id)) {
      forceRef.current.zoom(4.5, 400);
      forceRef.current.centerAt(node.x, node.y, 400);
    } else if (!collapsedClusters.includes(node.cluster_id)) {
      if (node.link){
        window.open(node.link,'_blank') 
      }
    }
  };

  const toggleCluster = (clusterId) => {
    if (hiddenClusters.includes(clusterId)) {
      setHiddenClusters(hiddenClusters.filter((id) => id !== clusterId));
  
    } else {
      setHiddenClusters([...hiddenClusters, clusterId]);
    }
    if (!collapsedClusters.includes(clusterId)) {
      toggleClusterCollapse(clusterId);
    }
  };
  const graphData = useMemo(() => {
    return {
      nodes: projectMap[activeProject].data.nodes.filter(
        (node) => !hiddenClusters.includes(node.id)
      ),
      links: projectMap[activeProject].data.links
    };
  }, [hiddenClusters, activeProject]);

  const reset = () => {
    setHiddenClusters([]);
    setCollapsedClusters(projectMap[activeProject].clusterIds);
    forceRef.current.zoomToFit();
  };
 
  return (
    <div className="App">     
      <h1>ENTREPRENEUR BAUINDUSTRIE</h1>
      {Object.keys(projectMap).map((project) => (       
        <button
          key={project}
          onClick={() => {
            setActiveProject(project);
          }}>
          {project}
        </button>        
      ))}
      <button onClick={reset}>RESET</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projectMap[activeProject].clusters.map((cluster) => (
           <button
            key={cluster.id}
            onClick={() => {
              toggleCluster(cluster.id);
            }}
          >
            {cluster.name}
          </button>
        ))}
      </div>
      <div style={{ backgroundColor: "rgb(237, 239, 240)" }}>
        <ForceGraph2D
          width={window.innerWidth}
          height={window.innerHeight-150}
          minZoom={2}
          maxZoom={20}
          ref={forceRef}
          onNodeClick={handleNodeClick}
          graphData={graphData}
          cooldownTicks={50}
          nodeRelSize={1}
          linkWidth={1}
          font-weight={2000}
          onEngineStop={() => {
            if (initialCenter) {
              forceRef.current.zoomToFit();
            }
            setInitialCenter(false);
          }}
          nodeCanvasObjectMode={() => "after"}
          nodeCanvasObject={(node, ctx, globalScale) =>  
            {
            const label = node.name;
            const labelP = node.nameP;
            const locationlabel = node.location;
            node.color = node.fillcolor;
            const fontSize = node.isClusterNode
              ? 14 * (node.val / 950)
              : 14 / (globalScale * 1.2);
            ctx.font = `${fontSize-0.5}px Sans-Serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = node.color ? "white" : "black"; //node.color;
            
            if (node.isClusterNode && node.isParagraph) {
              ctx.fillText(label, node.x, node.y);
              ctx.fillText(labelP, node.x, node.y + 1.1 * fontSize);     
            } else if (node.isClusterNode) {
              ctx.fillText(label, node.x, node.y);      
            } else if (globalScale >= 3) {
              ctx.font = `bold ${2}px Sans-Serif`;
              ctx.fillStyle = "black";
              ctx.fillText(label, node.x, node.y + 5);
              ctx.font = `${1.5}px Sans-Serif`;
              ctx.fillText(locationlabel, node.x, node.y + 7);
            } 
          }}

          enableNodeDrag={true} //from false to true
          nodeVisibility={(node) => {
            if (collapsedClusters.includes(node.clusterId)) {
              return false;
            } else return true;
          }}
          linkVisibility={(link) => {
            if (
              collapsedClusters.includes(link.source.id) &&
              !link.target.isClusterNode
            ) {
              return false;
            } else if (
              hiddenClusters.includes(link.source.id) ||
              hiddenClusters.includes(link.target.id)
            ) {
              return false;
            } else return true;
          }}
        />
      </div>
    </div>
  );
}

export default App;
