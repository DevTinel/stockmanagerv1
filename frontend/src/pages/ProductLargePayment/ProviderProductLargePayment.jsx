import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProductLargePayment from "./ProductLargePayment";

const ProviderProductLargePayment = () => {
    return (
        <div>
            <PayPalScriptProvider
                options={{
                    "client-id":
                        "Ac8sRabS8VkG6gWiMu-0srE3f7PPQEHfr3l5RLpaXTye_s43RmeMGSQoNSHWY-U7vjviQaoyvV9M6LCO",
                }}
            >
                <ProductLargePayment />
            </PayPalScriptProvider>
        </div>
    );
};

export default ProviderProductLargePayment;
