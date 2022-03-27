import React, { useEffect , useState} from 'react'
import { Table, Button, PageHeader } from 'antd';
import AddUserComponent from './AddUser';
import EditUserComponent from './EditUser';
import DeleteUser from './DeleteUser';
import {getAllUsers} from '../../routes/userRoutes';

 const DashBoard = () => {
     const [addUserVisibility, setAddUserVisibility] = useState(false);
     const [editUserVisibility, setEditUserVisibility] = useState(false);
     const [deleteUserVisibility, setDeleteUserVisibility] = useState(false);
     const [keyEdit, setKeyEdit] = useState('');
     const [keyDelete, setKeyDelete] = useState('');
     const [userData, setUserData] = useState([]);
     useEffect(() => {
        getAllUsers()
          .then(data => {
                setUserData(data.data);
          }).catch(err => {
                console.log(err);
          }
      )
      }, [])
    
    const columns = [
      {
        title: 'FirstName',
        dataIndex: 'firstName',
        key: 'name',
      },
      {
        title: 'LastName',
        dataIndex: 'lastName',
        key: 'lastName',
        render: (text) => text ? <div>{text}</div> : "Null",
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      },
      {
        title: 'Action',
        dataIndex: 'email',
        key: 'emailId',
        render:(key)=>{
            return <div style={{
              padding: '5px',
            }}>
                <Button type='primary' onClick={()=>editUser(key)}>Edit</Button>
                <Button type='danger' onClick={()=>deleteUser(key)}>Delete</Button>
            </div>
        }
      },
    ];

    const editUser = (key) => {
        setKeyEdit(key);
        setEditUserVisibility(true);
    }


    const deleteUser = (key) => {
        setKeyDelete(key);
        setDeleteUserVisibility(true);
    }

    const handleCloseDeleteUser = (value) => {
        setDeleteUserVisibility(value);
        getAllUsers().then(data => {
            setUserData(data.data);
        }).catch(err => {
            console.log(err);
        } 
        )
    }


    const handleAddUser = () => {
        setAddUserVisibility(true);
    }

    const handleCloseAddUser = (value) => {
        setAddUserVisibility(value);
    }

    const handleCloseEditUser = (value) => {
        setEditUserVisibility(value);
    }

    const handleAddApiData = (value, booleanValue) => {
        setAddUserVisibility(booleanValue);
        getAllUsers().then(data => {
            setUserData(data.data);
        }).catch(err => {
            console.log(err);
        }
    )
    }


    const handleEditApiData = (value, booleanValue) => {
        setEditUserVisibility(booleanValue);
        getAllUsers().then(data => {
            setUserData(data.data);
        }).catch(err => {
            console.log(err);
        }
    )
    }

     return (
      <div>  
        <PageHeader title='DashBoard' style={{
          backgroundColor: '#027d71'
        }}>
            <Button type='primary'
            style={{
              position: 'absolute',
              right:'4px',
              top:'0',
              margin: '20px',
          

            }}
             onClick={handleAddUser}>Add New</Button>
        </PageHeader>
        {addUserVisibility && <AddUserComponent visibleValue={addUserVisibility} handleCloseAddUser={(value)=>handleCloseAddUser(value)} handleApiData={(data, booleanValue)=>handleAddApiData(data, booleanValue)}/>}
        {editUserVisibility && <EditUserComponent keyForEdit={keyEdit}  visibleValue={editUserVisibility} handleCloseAddUser={(value)=>handleCloseEditUser(value)} handleApiData={(data, booleanValue)=>handleEditApiData(data, booleanValue)} />}
        {deleteUserVisibility && <DeleteUser keyForDelete={keyDelete}  visibleValue={deleteUserVisibility} handleCloseDrawer={(value)=>handleCloseDeleteUser(value)}/>}
        <Table dataSource={userData} columns={columns} />;
        </div>
    
  )

 
}


export default DashBoard;
