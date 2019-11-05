import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout, Icon, Avatar, Dropdown, Menu } from 'antd'
import Navigation from './components/Navigation'
import './App.css'
import ShoppingMall from './components/ShoppingMall'
import ShoppingCar from './components/ShoppingCar'
import Order from './components/Order'

const { Header, Content, Footer, Sider } = Layout

const menu = (
  <Menu>
    <Menu.Item>Personal Center</Menu.Item>
    <Menu.Item>Setting</Menu.Item>
    <Menu.Item>Sign out</Menu.Item>
  </Menu>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Router>
        <Layout>
          <Sider collapsed={this.state.collapsed}>
            <Navigation />
          </Sider>
          <Layout>
            <Header className="headerStyle">
              <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
              <span className="fixedPosition">
                <Dropdown overlay={menu}>
                  <span>
                    <Avatar icon="user" style={{ marginRight: '10px' }} />
                    <Icon type="caret-down" />
                  </span>
                </Dropdown>
              </span>
            </Header>
            <Content>
              <Route path="/shoppingmall" component={ShoppingMall}></Route>
              <Route path="/shoppingcar" component={ShoppingCar}></Route>
              <Route path="/order" component={Order}></Route>
            </Content>
            <Footer className="footer">
              Hello,I am TNSIHY!
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App

