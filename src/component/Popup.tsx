import React from 'react';
import "../style/popup.scss"

interface Props {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup: React.FC<Props> = ({
    show,
    setShow,
    children
}) => {

  const closePopup = () => {
    setShow(!show)
  }

  return <div 
  className={!show ?"visible hidden" : "visible"} >
    <div className="visible__background" onClick={closePopup} ></div>
    {children}
    </div>;
}

export default Popup;
