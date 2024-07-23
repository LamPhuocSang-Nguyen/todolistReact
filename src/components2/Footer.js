import React from 'react'
import { Button, Input } from 'reactstrap'

export default function Footer(props) {
    const {setFlag, checkAll} = props
  return (
    <div className='my-3'>
        <Input type='checkbox' checked={checkAll} onChange={()=>setFlag("CHECKALL")}></Input>
        <Button className='btn-success ms-1' onClick={()=>setFlag("CHECK")}>filter check</Button>
        <Button className='btn-success ms-1' onClick={()=>setFlag("NOCHECK")}>filter no check</Button>
        <Button className='btn-success ms-1' onClick={()=>setFlag("")}>clear filter</Button>
        <Button className='btn-success ms-1' onClick={()=>setFlag("DELETEALL")}>Delete All</Button>
    </div>
  )
}
