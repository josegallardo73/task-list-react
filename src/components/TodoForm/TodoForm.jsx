import React, { useState } from 'react';

const TodoForm = ({onCreate}) => {

    const [userInput, setUserInput] = useState('Hola');

    const changeValue = (e) => {
        setUserInput(e.currentTarget.value); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== '') onCreate(userInput);
        setUserInput('');

    }

  return (
    <div style = {{margin: 20}}>
      <form onSubmit = {handleSubmit}>
        <input onChange={changeValue} value={userInput} type="text" placeholder='Introduce una nueva tarea'/>
        <button style = {{marginLeft: 5}}>Agregar</button>
      </form>
    </div>
  )
}

export { TodoForm }
