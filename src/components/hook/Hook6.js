import React, {useState} from "react";


export default function Hook6(){
    const [student, setStudent] = useState({name:"",age:0});
    return(
        <div>
            <h1>Em ten la {student.name}, em nam nay {student.age}</h1>

            <form>
                <input type="text" placeholder="nhap ten" value={student.name} onChange={(e)=>setStudent({...student, name:e.target.value})}></input><br/>
                <input type="number" placeholder="nhap tuoi" value={student.age} onChange={(e)=>setStudent({...student, age:e.target.value})}></input>
            </form>
        </div>
    )
}