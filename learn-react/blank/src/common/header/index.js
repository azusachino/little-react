import React, { Component } from 'react'
import {
  Addition, Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper
} from './style'

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>Index</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch>
            </NavSearch>
            <i className='iconfont'>&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className='iconfont'>&#xe615;</i>
            Write</Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
