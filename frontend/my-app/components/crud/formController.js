import { useFormik } from 'formik';
const Basic=()=>{

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            gender: '',
            country: ''
        }
    })


    return(
         <div>
             
         </div>

    )

}

export default Basic;