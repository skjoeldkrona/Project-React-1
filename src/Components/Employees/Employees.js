import React from 'react';
import AboutEmployee from './AboutEmployee';
import './Employees.css';

const employees = [
    {
        name: 'Ania',
        desc: 'Ania, Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum error, quisquam similique sit aut rerum.',
        img: 'https://picsum.photos/200/300'
    },

    {
        name: 'Radek',
        desc: 'Radek, Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum error, quisquam similique sit aut rerum.',
        img: 'https://picsum.photos/200/300',
    },

    {
        name: 'Ewa',
        desc: 'Ewa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum error, quisquam similique sit aut rerum.',
        img: 'https://picsum.photos/200/300'
    }
]

function Employees() {
  return (
    <>
      <section className="employees" id="o nas">
            <div className="container">
                <h1>Nasi specjaliści</h1>
                {employees.map(employee => {
                    return <AboutEmployee name={employee.name} desc={employee.desc} img={employee.img}></AboutEmployee>
                })}
            </div>   
        </section>
    </>  
  );
}

export default Employees;