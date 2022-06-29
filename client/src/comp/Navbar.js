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
            <input type="text" name="searchBar" id="searchBar" className="w-[260px] bg-[#FFFFFF] rounded-tl-[10px] rounded-bl-[10px] pl-[9px] pt-[5px] pb-[5px] outline-none text-[15px]" />
            <button id="searchBtn" className="bg-[#795DDD] pt-[5px] pb-[5px] text-[15px] text-[#FFFFFF] pr-[9px] pl-[4px] rounded-tr-[10px] rounded-br-[10px]">Search</button>
          </div>
        </li>
        <li>
          <Link to="/dashboard/tiers" className='ml-[45px] font-semibold text-[18px] text-[#ffffff]'>Plans</Link>
        </li>
        <li>
          <Theme className="cursor-pointer ml-[45px] h-[35px] w-[35px]"/>
        </li>
        <li>
          <User className="cursor-pointer ml-[45px] h-[35px] w-[35px]"/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar