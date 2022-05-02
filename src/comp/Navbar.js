// import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../img/logo.svg";

function Navbar() {
  return (
    <nav className="w-full pt-6">
      <div className="w-[85%] flex justify-between items-center m-auto flex-wrap">

        <div className="flex items-center cursor-pointer">
          <Logo />
          <p className="ml-2 font-semibold text-[18px]">Jeopardy</p>
        </div>

          <div>
            <Link to="/create" className="pt-2 pb-2 pr-5 pl-5 _shadow bg-[#6b63ffc6] transition-all text-white rounded-xl font-semibold text-[15px] text-center">Create a quiz</Link>
          </div>

      </div>
    </nav>
  )
}

export default Navbar