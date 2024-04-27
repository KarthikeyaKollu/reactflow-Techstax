import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';
import './components/firebaseconfig'
import { RightSideBar } from './components/RightSideBar';
import { writeData, readData } from "./components/firebaseExample"
import './index.css';
import uuid from 'react-uuid';
import { SideBar } from './components/SideBar';
import { Upload } from './components/Upload';
import { NavBar } from './components/NavBar';
import {Auth} from "./Auth"
import { useUser } from '@clerk/clerk-react';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input' },
    position: { x: 250, y: 25 },
  },
];

const initialEdges = [

  
]



const App = () => {


  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if (user) {
      console.log('User ID:', user.id);
    }
 
  
  }, [user]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds))

    },
    []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }


      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: uuid(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));

    },
    [reactFlowInstance],
  );

  useEffect(() => {

    getSavedData()
 
 
   }, [user])

   const getSavedData = async () => {

    const data = await readData(`${user?.id}`);
    console.log(data)
    setEdges(data?.edges ?? []);
    setNodes(data?.nodes ?? []);

  }

  const getNextNode = (currentNode, edges) => {
    const connectedEdges = edges.filter(edge => edge.source === currentNode.id);
    if (connectedEdges.length === 0) {
      return null; // Reached the end of the workflow
    }
    // Assuming there's only one edge connecting two nodes in this example
    const nextEdge = connectedEdges[0];
    const nextNode = nodes.find(node => node.id === nextEdge.target);
    return nextNode;
  }

  const generateWorkflowArray = () => {
    const workflowArray = [];
    const sourceNodes = nodes.filter(node => !edges.some(edge => edge.target === node.id));
    sourceNodes.forEach(sourceNode => {
      let currentNode = sourceNode;
      while (currentNode) {
        workflowArray.push(currentNode.type); // Pushing the type property
        currentNode = getNextNode(currentNode, edges);
      }
    });
    return workflowArray;
  }

  var workflowArray = []
  // Call generateWorkflowArray whenever edges or nodes change
  useEffect(() => {
    workflowArray = generateWorkflowArray();
    console.log(workflowArray);
  }, [nodes, edges]);


  return (
    <>
    <div>

      <div>
      <NavBar/>
      </div>

      <div className='grid grid-cols-12 h-screen w-screen'>
    
        <div className='col-span-2 h-screen'>
        <SideBar/>
        </div>

        <div className='col-span-8 dndflow'>
        <ReactFlowProvider>
        <div className="h-[800px] w-full" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <MiniMap  nodeStrokeWidth={3} zoomable pannable />
            <Background color="#ccc" variant={"cross"} />
          </ReactFlow>
        </div>  
        </ReactFlowProvider>      
        </div>
        
        <div className='col-span-2 grid grid-rows-10'>

          <div className='row-span-6 dndflow w-full h-[800px]' ref={reactFlowWrapper}>
          <RightSideBar/>
          </div>

          <div className='row-span-4'>
          <Upload/>
          </div>

        </div>
      </div>

    </div>
    </>
  );
};

export default App;
