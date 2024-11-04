const ContactForm = () => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="login" />
            <input type="password" name="password" />
            <button type="submit">Log in</button>
        </form>
    );

};

export default ContactForm;