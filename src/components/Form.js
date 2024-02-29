import React from "react";
import { useFormik } from "formik"; // useFormik

const initialValues={
  name: "",
  email: "",
}

const onSubmit = values=>{
  console.log("Form data",values)
}

const validate=values=>{
  let errors={}

  if(!values.name){
    errors.name='Field is Required'
  }
  
  if(!values.email){
    errors.email='Field is Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email='Invaild Form Format'
  }

  return errors
  
}

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log("Visited Fields", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name?<div>{formik.errors.name}</div>:null}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
