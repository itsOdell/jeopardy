import React, {useRef, useContext} from 'react'
import {modalContext} from '../helper/modalContext'

function Modal({question, answer}) {
    let qa = useRef();
    let {modal, setModal} = useContext(modalContext);


    function showAnswer() {
      qa.current.textContent = "answer: "+answer;
    }

  return (
    <div className="fixed w-[550px] h-[350px] z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border-[2px] rounded-[6px] p-4 cursor-pointer bg-white">
        <p className="absolute text-black right-4 text-[30px] top-0" onClick={() => {setModal({...modal, show: false})}}>x</p>
        <div className="cursor-default text-black mt-6 text-[24px] font-semibold tracking-[1px] break-words h-[235px] overflow-y-scroll" ref={qa}>
            {"question: "+question}
        </div>
        <button className="w-full bg-[#6C63FF] mt-5 pt-1 pb-1 text-[20px] font-semibold rounded-[6px] text-white z-10" onClick={showAnswer}>Show</button>
    </div>
  )
}

export default Modal