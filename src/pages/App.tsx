import React, { SetStateAction, Dispatch, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import 'bulma/css/bulma.min.css';
import { Obj } from '../types/Obj';


type Props = {
  dataPes: Obj[];
  setDataPes: Dispatch<SetStateAction<Obj[]>>;
};

export const App: React.FC<Props> = ({ dataPes, setDataPes }) => {
  useEffect(() => {
    setDataPes(JSON.parse(localStorage.getItem('items') || '[]'));
  }, []);

  return (
    <div className='App'>
      <div>
        <div className='header_container block mt-6'>
          <strong>Contact</strong>
          <Link to='/register' className='button is-info'>
            Add Contact
          </Link>
        </div>
        <table className='table is-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataPes.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.lastname}</td>
                  <td>{data.address}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                  <td>{data.email.join(', ')}</td>
                  <td>{data.number.join(', ')}</td>
                  <td>
                    <div className='buttons'>
                      <button className='button is-success'>Edit</button>
                    </div>
                  </td>
                  <td>
                    <div className='buttons'>
                      <button
                        onClick={() => {
                          setDataPes(dataPes.filter((item) => item !== data));
                          localStorage.setItem(
                            'items',
                            JSON.stringify(
                              dataPes.filter((item) => item !== data),
                            ),
                          );
                        }}
                        className='button is-danger'
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
