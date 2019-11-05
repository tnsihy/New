import React, { Component } from 'react'
import { Typography, Button, Modal, Row, Col, Form, Input, Select,Icon } from 'antd';

const { Option } = Select
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1494262_p58f7ojhvhg.js',
})

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
    handleOK = () => {
        this.setState({
            visible: false
        })
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
                <Modal
                    title="New Process"
                    visible={this.state.visible}
                    width="800px"
                    onOk={this.handleOK}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Row type="flex" justify="space-around">
                            <Col span={11}>
                                <Form.Item required label="Process Name">
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={11}>
                                <Form.Item required label="`API Name + <Ico>`" extra={<IconFont type="icon-web-icon-" style={{fontSize:'20px'}}/>}>
                                    <Input/>
                                </Form.Item>
                            </Col>
                            <Col span={23}>
                                <Form.Item label="Description">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={23}>
                                <Form.Item required label="Start time of the process">
                                    <Select
                                        placeholder="Select an option"
                                    >
                                        <Option value="1">Record changes</Option>
                                        <Option value="2">Other process calls</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ShoppingMall;