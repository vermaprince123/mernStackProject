import React from 'react'
import {loginRoutes} from '../../routes/userRoutes';
import DashBoard from '../../components/crud/DashBoard';
import { Form, Input, Button , Icon} from 'antd';

const LoginPage=(props)=> {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(true);

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const queryParms = {
          'email':values.email,
          'password':values.password,
        };
        loginRoutes(queryParms).then(response => {
          if(response.data === 'SUCCESS') {
            setVisible(false);
          } else {
            alert('Please enter valid credentials');
          }
        }).catch(error => {
          alert('Please check your credentials');
        })
      }
    });
    
  }

  const {getFieldDecorator} = props.form;

  return (
    <div>
     {visible ?
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#033635',
      }
    } >
    <Form layout="inline">
    <Form.Item>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please input your email!' }], initialValue: email
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
          onChange={handleUsernameChange}
        />,
      )}
    </Form.Item>
    <Form.Item >
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],  initialValue:password
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
         
          onChange={handlePasswordChange}
        />,
      )}
    </Form.Item>
    <Form.Item
    required 
    >
      <Button type="primary"   onClick={handleSubmit}>
        Log in
      </Button>
    </Form.Item>
  </Form>
  </div>
     
   :<DashBoard />}
    </div>
  )
}

const LoginPageForAdmin = Form.create()(LoginPage);
export default LoginPageForAdmin;