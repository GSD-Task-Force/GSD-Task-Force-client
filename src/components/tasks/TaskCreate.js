import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createTask } from '../../api/tasks'

class TaskCreate extends Component {
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

      const { user, msgAlert, history } = this.props

      createTask(this.state, user)
        .then(() => history.push('/tasks/'))
        .then(() => {
          msgAlert({
            heading: 'Task created',
            message: 'Now you\'ll for sure remember this!',
            variant: 'success'
          })
        })
        .catch((error) => {
          msgAlert({
            heading: 'Task creation failed',
            message: 'Task error: ' + error.message,
            variant: 'danger'
          })
        })
    }

    render () {
      return (
        <div className='box'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type='text'
                name='title'
                value={this.state.title}
                placeholder='Task Title'
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
                placeholder='Task Description'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button className='createBt' type='submit'>
            Submit
            </Button>
          </Form>
        </div>
      )
    }
}

export default withRouter(TaskCreate)
