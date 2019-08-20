import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import "@atlaskit/css-reset";

const Container = styled.div`
  display: flex;
`;

// const result = {
//   draggableId: 'group-1',
//   type: 'TYPE',
//   reason: 'DROP',
//   source: {
//     droppableId: 'column-1',
//     index: 0
//   },
//   destination: null
// }

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newGroupIds = Array.from(start.groupIds);
      newGroupIds.splice(source.index, 1);
      newGroupIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        groupIds: newGroupIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // Moving from one list to another
    const startGroupIds = Array.from(start.groupIds);
    startGroupIds.splice(source.index, 1);
    const newStart = {
      ...start,
      groupIds: startGroupIds
    };

    const finishGroupIds = Array.from(finish.groupIds);
    finishGroupIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      groupIds: finishGroupIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const groups = column.groupIds.map(
              groupId => this.state.groups[groupId]
            );
            return <Column key={column.id} column={column} groups={groups} />;
          })}
        </Container>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
