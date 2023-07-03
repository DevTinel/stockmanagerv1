import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Input from "../../components/Input/Input";
import { BiCaretDown } from "react-icons/bi";
import "./ProductLarge.css";

const ProductLargePayment = () => {
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
    const createOrder = (data, actions) => {
        // Lógica para criar a ordem de pagamento no backend
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "39.99",
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        // Lógica para aprovar o pagamento e finalizar a transação
        return actions.order.capture().then(function (details) {
            // Lógica para lidar com o pagamento aprovado
            console.log("Pagamento aprovado: ", details);
        });
    };

    return (
        <div>
            <section className="container-red">
                <h1>Cadastre-se no Plano Médio</h1>
                <div className="container-items-red">
                    <div className="container-cadastro-red">
                        <p className="dados">Dados</p>
                        <form>
                            <div className="form-items-red">
                                <Input type="text" label="Nome" id="nome" />
                            </div>
                            <div className="form-items-red">
                                <Input type="email" label="Email" id="email" />
                            </div>
                            <div className="form-items-red">
                                <Input type="text" label="CPF" id="cpf" />
                            </div>
                            <div className="form-items-red">
                                <Input
                                    type="password"
                                    label="Senha"
                                    id="password"
                                />
                            </div>
                            <div className="form-items-red">
                                <Input
                                    type="password"
                                    label="Confirme sua senha"
                                    id="confirmpassword"
                                />
                            </div>
                            <div className="pagamento-div-red">
                                <p>Pagamento</p>
                                <PayPalButtons
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                />
                            </div>
                            <button>Finalizar Cadastro</button>
                        </form>
                    </div>

                    <div className="container-plano-principal-red">
                        <p>Plano Escolhido</p>
                        <div>
                            <div className="container-plano-red">
                                <h3>Grande</h3>
                                <div>
                                    <span onClick={() => handleClick(1)}>
                                        Suporte
                                        <BiCaretDown
                                            style={{ color: "#a6284e" }}
                                            className={
                                                isItemClicado(1)
                                                    ? "rotate"
                                                    : "no-rotate"
                                            }
                                        />
                                    </span>
                                    {clicado === 1 && (
                                        <p>
                                            Suporte em até 24 horas por e-mail
                                        </p>
                                    )}
                                </div>
                                <div onClick={() => handleClick(2)}>
                                    <span>
                                        Produtos
                                        <BiCaretDown
                                            style={{ color: "#a6284e" }}
                                            className={
                                                isItemClicado(2)
                                                    ? "rotate"
                                                    : "no-rotate"
                                            }
                                        />
                                    </span>
                                    {clicado === 2 && (
                                        <p>Cadastro de até 1000 produtos.</p>
                                    )}
                                </div>
                                <div>
                                    <span onClick={() => handleClick(3)}>
                                        WhatsApp
                                        <BiCaretDown
                                            style={{ color: "#a6284e" }}
                                            className={
                                                isItemClicado(3)
                                                    ? "rotate"
                                                    : "no-rotate"
                                            }
                                        />
                                    </span>
                                    {clicado === 3 && (
                                        <p>
                                            Possui suporte pelo WhatsApp,
                                            contato direto com o desenvolvidor.
                                        </p>
                                    )}
                                </div>
                            </div>
                            <h4>R$ 39,99</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductLargePayment;
