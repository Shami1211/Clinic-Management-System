import React from 'react'
import "./AttendenceMember.css"

const SingleAttendenceMember = (props) => {

    const { nic, name, time, possition } = props.attendence
  return (
    <div className='atPadding'>
    <div className='memberAttendence'>
        <p><strong>Member NIC:</strong> {nic}</p>
        <p><strong>Member Name: </strong>{name}</p>
        <p><strong>Time: </strong>{time}</p>
        <p><strong>Possition:</strong> {possition}</p>
    </div>
    </div>
  )
}

export default SingleAttendenceMember