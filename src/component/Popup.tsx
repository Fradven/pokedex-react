import React from 'react';
import "../style/popup.scss"

interface Props {
    show: boolean
}

const Popup: React.FC<Props> = ({
    show,
    children
}) => {

  return <div 
  className={!show ?"visible hidden" : "visible"}>{children}</div>;
}

export default Popup;
