import React from "react";
import { useFormik } from "formik"; // useFormik
function Form() {
  const formik = useFormik({
    initialValues: {
      name: "Senu",
      email: "",
    },
  });

  console.log("Form Values", formik.values);
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
