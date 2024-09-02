import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css'; 


// Form Component
const RegistrationForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    alert(`Data stored successfully!\n\nName: ${data.name}\nAddress: ${data.address}\nMobile: ${data.mobile}\nEmail: ${data.email}\nGender: ${data.gender}\nDOB: ${data.dob}\nCourse: ${data.course}`);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Higher Secondary Admission Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name" className="label">Name:</label>
            <input id="name" className="input" {...register('name', { required: 'Name is required' })} />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address" className="label">Address:</label>
            <input id="address" className="input" {...register('address', { required: 'Address is required' })} />
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="label">Mobile:</label>
            <input id="mobile" type="tel" className="input" {...register('mobile', { 
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit mobile number'
              }
            })} />
            {errors.mobile && <p className="error-message">{errors.mobile.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input id="email" type="email" className="input" {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="gender" className="label">Gender:</label>
            <select id="gender" className="select" {...register('gender', { required: 'Gender is required' })}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="dob" className="label">Date of Birth:</label>
            <input id="dob" type="date" className="input" {...register('dob', { required: 'Date of Birth is required' })} />
            {errors.dob && <p className="error-message">{errors.dob.message}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="course" className="label">Course:</label>
            <select id="course" className="select" {...register('course', { required: 'Course selection is required' })}>
              <option value="">Select a course</option>
              <option value="biology">Biology</option>
              <option value="computerscience">Computer Science</option>
              <option value="commerce">Commerce</option>
              <option value="humanities">Humanities</option>
            </select>
            {errors.course && <p className="error-message">{errors.course.message}</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="button register">Register</button>
            <button type="button" className="button cancel" onClick={() => reset()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
