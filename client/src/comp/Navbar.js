import {useState} from "react"
import {Link} from 'react-router-dom'
import {ReactComponent as User} from "../img/User.svg"
import {ReactComponent as Logo} from "../img/Logo-black.svg";
import {ReactComponent as Theme} from "../img/Theme.svg"

function Navbar() {
  function changeTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <nav className="w-[80%] m-auto flex justify-between items-center mt-[8px]">
      <div className="logo cursor-pointer">
        <Logo className=""/>
      </div>

      <ul className="links flex items-center">
        <li className='group'>
          <div className="flex shadow-lg dark:shadow-none">
            <input type="text" name="searchBar" id="searchBar" className="w-[260px] bg-[#FFFFFF] rounded-tl-[6px] rounded-bl-[6px] pl-[12px] pt-[5px] pb-[5px] dark:outline-none text-[14px] transition-all transition-duration-[300ms]" placeholder="Search Users..." />
            <button id="searchBtn" className="bg-[#795DDD] pt-[5px] pb-[5px] text-[14px] text-[#FFFFFF] pr-[12px] pl-[12px] rounded-tr-[6px] rounded-br-[6px] transition-all transition-duration-[300ms] font-semibold hover:bg-[#6B15EC]">Search</button>
          </div>
        </li>
        <li>
          <Link to="/dashboard/tiers" className='ml-[45px] font-semibold text-[18px] dark:text-[#ffffff]'>Plans</Link>
        </li>
        <li>
          <Theme className="cursor-pointer ml-[45px] h-[35px] w-[35px]" onClick={changeTheme}/>
        </li>
        <li>
          <User className="cursor-pointer ml-[45px] h-[35px] w-[35px]"/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar