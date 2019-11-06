import React, { Component } from 'react'
import { Typography, Button, } from 'antd'

import ModalForm from './ModalForm'

class ShoppingMall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    // 暂且先把它关闭
    handleOK = (e) => {
        console.log(e)
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="ShoppingMallContainer">
                <Typography>
                    <Button
                        type="primary"
                        className="ShoppingMallRight"
                        onClick={this.showModal}
                    >New</Button>
                </Typography>
                <ModalForm visible={this.state.visible}/>
            </div>
        );
    }
}

export default ShoppingMall;