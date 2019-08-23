import React, { useState } from 'react';

function Example() {
    // Declara una nueva variable de estado, la cual llamaremos “count”
    const [count, setCount] = useState(0);
    const [nombre, setNombre] = useState('Hola');

    function ejecutar(){
        setCount(count + 1)
        setNombre(`${ nombre } Francisco`)
    }
  
    return (
      <div>
        <p>You clicked {count} times, { nombre }</p>
        <button onClick={() => ejecutar() }>
          Click me
        </button>
      </div>
    );
  }

  export default Example;