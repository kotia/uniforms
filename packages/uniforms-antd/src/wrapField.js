import { Form, Icon, Tooltip } from 'antd';
import React          from 'react';
import filterDOMProps from 'uniforms/filterDOMProps';

export default function wrapField ({
    colon,
    error,
    errorMessage,
    id,
    info,
    label,
    labelCol,
    required,
    showInlineError,
    wrapperCol,
    wrapperStyle
}, children) {
    const labelNode = !!label && (
        <span>
            {label}
            {!!info && (
                <span>
                    &nbsp;
                    <Tooltip title={info}>
                        <Icon type="question-circle-o" />
                    </Tooltip>
                </span>
            )}
        </span>
    );

    return (
        <Form.Item
            colon={colon}
            hasFeedback
            help={showInlineError && error && errorMessage}
            htmlFor={id}
            label={labelNode}
            labelCol={labelCol}
            required={required}
            style={wrapperStyle || {marginBottom: '12px'}}
            validateStatus={error ? 'error' : undefined}
            wrapperCol={wrapperCol}
        >
            {children}
        </Form.Item>
    );
}

filterDOMProps.register(
    'colon',
    'labelCol',
    'wrapperCol',
    'wrapperStyle'
);
