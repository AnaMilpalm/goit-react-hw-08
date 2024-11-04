const LoginFormSecond = ({ onLogin }) => {
    const handleLogin = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        onLogin({
            login:login.value,
            password:password.value,
        });
        form.reset();
    };
    return (
        <form onSubmit={handleLogin}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Login</button>
        </form>
    )
}
export default LoginFormSecond;