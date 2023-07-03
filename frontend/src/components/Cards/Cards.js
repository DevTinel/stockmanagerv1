import React from "react";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({
    price,
    text,
    quantity,
    className,
    icon1,
    icon2,
    icon3,
    link,
}) => {
    return (
        <div className="planos-items">
            <div className={`wrapper-items ${className}`}>
                <div className={`${className} items`}>
                    <h3>
                        <span>
                            <BiDollar />
                        </span>
                        {price}
                    </h3>
                </div>
                <ul>
                    <li>{icon1} Suporte</li>
                    <li>
                        {icon2} {quantity} produtos
                    </li>

                    <li>
                        {icon3} WhatsApp do desenvolvedor
                        <br />
                        tirar para dúvidas
                    </li>
                </ul>
                <Link to={`/${link}`}>{text}</Link>
            </div>
        </div>
    );
};

export default Cards;
