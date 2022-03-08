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

  const escapePopup = (event: { keyCode: number; }) => {
    if (event.keyCode === 27) setShow(show = false)
  }

  return <div 
          className={!show ?"visible hidden" : "visible"}
          tabIndex={0} 
          onKeyPress={escapePopup}>
            <div className="visible__background" onClick={closePopup} ></div>
            {children}
        </div>;
}

export default Popup;
