export const getPasswordStrength = (password: string): string => {
    if (password.length < 6) return 'Weak';
    if (/^[A-Za-z]+$/.test(password)) return 'Medium';
    if (/[\d]/.test(password) && /[!@#$%^&*]/.test(password)) return 'Strong';
    return 'Medium';
  };
  