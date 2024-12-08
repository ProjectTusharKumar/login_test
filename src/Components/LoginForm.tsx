import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginSchema } from '../Utils/validationSchemas.ts';
import { useLocalStorage } from '../Hooks/useLocalStorage.ts';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [rememberMeEmail, setRememberMeEmail] = useLocalStorage<string>('rememberMeEmail', '');

  return (
    <Formik
      initialValues={{ email: rememberMeEmail || '', password: '', remember: !!rememberMeEmail }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        if (values.remember) setRememberMeEmail(values.email);
        else setRememberMeEmail('');
        onLogin(values.email, values.password);
      }}
    >
      <Form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <Field name="email" type="email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <Field name="password" type="password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4 flex items-center">
          <Field name="remember" type="checkbox" className="mr-2" />
          <label htmlFor="remember" className="text-sm">
            Remember Me
          </label>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
