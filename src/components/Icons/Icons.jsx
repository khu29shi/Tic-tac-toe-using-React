import { FaPen } from "react-icons/fa";
import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Icons = ({name}) => {
  if(name === "circle")
    return <FaRegCircle/>
    else if(name === "cross")
        return <RxCross2/>
        else
        return <FaPen/>
}

export default Icons
