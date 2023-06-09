import React from 'react';

// import Box from 'counter/Box'

// Module Federation - importing this from application 2
import { useCounter } from 'counter/hooks/useCounter';

const Box = React.lazy(() =>
  import("counter/Box").then((module) => {
    return {
      default: module.Box,
    };
  })
);

const Card = React.lazy(() =>
  import("remote/Card").then((module) => {
    return {
      default: module.Card,
    };
  })
);
const Button = React.lazy(() =>
  import("remote/Button").then((module) => {
    return {
      default: module.Button,
    };
  })
);

export function View() {
  const { addCounter, counter } = useCounter();
  return (
    <header className="App-header">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Box>
          <div>
            {counter}
          </div>
          <div style={{ margin: 20  }}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <>
                <Card />
                <Button onClick={addCounter}>Adicionar</Button>
              </>

            </React.Suspense>
          </div>
        </Box>
      </React.Suspense>
    </header>
  )
}