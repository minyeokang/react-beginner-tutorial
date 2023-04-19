import React, { useState } from 'react'
interface Props {
    children: string;
    onClick: ()=> void;
    color?: 'primary' | 'secondary' | 'danger'
}
const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button type='button' className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button

/** limitating type 
 * ex) color?: 'primary' | 'secondary' | 'danger' 
 */