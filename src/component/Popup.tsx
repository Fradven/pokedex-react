import React from 'react';

interface Props {
    show: boolean
}

const Popup: React.FC<Props> = ({
    show,
    children
}) => {

  return <div className={show ? "hidden" : "show"}>{children}</div>;
}

export default Popup;
