import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { showTask, deleteTask } from '../../api/tasks'
import Button from 'react-bootstrap/Button'

class ShowTask extends Component {
  constructor (props) {
    super(props)

    this.state = {
      task: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showTask(match.params.id, user)
      .then(res => this.setState({ task: res.data.task }))
      .then(() => {
        msgAlert({
          heading: 'Successfully Showing Task',
          message: 'WooHoo!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show Task Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props

    deleteTask(match.params.id, user)
      .then(() => history.push('/tasks/'))
      .then(() => {
        msgAlert({
          heading: 'Successfully Deleted Task',
          message: 'WooHoo!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Delete Task Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.task === null) {
      return 'Loading...'
    }

    const { title, description, owner } = this.state.task
    const { user, match, history } = this.props
    return (
      <>
        <h4>{title}</h4>
        <p>{description}</p>
        {user._id === owner && (
          <>
            <Button
              onClick={() => history.push(`/tasks/${match.params.id}/update`)}>Update
            </Button>
            <Button onClick={this.handleDelete}>Delete</Button>
          </>
        )}
      </>
    )
  }
}

export default withRouter(ShowTask)
