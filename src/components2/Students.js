import React, {useState} from "react";
import {Container, ListGroup} from 'reactstrap';
import Student from "../components2/Student.js"
import Add from "../components2/Add.js"
import Footer from "../components2/Footer.js";

export default function Students(){
    const [flag,setFlag] = useState("");
    const [checkAll,setCheckAll] = useState(false);
    const [list, setList] = useState([
        {
            id:1,
            name: "le Meo",
            Checked:true
        },
        {
            id:2,
            name: "le Tho",
            Checked:true
        },
        {
            id:3,
            name: "le nai",
            Checked:false
        },
        {
            id:4,
            name: "le Ho",
            Checked:false
        }
    ]);

    if(localStorage.getItem("list")){
        setList(JSON.parse(localStorage.getItem("list")));
    }

    const deleteById = (id)=>{
        const newList=list.filter(stud=>stud.id!==id)
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }

    const reChecked = (id)=>{
        const newList = list.map(stud=>stud.id===id?{...stud,Checked:!stud.Checked}:stud);
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }
    
    const rename = (id, name)=>{
        let newList=list.map(stud=>stud.id===id?{...stud, name:name}:stud);
        setList(newList) //list = newList
        localStorage.setItem("list", JSON.stringify(newList));
    }

    //still not localstorege
    const addNewStudent = (text)=>{
        setList([...list,{id:list.length+1, name:text, Checked:false}])
    }

    const filterStudents=(list, flag)=>{
        if(flag == "CHECK"){
            return list.filter(stud=>stud.Checked)
        }
        else if(flag == "NOCHECK"){
            return list.filter(stud=>!stud.Checked)
        }
        else if(flag == "DELETEALL"){
            setList(list.filter(stu=>stu.Checked==false))
            localStorage.setItem("list",JSON.stringify(list.filter(stu=>stu.Checked==false)))
            setFlag("")
        }
        else if(flag == "CHECKALL"){
            setList(list.map(student=>({...student, Checked:!checkAll})))
            localStorage.setItem("list",JSON.stringify(list.map(student=>({...student, Checked:!checkAll}))))
            setCheckAll(!checkAll);
            setFlag("")
        }

        return list;
    }

    return(
        <div>
            <Container className='w-50 text-center p-5 my-5'>
                <h1 className="title">Student list</h1>
                <Add addNewStudent={addNewStudent}/>
                <ListGroup>
                    {
                        filterStudents(list,flag).map((stud, index)=>(
                        <Student key={index} 
                        student={stud} 
                        deleteById={deleteById}
                        reChecked={reChecked}
                        rename={rename}
                        />
                    ))
                    }
                </ListGroup>
                <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll}/>
            </Container>
        </div>
    )
}