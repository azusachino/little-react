import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select
} from "antd";

import FormBuilder from ".";

const {Option} = Select;

const genderOptions = [
  {value: "male", displayName: "Male"},
  {value: "female", displayName: "Female"}
].map(item => (
  <Option key={item.value} value={item.value}>
    {item.displayName}
  </Option>
));

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    {
      key: "userName",
      label: "User name",
      tooltip: "user name",
      initialValue: "Nate",
      widget: Input,
      required: true
    },
    {
      key: "password",
      label: "Password",
      widget: Input,
      type: "password"
    },
    {
      key: "date",
      label: "Birth date",
      widget: DatePicker,
      widgetProps: {style: {width: "100%"}}
    },
    {
      key: "gender",
      label: "Gender",
      initialValue: "female",
      widget: Select,
      children: genderOptions
    },
    {
      key: "phone",
      label: "Phone",
      widget: Input,
      required: true,
      rules: [
        {
          pattern: /^\d+$/,
          message: "Phone must only contain numbers."
        },
        {
          min: 11,
          message: "Phone number at least lenght of 11"
        }
      ]
    },
    {
      key: "email",
      label: "Email",
      widget: Input,
      rules: [
        {
          type: "email",
          message: "Please input valid email address."
        }
      ]
    },
    {
      key: "age",
      label: "Age",
      initialValue: 10,
      widget: InputNumber
    }
  ]
};

class FormSubmitAntd extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.formRef = React.createRef();
  }

  resetForm() {
    this.formRef.current.resetFields();
  }

  handleSubmit(evt) {
    if (evt) {
      evt.preventDefault();
    }
    this.formRef.current.validateFieldsAndScroll(
      (errors, values) => {
        if (errors) {
          return;
        }
        console.log("Submit form: ", values);
      }
    );
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        layout="horizontal"
        style={{width: "400px"}}
        name="control-ref"
        ref={this.formRef}
        onFinish={(values) => console.log(values)}
      >
        <FormBuilder
          meta={formMeta}
          form={this.formRef}
        />
        <div style={{textAlign: "center"}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>&nbsp; &nbsp;
          <Button onClick={this.resetForm}>Reset</Button>
        </div>
      </Form>
    );
  }
}

export default FormSubmitAntd
