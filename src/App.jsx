import React from 'react'
import { useState } from 'react'
import data from './Studentdata'
import StudentsCard from './StudentsCard'

function App() {
  const [students, setStudents] = useState(data);

  let showAll = ()=>{
      let stud = data.filter((studi) => studi.marks > 39);
      setStudents(stud);
  }
  let showAll1 = ()=>{
      let stud = data.filter((studi) => studi.marks < 40);
      setStudents(stud);
  }
  let showAll2 = ()=>{
      let stud = data.filter((studi) => studi.marks > 0);
      setStudents(stud);
  }
  
  const AllStudents = students.length;
  const passStudents = students.filter((stu)=> stu.marks > 39).length;
  const failStudents = students.filter((stu)=>stu.marks <40).length;

  return (
    <div>

      <header>
        <h1>Welcome...</h1>
        <h1>Students Dashboard...</h1>
      </header>

      <section>
        <div>
          <h1>Total Number Of Students : {AllStudents}</h1>
        </div>
        <div>
          <h1>Number of passed Students : {passStudents}</h1>
        </div>
        <div>
          <h1>Number of FailStudents : {failStudents}</h1>
        </div>
      </section>

      <section>
        {students.map((Student)=>{
          return(
          <StudentsCard  Student={Student}  onToggle={showAll} onToggle1={showAll1} onToggle2={showAll2}/>
          )
        })}
      </section>
    </div>
  )
}

export default App