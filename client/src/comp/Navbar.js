import {useState, useRef} from "react"
import {Link} from 'react-router-dom'
import {ReactComponent as User} from "../img/User.svg"
import {ReactComponent as Logo} from "../img/Logo-black.svg";
import {ReactComponent as Theme} from "../img/Theme.svg"
import {domain} from "../App"

function Navbar() {
  let themeBtn = useRef();

  function changeTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeBtn.current.classList.add("fa-sun");
      themeBtn.current.classList.remove("ml-[2px]", "mt-[2px]");
    } else {
      themeBtn.current.classList.remove("fa-sun")
    }
  }


  return (
    <nav className="w-[80%] m-auto flex justify-between items-center mt-[8px]">
      <div className="logo cursor-pointer">
        <Logo />
      </div>

      <ul className="links flex items-center">
        <li className='group'>
          <div className="flex shadow-lg dark:shadow-none rounded-tl-[6px] rounded-bl-[6px]">
            <input type="text" name="searchBar" id="searchBar" className="w-[260px] bg-[#FFFFFF] rounded-tl-[6px] rounded-bl-[6px] pl-[12px] pt-[5px] pb-[5px] dark:border-none border-[1px] border-t-[#e1e1e1] border-l-[#e1e1e1] border-b-[#e1e1e1] border-r-none outline-none text-[14px] transition-all transition-duration-[300ms]" placeholder="Search Users..." />
            <button id="searchBtn" className="bg-[#795DDD] pt-[5px] pb-[5px] text-[14px] text-[#FFFFFF] pr-[12px] pl-[12px] rounded-tr-[6px] rounded-br-[6px] transition-all transition-duration-[300ms] font-semibold hover:bg-[#6B15EC]">Search</button>
          </div>
        </li>
        <li>
          <Link to="/dashboard/tiers" className='ml-[45px] font-semibold text-[18px] dark:text-[#ffffff] hover:underline underline-offset-[6px]'>Plans</Link>
        </li>
        <li>
          {/* <Theme className="cursor-pointer ml-[45px] h-[35px] w-[35px]" onClick={changeTheme}/> */}
          <div className="cursor-pointer w-[35px] h-[35px] bg-[#795DDD] transition-all transition-duration-[300ms] hover:bg-[#6B15EC] ml-[45px] rounded-full flex justify-center items-center" onClick={changeTheme}>
            <i className="fa-solid fa-moon text-white ml-[2px] mt-[2px]" ref={themeBtn}></i>
          </div>
        </li>
        <li>
          {/* <User className="cursor-pointer ml-[45px] h-[35px] w-[35px]"/> */}
          <Link to="/dashboard/login" className="fa-solid fa-circle-user cursor-pointer ml-[45px] text-[35px] text-[#795DDD] hover:text-[#6B15EC] transition-duration-[300ms] transition-all"></Link>
        </li>
        <li className="z-[-999] w-[30px] h-[30px] bg-white ml-[-33px] rounded-full"></li>
      </ul>
    </nav>
  )
}

export default Navbar