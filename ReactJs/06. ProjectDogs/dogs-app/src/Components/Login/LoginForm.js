import React from "react";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import Input from '../Forms/Input'
function LoginForm() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const fetchData = async () => {
            const response = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username,password})
            })
            const json = await response.json();
            console.log(json)
        }
        fetchData();
    }
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username"/>
                <Input label="Senha" type="password" name="password"/>
                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    );
}

export default LoginForm;