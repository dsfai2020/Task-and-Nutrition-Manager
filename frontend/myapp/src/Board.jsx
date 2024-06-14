import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './Board.css';

const BOARD_STORAGE_KEY = 'board-state';

const initialColumns = {
  'column-1': {
    id: 'column-1',
    title: 'To do',
    items: [
      { id: 'item-1', content: 'Task 1' },
      { id: 'item-2', content: 'Task 2' },
      { id: 'item-3', content: 'Task 3' },
    ],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    items: [
      { id: 'item-4', content: 'Task 4' },
      { id: 'item-5', content: 'Task 5' },
    ],
  },
  'column-3': {
    id: 'column-3',
    title: 'Done',
    items: [
      { id: 'item-6', content: 'Task 6' },
      { id: 'item-7', content: 'Task 7' },
      { id: 'item-8', content: 'Task 8' },
    ],
  },
};

const Board = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [editingItem, setEditingItem] = useState(null);

  // Load board state from local storage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem(BOARD_STORAGE_KEY);
    if (savedState) {
      setColumns(JSON.parse(savedState));
    }
  }, []);

  // Save board state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(BOARD_STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newItems = Array.from(startColumn.items);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);

      const newColumn = {
        ...startColumn,
        items: newItems,
      };

      setColumns((prevColumns) => ({
        ...prevColumns,
        [newColumn.id]: newColumn,
      }));
    } else {
      const startItems = Array.from(startColumn.items);
      const endItems = Array.from(endColumn.items);

      const [removed] = startItems.splice(source.index, 1);
      endItems.splice(destination.index, 0, removed);

      const newStartColumn = {
        ...startColumn,
        items: startItems,
      };

      const newEndColumn = {
        ...endColumn,
        items: endItems,
      };

      setColumns((prevColumns) => ({
        ...prevColumns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      }));
    }
  };

  const handleAddCard = (columnId) => {
    const newCardId = `item-${Date.now()}`;
    const newCard = { id: newCardId, content: 'New Card' };

    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      newColumns[columnId].items.push(newCard);
      return newColumns;
    });
  };

  const handleItemNameChange = (columnId, itemId, newName) => {
    setColumns((prevColumns) => {
      const newColumns = { ...prevColumns };
      newColumns[columnId].items = newColumns[columnId].items.map((item) =>
        item.id === itemId ? { ...item, content: newName } : item
      );
      return newColumns;
    });
  };

  const handleItemClick = (columnId, itemId) => {
    setEditingItem({ columnId, itemId });
  };

  const handleItemBlur = () => {
    setEditingItem(null);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        {Object.values(columns).map((column) => (
          <div className="column" key={column.id}>
            
            <h3 className="column-title">{column.title}</h3>
            
            <Droppable droppableId={column.id}>{(provided) => (
                <div className="column-items" ref={provided.innerRef}{...provided.droppableProps}>
                  {column.items.map((item, index) => (
                    
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div className={`item ${editingItem?.itemId === item.id ? 'editing' : ''}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          
                          onClick={() => handleItemClick(column.id, item.id)}>
                            {editingItem?.itemId === item.id ? (
                              <input
                                type="text"
                                value={item.content}
                                onChange={(e) =>
                                  handleItemNameChange(column.id, item.id, e.target.value)
                                }
                                onBlur={handleItemBlur}
                                autoFocus/>
                          ) : (
                            item.content
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <button className="add-card-button" onClick={() => handleAddCard(column.id)}>+ Add Story</button>
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
