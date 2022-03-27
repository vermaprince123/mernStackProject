import React from 'react'
import { Modal, notification } from 'antd';
import { deleteUserByEmail} from '../../routes/userRoutes';
const DeleteUser = (props)=>{


    const handleOk = () => {
        deleteUserByEmail(props.keyForDelete).then(data => {
            notification.success({
                message: 'Success',
                description: 'User deleted successfully',
                duration: 2,
            });
            props.handleCloseDrawer(false);
        }).catch(err => {
            notification.error({
                message: 'Error',
                description: err.response.data.message,
                duration: 2,
            });
        })
    }

    const handleCancel = () => {
        props.handleCloseDrawer(false);
    }

    return (
        <>
           <Modal title="Delete Product?" visible={props.visibleValue} okType='danger' onOk={handleOk} onCancel={handleCancel} okText="Delete" cancelText="Cancel">
                <h1>Are you sure you want to Delete this Product?</h1>
           </Modal> 
        </>
    )

}

export default DeleteUser;




      
    
