// import React from 'react'
import {Link} from "react-router-dom"
import {ReactComponent as Jeopardy} from "../img/jeopardy.svg"

function Main() {
  return (
    <main className="h-[90vh] flex items-center overflow-hidden text-[20px] ">
        <div className="w-[95%] flex justify-around items-center m-auto flex-wrap overflow-hidden">

            <div className="flex flex-col items-start justify-between w-[450px] p-4 rounded-xl break-words">
                <h1 className="text-[44px] font-semibold tracking-[1px] mt-[10px] mb-3 leading-[1.3]">Create a fun free Jeopardy</h1>
                <p className="text-[18px] font-semibold mb-5">
                With our amazing website, you can create flawless, performant, Stylish and fun Jeopardies while also learning and having fun at the same time!
                </p>
                <Link to="/create" className="w-full m-auto pt-[6px] pb-[6px] font-semibold rounded-xl mb-[10px] bg-[#6b63ffc6] text-white text-center transition-all _shadow">Create a jeopardy</Link>
            </div>

            <div className="">
                <Jeopardy style={{maxWidth: "716px", maxHeight: "341px", width: "655px", paddingLeft: "7px", paddingRight:  "25px", paddingBottom: "30px"}} />
            </div>
        </div>
    </main>
  )
}

export default Main