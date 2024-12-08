# Login Test Documentation

## Project Structure
react-formik-app/
├── public/
├── src/
│   ├── Components/
│   │   ├── SignUpForm.tsx
│   │   ├── LoginForm.tsx
|   |   ├── Profile.tsx
|   |   ├── SignUpForm.tsx
├── CV/
│   ├── Tushar_Resume_page-0001.jpg
├── Hooks/
│   │   ├── useLocalStorage.ts
├── Styles/
│   │   ├── tailwind.css
├── Utils/
│   │   ├── passwordStrength.ts
│   │   ├── validationSchemas.ts
│   ├── App.tsx
│   ├── index.tsx
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── README.md

## Test Files Overview

### login.test.js
Contains test suites for:
- Form validation
- Input field behavior
- Submit functionality
- Error handling
- Authentication flow

### login.test.utils.js 
Contains:
- Mock user data
- Test helper functions
- Custom test renderers

## Running Tests

To run the login tests:
```bash
npm start
