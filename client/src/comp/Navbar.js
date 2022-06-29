import {Link} from 'react-router-dom'
import {ReactComponent as User} from "../img/User.svg"
import {ReactComponent as Logo} from "../img/Logo-black.svg"
import {ReactComponent as Theme} from "../img/Theme.svg"

function Navbar() {
  return (
    <nav className="w-[80%] m-auto flex justify-between items-center">
      <div className="logo">
          <Logo />
      </div>

      <ul className="links flex items-center">
        <li>
          <div>
            <input type="text" name="searchBar" id="searchBar" className="w-[260px] bg-[#FFFFFF] rounded-tl-[10px] rounded-bl-[10px] pt-[7.5px] pb-[7.5px] pl-[9px] outline-none"></input>
            <button id="searchBtn" className='h-[40px] rounded-tr-[10px] rounded-br-[10px] bg-[#795DDD] pl-[10px] pr-[10px] text-[#FFFFFF] font-semibold'>Search</button>
          </div>
        </li>
        <li>
          <Link to="/dashboard/tiers" className='ml-[45px] text-[20px] font-semibold text-[#ffffff]'>Plans</Link>
        </li>
        <li>
          <Theme className="cursor-pointer ml-[45px]"/>
        </li>
        <li>
          <User className="cursor-pointer ml-[45px]"/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar