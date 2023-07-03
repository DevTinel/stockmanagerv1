import React from "react";
import Input from "../../components/Input/Input";

const User = () => {
    return (
        <section>
            <div>
                <Input
                    type="file"
                    id="image-product"
                    label="Imagem do Produto"
                />
            </div>
            <div>
                <Input type="text" id="referencia" label="referencia" />
                <Input type="color" id="color" label="Cor" />
            </div>
        </section>
    );
};

export default User;
