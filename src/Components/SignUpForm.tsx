import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signUpSchema } from '../Utils/validationSchemas.ts';
import { getPasswordStrength } from '../Utils/passwordStrength.ts';

interface SignUpFormProps {
  onSignUp: (email: string, password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signUpSchema}
      onSubmit={(values) => onSignUp(values.email, values.password)}
    >
      {({ values, handleChange }) => (
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
            <Field
              name="password"
              type="password"
              className="w-full p-2 border rounded"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                setPasswordStrength(getPasswordStrength(e.target.value));
              }}
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            <div className={`text-sm mt-2 ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
              Password Strength: {passwordStrength || 'Enter a password'}
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
