import React from 'react'
import { Input, Typography } from "antd"
const { Title, Text } = Typography
const { TextArea } = Input;

const TextInputWithLabel = ({
    label = "",
    value = "",
    placeholder = 'type',
    textArea = false,
    onChangeText = undefined,
    isEdit = false,
    titleStyle = null,
}) => {
    return (
        <div style={{
            marginBottom: 10
        }}>
            <Title level={5} style={{
                marginTop: 3,
                marginBottom: 3,
                ...titleStyle
            }} >{label}</Title>
            {
                !isEdit ? <Text>{value || 'Not provided'} </Text> : textArea ? <TextArea
                    placeholder="textarea with clear icon"
                    allowClear
                    onChange={() => { }}
                    rows={4}
                    value={value}
                /> : <Input
                    placeholder={placeholder}
                    onChange={onChangeText}
                    value={value}
                />
            }
        </div>
    )
}

export default TextInputWithLabel