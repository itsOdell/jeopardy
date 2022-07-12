import {useState} from 'react'
import {Link} from "react-router-dom"

function SideNavContent({closed}) {
    let [input, setInput] = useState("")
  return (
    <div className={`mt-[4rem] text-[24px] font-semibold transition-all ${closed} xl:hidden`}>
        <ul>
            <li className="text-white mb-[26px]">Menu</li>
            <li className="mb-[46px]">
                <input type="text" name="searchBar" id="searchBar" className="w-[50%] bg-[#FFFFFF] rounded-tl-[6px] rounded-bl-[6px] pl-[12px] pt-[5px] pb-[5px] outline-none text-[14px] transition-all transition-duration-[300ms]" placeholder="Search Users..." onInput={e=>setInput(e.target.value)} />
                <Link to={`/dashboard/join?user=${input}`} id="searchBtn" className="bg-[#795DDD] pt-[7px] pb-[7px] text-[14px] text-[#FFFFFF] pr-[12px] pl-[12px] rounded-tr-[6px] rounded-br-[6px] transition-all transition-duration-[300ms] font-semibold hover:bg-[#6B15EC]">Search</Link>
            </li>
            <li className="mb-[46px]">
                <Link to="/dashboard/tiers" className="text-white hover:underline underline-offset-[6px]">
                Plans and tiers
                </Link>
            </li>
            <li>
                <Link to="/dashboard/login" className="text-white hover:underline underline-offset-[6px]">
                Login or register
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SideNavContent