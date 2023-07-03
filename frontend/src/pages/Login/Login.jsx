import React from "react";
import "./Login.css";
import login from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="container-login">
            <div className="login-itens">
                <img className="login-img" src={login} alt="imagem login" />
                <div className="inputs-login">
                    <h1>LOGIN</h1>
                    <form>
                        <div className="inputs-container">
                            <label htmlFor="user">Usuário</label>
                            <input
                                type="text"
                                id="user"
                                placeholder="@email.com"
                            />
                        </div>
                        <div className="inputs-container">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="***********"
                            />
                        </div>

                        <div className="extras">
                            <div className="checkbox-input">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link className="forgetpass" to="/">
                                Esqueceu a Senha?
                            </Link>
                        </div>
                        <button>ENTRAR</button>
                        <p>
                            Não possui uma conta?
                            <Link to="/register" className="link-register">
                                Cadastre-se
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
