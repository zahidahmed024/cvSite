import { Select, Typography } from 'antd'
import React from 'react'
const { Title, Paragraph, Text, Link } = Typography

const SelectInputWithLabel = ({ label = "", value = "", titleStyle = null, placeholder = 'type', textArea = false, onChangeText = undefined, isEdit = false }) => {
    return (
        <div style={{
            marginBottom: 10,
        }}>
            <Text style={{
                marginTop: 3,
                marginBottom: 3,
                display: 'block',
                fontWeight: '600',
                ...titleStyle
            }} >{label}</Text>
            {!isEdit ? <Text>{value || 'Not provided'} </Text>
                :
                <Select
                    defaultValue={value}
                    // mode="tags"
                    style={{
                        width: '100%',
                    }}
                    onChange={() => { }}
                    tokenSeparators={[',']}
                    options={[{}, {}]}
                />
            }
        </div>
    )
}
export default SelectInputWithLabel