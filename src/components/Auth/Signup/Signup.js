/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAuth, selectUser, signupEmail } from '../../../store/auth';
import StyledButton from '../../shared/Button/StyledButton';

import { StyledCard } from '../StyledCard';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.lastName = 'Required';
  }
  if (!values.passwordConfirm) {
    errors.lastName = 'Required';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordMatch =
      'Passwords do not match! Make sure the passwords are same.';
  }

  return errors;
};

const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectAuth);
  const user = useSelector(selectUser);

  const history = useHistory();
  useEffect(() => {
    if (!isLoading && user) {
      history.push('admin');
    }
  }, [isLoading, user, history]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(signupEmail(values.email, values.password));
    },
  });
  return (
    <>
      <StyledCard>
        <h2>Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
          />
          {formik.errors.passwordConfirm ? (
            <div>{formik.errors.passwordConfirm}</div>
          ) : null}
          {formik.errors.passwordMatch ? (
            <div>{formik.errors.passwordMatch}</div>
          ) : null}

          <StyledButton secondary type="submit" disabled={isLoading}>
            Submit
          </StyledButton>
        </form>
        <div>
          <p>Already have an account? Log In</p>
        </div>
      </StyledCard>
    </>
  );
};

export default Signup;
