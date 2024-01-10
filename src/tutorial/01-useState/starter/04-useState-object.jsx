import { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson]= useState({
    name: 'Peter',
    age: 24,
    hobby: 'Read Books'
  })

  const showPerson = () => {
    const newPerson = {
      ...person,
      name: 'John',
      age: 28,
      hobby: 'Scream at The Computer'
    }
    setPerson(newPerson)
   }

  return (
    <div>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Engjoys To: {person.hobby}</h4>
      <button className='btn' type='button' onClick={showPerson}>Show John</button>
    </div>
  );
};

export default UseStateObject;
