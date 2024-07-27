import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJob, updateJob } from "../redux/reducers/jobReducer";

/**
 * CustomTextInput component to render an input field with formik
 *
 * @param {object} props - The properties passed to the input field
 * @returns {JSX.Element} The CustomTextInput component
 */
const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group mb-4">
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

/**
 * CustomSelect component to render a select field with formik
 *
 * @param {object} props - The properties passed to the select field
 * @returns {JSX.Element} The CustomSelect component
 */
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
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

/**
 * JobForm component to add or edit a job application
 *
 * @param {boolean} isEditing - Indicates if the form is in the editing mode
 * @returns {JSX.Element} The JobForm component
 */
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
        <div className="container">
          <h1 className="">{isEditing ? "Edit Job" : "Add Job"}</h1>
          <Form>
            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <CustomTextInput
                  label="Position"
                  name="position"
                  id="position"
                  type="text"
                  placeholder="Enter the position"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <CustomTextInput
                  label="Company"
                  name="company"
                  id="company"
                  type="text"
                  placeholder="Enter the company name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <CustomSelect label="Status" name="status" id="status">
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option values="Offer">Offer</option>
                  <option values="Rejected">Rejected</option>
                </CustomSelect>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
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
