import { submitForm } from '../actions/login';
import { SubmitButton } from './button';

export default function Form() {
  return (
    <div className="App">
      <form action={submitForm} className="form">
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
          <div className="inputBox">
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
}
