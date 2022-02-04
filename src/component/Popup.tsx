import React from 'react';
import "../style/popup.scss"

interface Props {
    show: boolean
}

const Popup: React.FC<Props> = ({
    show,
    children
}) => {

  return <div style={{
    visibility: show ? "visible": "hidden",
    opacity: show ? "1" : "0"
  }} 
  className="visible">{children}</div>;
}

export default Popup;
