/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  selectAuth,
  signInEmail,
  selectUser,
  resetPassword,
} from '../../../store/auth';
import StyledButton from '../../shared/Button/StyledButton';
import StyledLink from '../../shared/Link/StyledLink';

import { StyledCard } from '../StyledCard';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectAuth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(resetPassword(values.email));
    },
  });
  return (
    <>
      <StyledCard>
        <h2>Sign In</h2>
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

          <StyledButton secondary type="submit" disabled={false}>
            Reset Password
          </StyledButton>
        </form>
        <StyledLink to="/signin">Log In</StyledLink>
      </StyledCard>
    </>
  );
};

export default ForgotPassword;
