import React from 'react';

import { useCounter } from 'counter/hooks/useCounter';

export const Card = () => {
    const { counter } = useCounter();
    return (
        <div
            style={{ border: '2px dotted red', padding: 20, marginBlockEnd: 16 }}
            data-e2e="REMOTE_COMPONENT_INFO"
        >
            Esse é um componente de uma aplicação remota {counter}
        </div>
    )
};

export default Card;
