import React, {useState} from 'react'
import { Drawer , Form, Input, Button} from 'antd';
import {addUser} from '../../routes/userRoutes';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddUserComponent=(props)=> {
  const [apiAddResponse, setApiAddResponse]= useState([]);


  const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        country: ''
    },
    validationSchema:Yup.object({
      firstName:Yup.string().required('Required firstName'),
      email:Yup.string().required('Required'),
      password:Yup.string().required('Required'),
      phone:Yup.number().required('Required'),
      gender:Yup.string().required('Required'),
      country:Yup.string().required('Required'),
    }),
    onSubmit:(values)=>{
      console.log(values)
      const queryParms = {
       'firstName':values.firstName,
       'lastName':values.lastName,
       'email':values.email,
       'password':values.password,
       'phone':parseInt(values.phone),
       'country':values.country,
       'gender':values.gender
      }

        addUser(queryParms).then((response)=>{
          setApiAddResponse(response.data.data);
          props.handleApiData(apiAddResponse, false);
        }).catch((error)=>{
          console.log(error);
        })

    }
})
console.log(formik.errors.firstName, formik.touched.firstName)


  const handleCloseDrawer = () => {
    props.handleCloseAddUser(false);
  }

 
  return (
    <div>
 <Drawer title='Add User' width={720} visible={props.visibleValue} onClose={handleCloseDrawer}>
  <form layout="vertical" onSubmit={formik.handleSubmit}>
    <Form.Item>
        <Input
          id="add_user_firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          initialvalues={formik.values.firstName}
          onBlur={formik.handleBlur}
        />{formik.touched.firstName && formik.errors.firstName ? (<p>{formik.errors.firstName}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_lastName'
          placeholder="Last Name"
          onChange={formik.handleChange}
          initialvalues={formik.values.lastName}
          onBlur={formik.handleBlur}
        />{formik.touched.lastName && formik.errors.lastName ? (<p>{formik.errors.lastName}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_email'
          placeholder="Email"
          onChange={formik.handleChange}
          initialvalues={formik.values.email}
          onBlur={formik.handleBlur}
        />{formik.touched.email && formik.errors.email ? (<p>{formik.errors.email}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_password'
          placeholder="Password"
          onChange={formik.handleChange}
          initialvalues={formik.values.password}
          onBlur={formik.handleBlur}
        />{formik.touched.password && formik.errors.password ? (<p>{formik.errors.password}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_phone'
          placeholder="Phone"
          onChange={formik.handleChange}
          initialvalues={formik.values.phone}
          onBlur={formik.handleBlur}
        />{formik.touched.phone && formik.errors.phone ? (<p>{formik.errors.phone}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_gender'
          placeholder="Gender"
          onChange={formik.handleChange}
          initialvalues={formik.values.gender}
          onBlur={formik.handleBlur}
        />{formik.touched.gender && formik.errors.gender ? (<p>{formik.errors.gender}</p>) : null}
    </Form.Item>


    <Form.Item>
        <Input
          id='add_user_country'
          placeholder="Country"
          onChange={formik.handleChange}
          initialvalues={formik.values.country}
          onBlur={formik.handleBlur}
        />{formik.touched.country && formik.errors.country ? (<p>{formik.errors.country}</p>) : null}
    </Form.Item>
    <Form.Item 
    >
      <Button type="primary" htmlType="submit">
        Add User
      </Button>
    </Form.Item>
  </form>
          </Drawer>
    </div>
  )
}

export default AddUserComponent;