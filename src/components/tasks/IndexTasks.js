import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexTasks, updateTask } from '../../api/tasks'

class IndexTasks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexTasks(user)
      .then((res) => this.setState({ tasks: res.data.task }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Showing all tasks',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleClick = (event) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex((task) => {
      return (task._id === event.target.name)
    })
    tasks[index].checked = !tasks[index].checked
    updateTask(event.target.name, tasks[index], this.props.user)
      .then(() => this.setState({ tasks }))
  }

  render () {
    const { tasks } = this.state

    if (tasks === null) {
      return 'Loading...'
    }

    let taskJSX
    if (tasks.length === 0) {
      taskJSX = 'No tasks on your to do list. Try adding one.'
    } else {
      taskJSX = tasks.map((task) => {
        if (task.checked) {
          return (
            <div className='card' key={task._id}>
              <input
                type='checkbox'
                value={task.clicked}
                name={task._id}
                checked={task.checked}
                onClick={this.handleClick}></input>
              <div className='card-body'>
                <Link to={`/tasks/${task._id}`}>
                  <h5
                    className='card-title'
                    style={{ textDecoration: 'line-through' }}>
                    {task.title}
                  </h5>
                </Link>
                <p
                  className='card-text'
                  style={{ textDecoration: 'line-through' }}>
                  {task.description}
                </p>
              </div>
            </div>
          )
        } else {
          return (
            <div className='card' key={task._id}>
              <input type='checkbox' value={task.clicked} name={task._id} checked={task.checked} onClick={this.handleClick}></input>
              <div className='card-body'>
                <Link to={`/tasks/${task._id}`}>
                  <h5 className='card-title'>{task.title}</h5>
                </Link>
                <p className='card-text'>{task.description}</p>
              </div>
            </div>
          )
        }
      })
    }

    return (
      <>
        <h3>Task List:</h3>
        <ul>{taskJSX}</ul>
      </>
    )
  }
}

export default IndexTasks
