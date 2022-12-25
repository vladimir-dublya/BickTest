import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import '../styles/App.css';

type Cont = {
  email: object;
  number: object;
};

type Props = {
  id: number;
  title: string;
  contacts: Cont;
  setContacts: Dispatch<SetStateAction<Cont>>;
};

export const ExtendedInput: React.FC<Props> = ({
  id,
  title,
  contacts,
  setContacts,
}) => {
  const lowerTitle = title === 'Email' ? 'email' : 'number';
  
  useEffect(() => {
    setContacts({...contacts, [lowerTitle]: {...contacts[lowerTitle], [id]: ''}});
  }, []);

  return (
    <div className='field Reg_input'>
      <div className='control'>
        <input
          onChange={(event) => {
            setContacts({...contacts, [lowerTitle]: {...contacts[lowerTitle], [id]: event.target.value}});
            console.log(contacts);
          }}
          className='input'
          type='text'
          placeholder={`Enter the ${title}`}
        />
      </div>
    </div>
  );
};
