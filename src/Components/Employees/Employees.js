import React from 'react';
import './Employees.css';

function Employees() {
  return (
    <>
      <section className="employees" id="o nas">
            <div className="container">
                <h1>Nasi specjaliści</h1>
                <div className="employee-container">
                    <div className="employee-image-round"></div>
                    <div className="employee-description">
                        <h2>Imię Nazwisko [dział]</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Adipisci eum error, quisquam similique sit aut rerum. 
                            Commodi assumenda temporibus laudantium laboriosam! 
                            Fugit expedita impedit doloremque ipsum nisi consequatur 
                            facere esse?
                        </p>
                    </div>
                </div>
                <div className= "employee-container">
                    <div className="employee-image-round"></div>
                    <div className="employee-description">
                        <h2>Imię Nazwisko [dział]</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Adipisci eum error, quisquam similique sit aut rerum. 
                            Commodi assumenda temporibus laudantium laboriosam! 
                            Fugit expedita impedit doloremque ipsum nisi consequatur 
                            facere esse?
                        </p>
                    </div>
                </div>
            </div>   
        </section>
    </>  
  );
}

export default Employees;