import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, setFormErrors } from '../../store/slices/formSlice';
import './form.css';

export default function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const formErrors = useSelector((state) => state.form.formErrors);
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (
      !formErrors.nameError &&
      !formErrors.emailError &&
      !formErrors.passwordError &&
      !formErrors.confirmedPasswordError &&
      !formErrors.imageError &&
      isFormSubmitted
    ) {
      console.log("API request is made successfully");
    }
  }, [formErrors, isFormSubmitted]);

  const handleSubmitStatus = (e) => {
    e.preventDefault();
    validateForm();
    setIsFormSubmitted(true);
  };

  const handleUserDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const validateForm = () => {
    const newFormErrors = {
      nameError: formData.name.trim() === '' ? 'required' : '',
      emailError:
        formData.email.trim() === ''
          ? 'required'
          : !emailPattern.test(formData.email)
          ? 'incorrect email format'
          : '',
      passwordError:
        formData.password.trim() === ''
          ? 'required'
          : formData.password.length < 8
          ? 'should be at least 8 characters'
          : formData.password.length > 12
          ? 'should not exceed 12 characters'
          : '',
      confirmedPasswordError:
        formData.confirmedPassword !== formData.password
          ? 'passwords do not match'
          : '',
      imageError: formData.image === null ? 'required' : '',
    };
    dispatch(setFormErrors(newFormErrors));
  };

  return (
    <form className="formBody" onSubmit={handleSubmitStatus}>
      <div>
        <label>name</label>
        <input
          className="inputt"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleUserDataChange}
        />
        {formErrors.nameError && (
          <h5 className="errorMessage">{formErrors.nameError}</h5>
        )}
      </div>

      <div>
        <label>e-mail</label>
        <input
          className="inputt"
          name="email"
          value={formData.email}
          onChange={handleUserDataChange}
        />
        {formErrors.emailError && (
          <h5 className="errorMessage">{formErrors.emailError}</h5>
        )}
      </div>

      <div>
        <label>password</label>
        <input
          className="inputt"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleUserDataChange}
        />
        {formErrors.passwordError && (
          <h5 className="errorMessage">{formErrors.passwordError}</h5>
        )}
      </div>

      <div>
        <label>confirm password</label>
        <input
          className="inputt"
          type="password"
          name="confirmedPassword"
          value={formData.confirmedPassword}
          onChange={handleUserDataChange}
        />
        {formErrors.confirmedPasswordError && (
          <h5 className="errorMessage">{formErrors.confirmedPasswordError}</h5>
        )}
      </div>

      <div>
        <label>add image</label>
        <input
          className="buttonn1"
          type="file"
          name="image"
          onChange={handleUserDataChange}
        />
        {formErrors.imageError && (
          <h5 className="errorMessage">{formErrors.imageError}</h5>
        )}
      </div>

      <button type="submit" className="buttonn2">
        submit
      </button>
    </form>
  );
}
