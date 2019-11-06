<Modal
title="New Process"
visible={this.state.visible}
width="800px"
onOk={this.handleOK}
onCancel={this.handleCancel}
maskClosable={false}
>
<Form>
    <Row type="flex" justify="space-around">
        <Col span={11}>
            <Form.Item required label="Process Name">
                {/* {getFieldDecorator('processname',{
                    rules:[{required:true}]
                })(<Input />)} */}
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