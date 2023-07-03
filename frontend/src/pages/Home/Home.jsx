import React from "react";
import apresentacao from "../../assets/apresentacao.jpg";
import "./Home.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";

const Home = () => {
    return (
        <main>
            <section className="home-section">
                <div className="section-1">
                    <h1>Controle de estoque eficiente para sua empresa</h1>
                    <p>
                        Chega de bagunça no seu estoque, com o
                        <span> Stock Manager </span>
                        você pode organizar tudo de forma simples e rápida.
                        Tenha acesso a todas as informações importantes sobre
                        seus produtos em um só lugar, sem precisar fazer buscas
                        cansativas em papéis ou planilhas. Além disso, você pode
                        acompanhar em tempo real o movimento de entrada e saída
                        de mercadorias, evitando faltas ou excessos. Não perca
                        mais tempo com confusões e erros de estoque. Escolha um
                        estoque online e tenha mais eficiência e agilidade no
                        gerenciamento de seus produtos.
                    </p>
                    <button>
                        <Link to="/register">CADASTRE-SE</Link>
                    </button>
                </div>
                <img src={apresentacao} alt="imagem ilustrativa" />
            </section>

            <section id="planos" className="container-principal">
                <div className="planos-container">
                    <h2>
                        <span> Escolha seu pagamento</span>
                        <br />
                        plano de site mensal
                    </h2>
                    <div className="planos-items">
                        <Cards
                            className="azul"
                            price="GRÁTIS"
                            text="INSCREVA-SE"
                            quantity={100}
                            icon1={<FiCheck />}
                            icon2={<FiCheck />}
                            icon3={<AiFillCloseCircle />}
                            link="register"
                        />
                        <Cards
                            className="verde"
                            price="19,99"
                            text="COMPRE AGORA"
                            quantity={500}
                            icon1={<FiCheck />}
                            icon2={<FiCheck />}
                            icon3={<AiFillCloseCircle />}
                            link="productMediunPayment"
                        />
                        <Cards
                            className="red"
                            price="39,99"
                            text="COMPRE AGORA"
                            quantity={1000}
                            icon1={<FiCheck />}
                            icon2={<FiCheck />}
                            icon3={<FiCheck />}
                            link="productLargePayment"
                        />
                    </div>
                </div>
            </section>

            <section className="sobre-container">
                <h1>Faça mais e melhor com o StockManager </h1>
                <div>
                    <p>
                        O StockManager é importante porque permite aos negócios
                        gerenciar seus estoques de forma eficiente e acessível,
                        24 horas por dia, 7 dias por semana. Isso pode aumentar
                        a eficiência operacional, aumentar a satisfação do
                        cliente e reduzir erros e atrasos na entrega. Além
                        disso, o estoque online fornece informações em tempo
                        real sobre a disponibilidade de itens, permitindo aos
                        negócios tomar decisões informadas sobre compras,
                        produção e vendas. Por fim, o estoque online também
                        permite aos negócios expandir seu alcance e atender a
                        clientes em todo o mundo.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
