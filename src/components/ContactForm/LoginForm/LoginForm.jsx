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

export default LoginForm;