import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span><Link to="/shoppingmall" style={{ color: '#ddd' }}>Shopping Mall</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span><Link to="/shoppingcar" style={{ color: '#ddd' }}>My Shopping Car</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span><Link to="/order" style={{ color: '#ddd' }}>My Order</Link></span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navigation;