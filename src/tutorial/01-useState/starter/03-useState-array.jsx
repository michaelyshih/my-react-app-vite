import { isObjectLiteralElementLike, isOptionalChain } from 'typescript';
import {data, people} from '../../../data'
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((person) =>  person.id !== id )
    setPeople(newPeople)
   }

  const clearAllitems = () => {
    setPeople([])
   }

   return (
    <div>
      {people.map(({id,name}) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id) }>remove</button>
          </div>
        )
       })}
       <button type='button' className='btn' style={{marginTop: '2rem'}} onClick={clearAllitems}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
