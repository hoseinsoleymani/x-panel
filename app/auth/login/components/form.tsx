export default function Form() {
  // const data = await fetch('http://localhost:3000/api/login', {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   body: JSON.stringify({
  //     email: 'ffffffffffff@gmail.com',
  //     password: '123456',
  //   }),
  //   headers: { 'Content-Type': 'application/json' },
  //   cache: 'no-cache',
  // });


  return (
    <div className="App">
      <div className="form">
        <h2>Login</h2>
        <div className="input">
          <div className="inputBox">
            <label>ایمیل</label>
            <input type="text" name="" placeholder="example@test.com" />
          </div>
          <div className="inputBox">
            <label>رمز</label>
            <input type="password" name="" placeholder="*****" />
          </div>
          <div className="inputBox">
            <input type="submit" name="" value="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
}
