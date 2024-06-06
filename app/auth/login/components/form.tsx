'use client';

import { useFormState } from 'react-dom';

import { login } from '../actions/login';
import { SubmitButton } from './button';

const initialState = {
  message: '',
};

export default function Form() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className="App">
      <form action={formAction} className="form">
        <h2>Login</h2>
        <div className="input">
          <div className="inputBox">
            <label>ایمیل</label>
            <input type="text" name="email" placeholder="example@test.com" />
          </div>
          <div className="inputBox">
            <label>رمز</label>
            <input type="password" name="password" placeholder="*****" />
          </div>

          <div className="my-2 text-red-500">{state?.message}</div>
          <div className="inputBox">
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
}
