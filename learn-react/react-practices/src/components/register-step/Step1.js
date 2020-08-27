import React from 'react'
import {Input} from 'antd'
import FormBuilder from "../form-builder";

const formMeta = {
  colon: true,
  columns: 1,
  elements: [{
    key: "email",
    label: "Email",
    widget: Input
  }]
}

class Step1 extends React.Component {

  componentDidMount() {
    this.props.form.setFieldsValue(this.props.allValues)
  }

  render() {
    return (
      <div>
        <FormBuilder meta={formMeta} form={this.props.form}/>
      </div>
    )
  }
}

export default Step1;
