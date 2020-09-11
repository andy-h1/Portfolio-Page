import React from 'react';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { FormPage } from '.';

describe('Form Component', () => {
  it('should render', () => {
    const { container } = render(<FormPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // it('should show an error if no username', () => {
  //   // SETUP => render FormPage
  //   const { getByText } = render(<FormPage />);

  //   // ACTION => do whatever user actions your test

  //   // click submit button
  //   const button = getByText('Register');
  //   userEvent.click(button);

  //   // ASSERTION => asserting on what you expect to happen
  //   // check that the error is showing
  //   getByText('Username is required');
  // });

  // it('should show an error if no email', () => {
  //   // SETUP => render FormPage
  //   const { getByText } = render(<FormPage />);

  //   // ACTION => do whatever user actions your test

  //   // click submit button
  //   const button = getByText('Register');
  //   userEvent.click(button);

  //   // ASSERTION => asserting on what you expect to happen
  //   // check that the error is showing
  //   getByText('Email address is required');
  // });

  // it('should show an error if no password', () => {
  //   // SETUP => render FormPage
  //   const { getByText } = render(<FormPage />);

  //   // ACTION => do whatever user actions your test

  //   // click submit button
  //   const button = getByText('Register');
  //   userEvent.click(button);

  //   // ASSERTION => asserting on what you expect to happen
  //   // check that the error is showing
  //   getByText('Password is required');
  // });

  // it.each`
  //   errorMessage
  //   ${'Email address'}
  //   ${'Password'}
  //   ${'Username'}
  //   ${'Age'}
  // `('should show an error if no $errorMessage', ({ errorMessage }) => {
  //   // SETUP => render FormPage
  //   const { getByText } = render(<FormPage />);

  //   // ACTION => do whatever user actions your test

  //   // click submit button
  //   const button = getByText('Register');
  //   userEvent.click(button);

  //   // ASSERTION => asserting on what you expect to happen
  //   // check that the error is showing
  //   getByText(`${errorMessage} is required`);
  // });
});
