export const Validate = (values) => {
  const patterns = {
    firstName: /([a-zA-Z0-9]){3,12}/,
    lastName: /([a-zA-Z0-9]){3,12}/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    password: /([A-Za-z0-9]{8,})/,
    phone: /([0-9]){10}/,
  };
  const errors = {};

  // First name validation
  if (!values.firstName || values.firstName === "") {
    errors.firstName = "First name is required";
  } else if (!patterns.firstName.test(values.firstName)) {
    errors.firstName = "First name should be greater than 3";
  }

  //  Last Name validation

  if (!values.lastName || values.lastName === "") {
    errors.lastName = "Last name is required";
  } else if (!patterns.lastName.test(values.lastName)) {
    errors.lastName = "First name should be greater than 3";
  }

  //   email validation

  if (!values.email || values.email === "") {
    errors.email = "email is required";
  } else if (!patterns.email.test(values.email)) {
    errors.email = "please enter a valid email";
  }

  // Phone phone validation

  if (!values.phone || values.phone === "") {
    errors.phone = "phone is required";
  } else if (!patterns.phone.test(values.phone)) {
    errors.phone = "A valid phone number should be 11 digits";
  }

  //   Password validation

  if (!values.password || values.password === "") {
    errors.password = "password is required";
  } else if (!patterns.password.test(values.password)) {
    errors.password =
      "Password must not be less than 8 characters and must contains number and Alphabets";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password confirmation went wrong";
  }
  return errors;
};
