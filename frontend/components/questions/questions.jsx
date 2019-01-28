import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({})
  }

  deleteQuestion(e) {
    e.stopPropagation();
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    return (
      <Draggable draggableId={this.props.question.id} index={this.props.index}>
        {(provided) => (

          <div id={this.props.question.id} className={`question-card`}
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <section className={`title-info`}>
              <p className={`question-name`}>{this.props.question.name}</p>
            </section>
          </div>
        )}
      </Draggable>
    )
  }
}