import React, { useState, useEffect } from 'react'
import { Modal, Row, Col, Form, Input, Select, Icon, Tooltip } from 'antd';

const { Option } = Select
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1494262_p58f7ojhvhg.js',
})

const ModalForm = Form.create()(props => {
    const { form, visible } = props

    console.log(visible)
    const [open, setOpen] = useState(visible)

    console.log(open)

    const handleCancel = () => {
        setOpen(false)
    }

    useEffect(() => {
        setOpen(visible)
    }, [visible])

    return (
        <Modal
            title="New Process"
            visible={open}
            width="800px"
            // onOk={this.handleOK}
            onCancel={() => handleCancel()}
            maskClosable={false}
        >
            <Form>
                <Row type="flex" justify="space-around">
                    <Col span={11}>
                        <Form.Item required label="Process Name">
                            {/* {getFieldDecorator('processname', {
                                rules: [{ required: true }]
                            })(<Input id="processname"/>)} */}
                            <Input id="processname" />
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item required label="API Name">
                            <Tooltip
                                title="Hello,I am a Tooltip title"
                                placement="bottom"
                            >
                                <IconFont type="icon-web-icon-" className="IconFontStyle" />
                            </Tooltip>
                            {/* {getFieldDecorator('apiname', {
                                rules: [{ required: true }]
                            })(<Input id="apiname" />)} */}
                            <Input id="apiname" />
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
    )
})

export default ModalForm