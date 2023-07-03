import React from "react";

const Input = ({ label, type, id }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
        </div>
    );
};

export default Input;
