import React, {useState} from 'react'
import { Drawer , Form, Input, Button} from 'antd';
import {addUser} from '../../routes/userRoutes';

const AddUser=(props)=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender]= useState('');
  const [country, setCountry] = useState('');
  const [apiAddResponse, setApiAddResponse]= useState([]);


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }

  const handleCloseDrawer = () => {
    props.handleCloseAddUser(false);
  }

  const handleSubmit = (event) => {
     event.preventDefault();
      props.form.validateFields((err, values) => {
      if (!err) {
       const queryParms = {
       'firstName':values.firstName,
       'lastName':values.lastName,
       'email':values.email,
       'password':values.password,
       'phone':parseInt(values.phone),
       'country':values.country,
       'gender':values.gender
    }
    addUser(queryParms).then(response => {
      if(response.data.message === 'SUCCESS') {
        setApiAddResponse(response.data.data);
        props.handleApiData(apiAddResponse, false);
      } else {
        alert('User already exists');
      }
    }
    ).catch(error => {
      alert('User already exists');
    })
  }
    })
  }

  const {getFieldDecorator} = props.form;

  return (
    <div>
        <Drawer title='Add User' width={720} visible={props.visibleValue} onClose={handleCloseDrawer}>


<Form layout="vertical" onSubmit={handleSubmit}>
    <Form.Item>
      {getFieldDecorator('firstName', {
        rules: [{ required: true, message: 'Please input your first name' }], initialValue: firstName
      })(
        <Input
          placeholder="First Name"
          onChange={handleFirstNameChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('lastName', {
        rules: [{message: 'Please input your last name!' }], initialValue: lastName
      })(
        <Input
          placeholder="Last Name"
          onChange={handleLastNameChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please input your email!' }], initialValue: email
      })(
        <Input
          placeholder="Email"
          onChange={handleEmailChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your password!' }], initialValue: password
      })(
        <Input
          placeholder="Password"
          onChange={handlePasswordChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('phone', {
        rules: [{ required: true, message: 'Please input your phone number!' }], initialValue: phone
      })(
        <Input
          placeholder="Phone"
          onChange={handlePhoneChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('gender', {
        rules: [{ required: true, message: 'Please input your gender!' }], initialValue: gender
      })(
        <Input
          placeholder="Gender"
          onChange={handleGenderChange}
        />,
      )}
    </Form.Item>


    <Form.Item>
      {getFieldDecorator('country', {
        rules: [{ required: true, message: 'Please input your email!' }], initialValue: country
      })(
        <Input
          placeholder="Country"
          onChange={handleCountryChange}
        />,
      )}
    </Form.Item>
    <Form.Item 
    required
    >
      <Button type="primary" htmlType="submit">
        Add User
      </Button>
    </Form.Item>
  </Form>
          </Drawer>
    </div>
  )
}

const AddUserComponent = Form.create({name:'add_user'})(AddUser);
export default AddUserComponent;