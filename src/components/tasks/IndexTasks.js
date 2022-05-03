import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexTasks, updateTask } from '../../api/tasks'

class IndexTasks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: [],
      inputText: ''
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
        return task._id === event.target.name
      })
      tasks[index].checked = !tasks[index].checked
      updateTask(event.target.name, tasks[index], this.props.user).then(() =>
        this.setState({ tasks })
      )
    }

    inputHandler = (event) => {
      const lowerCase = event.target.value.toLowerCase()
      this.setState({ inputText: lowerCase })
      console.log(this.state.inputText)
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
        // taskJSX takes state data and turns it into a JSX format
        // It uses map to do that
        // What we're doing with the searchbar is hopping in right before we map anything
        // And we're saying "If this text we're giving you is anywhere in the title of any of the tasks, send it over to be mapped"
        // ("If not, don't")
        // The only tricky part left is how we use indexOf
        // Index of finds the spot in a string where another whole thing lives
        // So ['a', 'b', 'c'].indexOf['c'] = 2
        // If it isn't in the thing at all, indexOf returns -1
        // So what we're doing with this line is saying "If the index of user text is anything but -1 in task.title", map that task.
        taskJSX = tasks.filter(task => task.title.toLowerCase().indexOf(this.state.inputText) > -1 || this.state.inputText === '').map((task) => {
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
                <input
                  type='checkbox'
                  value={task.clicked}
                  name={task._id}
                  checked={task.checked}
                  onClick={this.handleClick}></input>
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
          <input type='text' onChange={this.inputHandler} />
          <h3>Task List:</h3>
          <ul>{taskJSX}</ul>
        </>
      )
    }
}

export default IndexTasks
