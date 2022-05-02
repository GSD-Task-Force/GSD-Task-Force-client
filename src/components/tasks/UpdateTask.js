import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { updateTask } from '../../api/tasks'

class UpdateTask extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, match, history } = this.props

  updateTask(match.params.id, this.state, user)
    .then(() => history.push(`/tasks/${match.params.id}`))
    .then(() => {
      msgAlert({
        heading: 'Task updated',
        message: 'Now it\'s different!',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Task update failed',
        message: 'Task error: ' + error.message,
        variant: 'danger'
      })
    })
}

render () {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId='title'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type='text'
          name='title'
          value={this.state.title}
          placeholder='Update Task Title'
          onChange={this.handleChange}
        />
      </Form.Group>
      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          type='text'
          name='description'
          value={this.state.description}
          placeholder='Update Task Description'
          onChange={this.handleChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}
}

export default withRouter(UpdateTask)
