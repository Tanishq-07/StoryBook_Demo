import React from 'react'
import './MyButton.css'

export const MyButton = ({ primary, backgroundColor,color, size="small", label="Button",onClickFunction,...props }) => {

  const mode = primary ? 'MyButton--primary' : 'MyButton--secondary';
  
  return (
    <button
      type="button"
      className={['MyButton', `MyButton--${size}`, mode].join(' ')}
      style={{ backgroundColor,color }}
      onClick={onClickFunction}
      {...props}

    >
      {label}
    </button>
  );
};

export default MyButton
