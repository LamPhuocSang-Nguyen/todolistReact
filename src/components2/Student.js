import React, { useState } from 'react'
import { Button, ListGroupItem, Input } from 'reactstrap'

export default function Student(props) {
  const [isEdit, setIsEdit] = useState(false)
  const { student, deleteById, reChecked, rename } = props
  const [text, setText]=useState(student.name)
  return (
    <ListGroupItem className='student-item'>
      <Input type="checkbox" checked={student.Checked} onChange={() => reChecked(student.id)}></Input>
      <div className={student.Checked ? "student-name active" : "student-name"} onClick={() => reChecked(student.id)}>
        {
          !isEdit ? <p onDoubleClick={() => setIsEdit(true)}>{student.name}</p> :
            <Input value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
              if(e.key=='Enter'){
                setIsEdit(false);
                rename(student.id,text);
              }
            }}></Input>
        }
      </div>
      <Button className='btn-danger' onClick={() => deleteById(student.id)}><i className='fa-solid fa-close'></i></Button>
    </ListGroupItem>
  )
}
