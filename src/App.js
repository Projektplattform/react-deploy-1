import logo from './logo.svg';
import './App.css';
import {InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

import React, { Component } from "react";
//import "./styles.css";
import "../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries } from "react-vis";


type Nodes = {
  id: number;
  label?: string;
};

function App() {
  return (
    <div className="App">
      <h1>Projektplattform Energie + Innovation</h1>
      <h2>
      </h2>
       
      

      <InteractiveForceGraph
        zoom
        simulationOptions={{ height: 500, width: 800, animate: true }}
        labelAttr="label"
        onSelectNode={(node: any) => console.log(node)}
        highlightDependenciesnp
      >
        {Array.from({ length: 20 })
          .fill(0)
          .map((_, index) => {
            console.log(index);
            return (
              <ForceGraphNode
                key={index}
                node={{ id: index, label: index }}
                fill="white"
              />
            );
          })}
        <ForceGraphNode
          node={{ id: "first-node", label: "First node" }}
          fill="white"
        />
        <ForceGraphNode
          node={{ id: "third-node", label: "third node" }}
          fill="white"
        />
        <ForceGraphNode
          node={{ id: "second-node", label: "Second node" }}
          fill="white"
        />
        <ForceGraphLink
          link={{ source: "first-node", target: "second-node" }}
        />
      </InteractiveForceGraph>

      
    </div>
  );
}

export default App;
