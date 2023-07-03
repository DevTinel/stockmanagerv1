import React, { useState } from "react";
import Input from "../../components/Input/Input";
import "./Register.css";
import { BiCaretDown } from "react-icons/bi";
import Teste from "../ProductMediunPayment/Teste";

const Register = () => {
    const [clicado, setClicado] = useState(null);

    function handleClick(index) {
        if (clicado === index) {
            setClicado(null);
        } else {
            setClicado(index);
        }
    }
    const isItemClicado = (index) => {
        return clicado === index;
    };
    return (
        <section className="container">
            <h1>Cadastre-se no Plano Grátis</h1>
            <div className="container-items">
                <div className="container-cadastro">
                    <form>
                        <div className="form-items">
                            <Input type="text" label="Nome" id="nome" />
                        </div>
                        <div className="form-items">
                            <Input type="email" label="Email" id="email" />
                        </div>
                        <div className="form-items">
                            <Input type="text" label="CPF" id="cpf" />
                        </div>
                        <div className="form-items">
                            <Input
                                type="password"
                                label="Senha"
                                id="password"
                            />
                        </div>
                        <div className="form-items">
                            <Input
                                type="password"
                                label="Confirme sua senha"
                                id="confirmpassword"
                            />
                        </div>
                        <button>Finalizar Cadastro</button>
                    </form>
                </div>

                <div className="container-plano-principal">
                    <p>Plano Escolhido</p>
                    <div>
                        <div className="container-plano">
                            <h3>Grátis</h3>
                            <div>
                                <span onClick={() => handleClick(1)}>
                                    Suporte
                                    <BiCaretDown
                                        style={{ color: "#71baea" }}
                                        className={
                                            isItemClicado(1)
                                                ? "rotate"
                                                : "no-rotate"
                                        }
                                    />
                                </span>
                                {clicado === 1 && (
                                    <p>Suporte em até 24 horas por e-mail</p>
                                )}
                            </div>
                            <div onClick={() => handleClick(2)}>
                                <span>
                                    Produtos
                                    <BiCaretDown
                                        style={{ color: "#71baea" }}
                                        className={
                                            isItemClicado(2)
                                                ? "rotate"
                                                : "no-rotate"
                                        }
                                    />
                                </span>
                                {clicado === 2 && (
                                    <p>Cadastro de até 100 produtos.</p>
                                )}
                            </div>
                            <div>
                                <span onClick={() => handleClick(3)}>
                                    WhatsApp
                                    <BiCaretDown
                                        style={{ color: "red" }}
                                        className={
                                            isItemClicado(3)
                                                ? "rotate"
                                                : "no-rotate"
                                        }
                                    />
                                </span>
                                {clicado === 3 && (
                                    <p>
                                        Näo possui suporte pelo WhatsApp, apenas
                                        pelo email.
                                    </p>
                                )}
                            </div>
                        </div>
                        <Teste />
                        <h4>R$ 0,00</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
