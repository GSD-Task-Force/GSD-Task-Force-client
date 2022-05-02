import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexTasks } from '../../api/tasks'

class IndexTasks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexTasks(user)
      .then(res => this.setState({ tasks: res.data.tasks }))
      .then(() => {
        msgAlert({
          heading: 'Index success',
          message: 'Showing all tasks',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Index fail',
          message: 'Index error: ' + error.message,
          variant: 'danger'
        })
      })
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
      taskJSX = tasks.map((task) => (
        <li key={task._id}>
          <Link to={`/tasks/${task._id}`}>
            {task.title}: {task.descripton}
          </Link>
        </li>
      ))
    }

    return (
      <>
        <h3>Task List:</h3>
        <ul>
          {taskJSX}
        </ul>
      </>
    )
  }
}

export default IndexTasks
