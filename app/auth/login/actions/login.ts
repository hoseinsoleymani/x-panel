export const submitForm = async (formData: FormData) => {
  'use server';

  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const data = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  });

  return data.json();
};
