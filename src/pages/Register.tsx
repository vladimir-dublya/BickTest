import React, { useState, SetStateAction, Dispatch } from 'react';
import { Input } from '../components/Input';
import { ExtendedInput } from '../components/ExtendedInput';
import '../styles/App.css';
import { Obj } from '../types/Obj';

type Props = {
  dataPes: Obj[];
  setDataPes: Dispatch<SetStateAction<Obj[]>>;
};

export const Register: React.FC<Props> = ({ dataPes, setDataPes }) => {
  const [emails, setEmails] = useState([
    {id: 0, value: ''}
  ]);
  const [numbers, setNumbers] = useState([
    {id: 0, value: ''}
  ]);
  const [newObj, setNewObj] = useState<Obj>({
    id: 0,
    name: '',
    lastname: '',
    address: '',
    city: '',
    country: '',
    email: [],
    number: [],
  });

  type Cont = {
    email: object;
    number: object;
  };
  

  const [contacts, setContacts] = useState<Cont>({email: {}, number: {}});

  const handleAddEmail = () => {
    setEmails([...emails, {id: emails.length, value: ''}]);
  };

  const handleAddNumber = () => {
    setNumbers([
      ...numbers,
      {id: numbers.length, value: ''}
    ]);
  };

  const handleSubmit = () => {
    setDataPes([...dataPes, {...newObj, id: Date.now(), email: Object.values(contacts.email), number: Object.values(contacts.number)}]);
    localStorage.setItem('items', JSON.stringify([...dataPes, {...newObj, email: Object.values(contacts.email), number: Object.values(contacts.number)}]));
    console.log(dataPes);
  };
  return (
    <div className='Reg mt-6'>
      <Input title='Name' newObj={newObj} setNewObj={setNewObj} />
      <Input title='Last Name' newObj={newObj} setNewObj={setNewObj} />
      <Input title='Address' newObj={newObj} setNewObj={setNewObj} />
      <Input title='City' newObj={newObj} setNewObj={setNewObj} />
      <Input title='Country' newObj={newObj} setNewObj={setNewObj} />
      <div>
        <h1>
          <strong>Email:</strong>
        </h1>
        {emails.map((email) => (
          <ExtendedInput key={email.id} id={email.id} title='Email' contacts={contacts} setContacts={setContacts} />
        ))}
        <button onClick={handleAddEmail} className='button is-info'>
          Add
        </button>
        <h1>
          <strong>Number:</strong>
        </h1>
        {numbers.map((number) => (
          <ExtendedInput key={number.id} id={number.id} title='Number' contacts={contacts} setContacts={setContacts}/>
        ))}
        <button onClick={handleAddNumber} className='button is-info'>
          Add
        </button>
        <button onClick={handleSubmit} className='button is-info'>
          Save
        </button>
      </div>
    </div>
  );
};
