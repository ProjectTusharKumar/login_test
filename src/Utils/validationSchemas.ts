import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});

export const signUpSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
});
