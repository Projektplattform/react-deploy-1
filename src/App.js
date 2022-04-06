import './App.css';
import React, { useEffect, useRef, useState, useMemo } from "react";
import ForceGraph2D from "react-force-graph-2d";
import * as d3 from "d3";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import CenterFocusWeak from '@material-ui/icons/CenterFocusWeak';
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ReplayIcon from "@material-ui/icons/Replay";
import ImageIcon from "@material-ui/icons/Image";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
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
  const [zoomSize, setZoomSize] = useState(3);
  const [activeProject, setActiveProject] = useState("STARTUP");
  const [initialCenter, setInitialCenter] = useState(true);
  const [collapsedClusters, setCollapsedClusters] = useState(
    projectMap[activeProject].clusterIds
  );
  const [hiddenClusters, setHiddenClusters] = useState([]);
  const forceRef = useRef();
  useEffect(() => {
    forceRef.current.d3Force("charge").strength(0);
    forceRef.current.d3Force("link").distance(12);
    forceRef.current.d3Force("charge").distanceMax(7);
    forceRef.current.d3Force(
      "collide",
      d3.forceCollide().radius((node) => { 
        //def laenge der Links
        return node.isClusterNode ? node.val / 12 : node.val;
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
      forceRef.current.zoom(7, 400);
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
    setZoomSize(forceRef.current.zoom()); 
  };
const minimalZoom = 2;
const maximalZoom = 180;
const image = new Image(60, 45); 
image.src = './images/test.png';
  return ( 
    <div className="App" position="relative" > 
    
    <React.Fragment position="relative" marginRight="200px">
      <AppBar color="rgb(0, 0, 0)" position="relative" marginRight="200px">
        <Toolbar position="relative">
          <IconButton color="rgb(255, 255, 255)" aria-label="ZoomIn" onClick={() => {
            /// check if ZoomSize is in Range
            if (forceRef.current.zoom() > minimalZoom && forceRef.current.zoom() < maximalZoom){
              setZoomSize(zoomSize + 1);
            }  
            forceRef.current.zoom(zoomSize + 1, 250);
            }}>
            <ZoomInIcon />
          </IconButton>
          <IconButton color="rgb(255, 255, 255)" aria-label="ZoomOut" onClick={() => {
            /// check if ZoomSize is in Range
            if (forceRef.current.zoom() > minimalZoom && forceRef.current.zoom() < maximalZoom){
              setZoomSize(zoomSize - 1);
            }           
            forceRef.current.zoom(zoomSize - 1, 250);
          }}>
          <ZoomOutIcon />
          </IconButton>
          <IconButton color="rgb(255, 255, 255)" aria-label="Center" onClick={() => {
            forceRef.current.zoomToFit();
            setZoomSize(forceRef.current.zoom());
            }}>
            <CenterFocusWeakIcon />
          </IconButton>
          <IconButton color="rgb(255, 255, 255)" aria-label="Replay" onClick={reset}>
            <ReplayIcon />       
          </IconButton >
        </Toolbar>
      </AppBar>    
      <div style={{ backgroundColor: "rgb(237, 239, 240)"}} >
        <ForceGraph2D
          /// bestimme hoeh und weite
          width={window.innerWidth*0.6}
          height={window.innerHeight-70}
          minZoom={minimalZoom}
          maxZoom={maximalZoom}
          
          ref={forceRef}
          onNodeClick={handleNodeClick}
          graphData={graphData}
          cooldownTicks={50}
          nodeRelSize={1}
          linkWidth={2}
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
            ctx.font = `${fontSize-1.4}px TTNormsPro-Bold`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = node.color ? "white" : "black"; //node.color;                 
            if (node.isClusterNode && node.isParagraph) {
              //else below arc          
              ctx.beginPath();
              ctx.arc(node.x, node.y, 17, 0, 2 * Math.PI, false);
              ctx.fillStyle = 'white';
              ctx.fill();
              ctx.fillStyle = node.color;
              ctx.fillText(label, node.x, node.y - (1.0 * fontSize) / 2);
              ctx.fillText(labelP, node.x, node.y + (1.5 * fontSize) / 2);                 
            } else if (node.isClusterNode) {             
              //else below arc
              ctx.beginPath();
              ctx.arc(node.x, node.y, 17, 0, 2 * Math.PI, false);
              ctx.fillStyle = 'white';
              ctx.fill();             
              ctx.fillStyle = node.color;
              ctx.fillText(label, node.x, node.y);          
            } else if (globalScale >= 3) {
              //load Image
              var imgload = new Image(5,5);
              imgload.src = node.testimg;       
              //render Image ohne Laggy function
              if ((!node.x && isNaN(node.x)) || (!node.y && isNaN(node.y))) {
                return;
              }
              if (imgload) {
                ctx.drawImage(imgload, node.x -2.5, node.y -2.5, 5,5);
              }
              ctx.font = `bold ${2}px TTNormsPro-Bold`;
              ctx.fillStyle = "black";
              ctx.fillText(label, node.x, node.y + 5);
              ctx.font = `${1.5}px TTNormsPro-Italic`;
              ctx.fillText(locationlabel, node.x, node.y + 7);
              node.color = "white";                                                    
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
      </React.Fragment>
    </div>
  );
}

export default App;
