import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import apiUrl from './apiConfig'

class IndexTasks extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: null
    }
  }

  handleClick = () => {
    console.log('testing')
    axios({
      method: 'GET',
      url: apiUrl + '/tasks'
    })
      .then((response) => this.setState({ books: response.data.tasks }))
      .catch(console.error)
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
        <h4>Task List</h4>
        <ul>
          {taskJSX}
        </ul>
      </>
    )
  }
}

export default IndexTasks
