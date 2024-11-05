import { useId } from 'react';

const LoginForm = () => {

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        console.log(form);
        const { login, password } = form.elements;


        console.log(login, password);// посилання на дом елементи

        console.log(login.value, password.value)// значення полів

        form.reset(); // скидаємо значення полів після відправки

     };

     return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
     )
}

export const MyComponent = () => {
     const id = useId();

     return (
        <div>
            <label htmlFor={id}>Text field label</label>
            <input type="text" id={id} />
        </div>
     );
};

export default LoginForm;

export const LoginFormThird = () => {
    const loginId = useId();
    const passwordId = useId();
  
    return (
      <form>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} />
  
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} />
  
        <button type="submit">Login</button>
      </form>
    );
  };
  