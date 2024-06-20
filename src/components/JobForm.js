import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJob, updateJob } from "../redux/reducers/jobReducer";

// Define CustomTextInput to use a text input in the JobForm
const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group mb-4">
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? <div className="text-danger">{meta.error}</div> : null}
    </div>
  );
};

// Define CustomSelect to use as a dropdown in the JobForm
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group mb-4">
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className="form-control" {...field} {...props}>
        {props.children}
      </select>
      {meta.touched && meta.error ? <div className="text-danger">{meta.error}</div> : null}
    </div>
  );
};

// Define JobForm component
function JobForm({ isEditing }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const jobs = useSelector((state) => state.jobs.jobList);
  const job = jobs.find((job) => job.id === parseInt(id));

  const initialValues = job || {
    id: Date.now(),
    position: "",
    company: "",
    status: "Applied",
  };

  const validationSchema = Yup.object({
    position: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (isEditing) {
      dispatch(updateJob(values));
      resetForm();
      navigate("/dashboard");
    } else {
      dispatch(addJob(values));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {(formik) => (
        <div className="container mt-4">
          <h1 className="text-center">{isEditing ? "Edit Job" : "Add Job"}</h1>
          <Form>
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-4">
                <CustomTextInput
                  label="Position"
                  name="position"
                  id="position"
                  type="text"
                  placeholder="Enter the position"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-4">
                <CustomTextInput
                  label="Company"
                  name="company"
                  id="company"
                  type="text"
                  placeholder="Enter the company name"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-4">
                <CustomSelect label="Status" name="status" id="status">
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option values="Offer">Offer</option>
                  <option values="Rejected">Rejected</option>
                </CustomSelect>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 col-sm-8 col-md-4">
                <button className="btn btn-primary" type="submit">
                  {isEditing ? "Update Job" : "Add Job"}
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default JobForm;
