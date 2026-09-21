import React from 'react'

function StudentsCard({Student, onToggle, onToggle1, onToggle2}) {
  const {name, rollNo, branch, marks, attendance} = Student;
  // const pass = Student.marks;
  return (
    <div className="Profile_card">
        <br /><br />
        <h1>Student profile</h1>
        <h1>Student Name : {name}</h1>
        <h2>Student RollNo : {rollNo}</h2>
        <h2>Branch : {branch}</h2>
        <h2>Marks : {marks}</h2>
        <h2>Attendance : {attendance}</h2>
        {(Student.marks > 39) ? (<p>Status : "PASS"</p>) : (<p>Status : "Fail"</p>)}
        <button onClick={()=>{onToggle()}}>Show All Passed Students</button>
        <br />
        <button onClick={()=>{onToggle1()}}>Show All Fail Students</button>
        <br />
        <button onClick={()=>{onToggle2()}}>Show All Students</button>
        <br /><br />
    </div>
  )
}

export default StudentsCard