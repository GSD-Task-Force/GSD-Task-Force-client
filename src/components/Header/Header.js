import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/create-task' className='nav-link'>
Create Task
    </NavLink>
    <NavLink to='/tasks/' className='nav-link'>
Home
    </NavLink>
    <div className='d-flex'>
      <NavLink to='/change-password' className='nav-link'>
Change Password
      </NavLink>
      <NavLink to='/sign-out' className='nav-link'>
Sign Out
      </NavLink>
    </div>
  </Fragment>

)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link
        to='/'
        style={{
          color: 'rgb(251, 8, 251)',
          padding: '5px 0px 0px 0px',
          textDecoration: 'none',
          fontSize: '22px',
          fontFamily: 'Geneva, Verdana, sans-serif'
        }}>GSD-Task-Force
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto d-flex justify-content-between'>
        {user && (
          <span className='navbar-text mr-2'>Welcome, {user.email}</span>
        )}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
