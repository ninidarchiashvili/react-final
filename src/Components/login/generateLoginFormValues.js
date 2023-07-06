export const generateLoginFormValues = () => {
    return{
        email: {
            value: "",
            required: true,
            error: null,
            validateInput: (email) =>
            email.includes("@gmail.com") ? "" : "email is not valid"
        },
        password: {
            value: "",
            required: true,
            error: null,
            validateInput: (password) =>
            password.length > 6 ? "" : "password should have at 6 characters"
        },
    };
};

// import { validateEmail } from "validator"
// export const generateLoginFormValues = () => {
//   return {
//     email: {
//       value: "",
//       required: true,
//       error: null,
//       validateInput: (email) =>
//         validateEmail(email) ? "" : "email is not valid",
//     },
//     password: {
//       value: "",
//       required: true,
//       error: null,
//       validateInput: (password) => {
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^*]).{8,}$/;
//         return passwordRegex.test(password) ? "" : "password is not correctly written";
//       },
//     },
//   };
// };