import React, { useEffect } from 'react';
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

  const handleKeyPress = (e: KeyboardEvent) => {
    //@ts-ignore
    if (e.code === "Escape") setShow(show = false);
    //@ts-ignore
    if (e.code === "Enter") e.preventDefault();
  };
useEffect(() => {
    console.log("mounted game");
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      console.log("unmounted game");
    };
  }, []);

  /* const escapePopup = (event: KeyboardEvent) => {
    if (event.key === "Escape") setShow(show = false)
  } */

  return <div 
          className={!show ?"visible hidden" : "visible"}
          /* tabIndex={0} 
          onKeyPress={escapePopup} */>
            <div className="visible__background" onClick={closePopup} ></div>
            {children}
        </div>;
}

export default Popup;
