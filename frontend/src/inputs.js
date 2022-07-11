const inputs = [
  {
    id: 1,
    name: "code",
    type: "text",
    placeholder: "Validation Code",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Oops, please provide a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 3,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 4,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    id: 5,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
  },
  {
    id: 6,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: "^[A-Za-z0-9]{8,16}$",
    required: true,
  },
  {
    id: 7,
    name: "passwordRepeat",
    type: "password",
    placeholder: "Repeat Password",
  },
];

export default inputs;
