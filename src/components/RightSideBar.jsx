import React from 'react';

export const RightSideBar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Start
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'wait')} draggable>
        Wait
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'convertformat')} draggable>
        Convert Formart
      </div>

      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'filterdata')} draggable>
        filterdata
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'send')} draggable>
       send
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        End
      </div>
    </aside>
  );
};
