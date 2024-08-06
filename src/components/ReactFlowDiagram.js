import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
    { id: '1', type: 'input', data: { label: 'Input Node' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: 'Default Node' }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: 'Output Node' }, position: { x: 400, y: 100 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' },
];

const ReactFlowDiagram = () => {
    return (
        <ReactFlow elements={elements} style={{ width: '100%', height: '500px' }} />
    );
};

export default ReactFlowDiagram;