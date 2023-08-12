"use client";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import React, { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";
import Column from "./Column";

function Board() {
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    //check if user dragged card outside of board
    if (!destination) return;

    //handle column drag
    if (type==="column") {
        const entries = Array.from(board.columns.entries());
        const [removed] = entries.splice(source.index, 1)
        entries.splice(destination.index, 0, removed);
        const rearragnedColumns = new Map(entries);
        setBoardState({
            ...board, columns: rearragnedColumns,
        })
    }

    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const finishColIndex = columns[Number(destination.droppableId)]

    const startCol: Column = {
        id: startColIndex[0],
        todos: 
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column 
              key={id} 
              id={id} 
              todos={column.todos} 
              index={index} 
              />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
