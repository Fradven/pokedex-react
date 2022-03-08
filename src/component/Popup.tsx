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

  //close popup
  const closePopup = () => {
    setShow(show = false)
  }

  /**
   * detect key press and handle key element
   * @param e 
   */
  const handleKeyPress = (e: KeyboardEvent) => {
    //@ts-ignore
    if (e.code === "Escape") setShow(show = false); //on "Escape" close the popup
    //@ts-ignore
    if (e.code === "Enter") e.preventDefault(); // prevent "Enter" from opening and closing Individual page
  };

  //activate handleKeyPress() 
  useEffect(() => {
    console.log("mounted game");
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      console.log("unmounted game");
    };
  }, []);

  return <div 
          className={!show ?"visible hidden" : "visible"}>
            <div className="visible__background" onClick={closePopup} ></div>
            {children}
        </div>;
}

export default Popup;
