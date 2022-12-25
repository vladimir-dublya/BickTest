import React, { SetStateAction, Dispatch } from 'react';
import '../styles/App.css';
import { Obj } from '../types/Obj';

type Props = {
  title: string;
  newObj: Obj;
  setNewObj: Dispatch<SetStateAction<Obj>>;
};

export const Input: React.FC<Props> = ({ title, newObj, setNewObj }) => {
  const lowerTitle = title.toLowerCase().split(' ').join('');
  return (
    <div className='field Reg_input'>
      <label className='label'>{title}:</label>
      <div className='control'>
        <input
          onChange={(event) =>
            setNewObj({ ...newObj, [lowerTitle]: event.target.value })
          }
          className='input'
          type='text'
          placeholder={`Enter ${title}`}
        />
      </div>
    </div>
  );
};
