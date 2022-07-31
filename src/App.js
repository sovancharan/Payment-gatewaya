// import { useEffect } from 'react';
// import { PayPalButtons } from '@paypal/react-paypal-js';

// // This values are the props in the UI
import React from 'react';
import ReactDOM from 'react-dom';
let PayPalButton = paypal.Buttons.driver('react', {
    React: window.React,
    ReactDOM: window.ReactDOM,
});

function App() {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '0.01',
                    },
                },
            ],
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture();
    };
    return (
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    );
}
export default App;
