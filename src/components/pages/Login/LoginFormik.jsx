import { useFormik } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
  
  
    const { handleSubmit, handleChange, values, errors}= useFormik({   // handlesubmit, se coloca en el evento del form // values hace referencia al initialvalues
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: (data) => {
        console.log("se envio el formulario", data)
      },
      validationSchema: Yup.object({
        email: Yup.string("debe ser un string").email().required(),
        password: Yup.string("debe ser un string").required()
      }),

    })
  
  
       return (
                 
        
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} />

            {errors.email && <span>{errors.email}</span>}

            <input type="text" placeholder="Password" name="password" onChange={handleChange} />
            
            {errors.password && <span>{errors.password}</span>}
            
            
            
            <button type="submit"> Ingresar </button>
    
            </form>
        </div>
    )
  }
  
  export default LoginFormik