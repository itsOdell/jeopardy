import Modal from "./Modal"

import {useContext, Fragment} from 'react'
import {modalContext} from "../helper/modalContext"
import { useEffect } from "react"

function Cat({one, two, three, four, five, part}) {
  let {modal, setModal} = useContext(modalContext)
  function clickHandler(event) {
    let clickedElement = event.target;
    let answer = eval(clickedElement.id).answer;
    let question = eval(clickedElement.id).question;
    
    setModal({...modal, answer, question, show: true});
  }

  return (
    <Fragment>
          <div className="grid grid-cols-6 w-full items-center">
            <h1 className="text-center font-semibold text-[20px] overflow-x-scroll border-[2px] h-full flex justify-center items-center">{part}</h1>
            <div className="cursor-pointer pt-[21px] pb-[21px] border-[2px] text-[20px] font-semibold flex justify-center items-center" id="one" onClick={clickHandler}>{one.value || 10}</div>
            <div className="cursor-pointer pt-[21px] pb-[21px] border-[2px] text-[20px] font-semibold flex justify-center items-center" id="two" onClick={clickHandler}>{two.value || 20}</div>
            <div className="cursor-pointer pt-[21px] pb-[21px] border-[2px] text-[20px] font-semibold flex justify-center items-center" id="three" onClick={clickHandler}>{three.value || 30}</div>
            <div className="cursor-pointer pt-[21px] pb-[21px] border-[2px] text-[20px] font-semibold flex justify-center items-center" id="four" onClick={clickHandler}>{four.value || 40}</div>
            <div className="cursor-pointer pt-[21px] pb-[21px] border-[2px] text-[20px] font-semibold flex justify-center items-center" id="five" onClick={clickHandler}>{five.value || 50}</div>
          {modal.show ? <Modal question={modal.question} answer={modal.answer}/> : ""}
          </div>
    </Fragment>
  )
}

export default Cat