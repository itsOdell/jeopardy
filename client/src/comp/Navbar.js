import {useState, useRef} from "react"
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from "../img/Logo-black.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSun, faMoon, faBars, faX} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  let [theme, setTheme] = useState(document.body.classList.contains("dark") ? true : false)
  let [closed, setClosed] = useState(true);
  let [input, setInput] = useState("")
  let menu = useRef()

  function changeTheme() {
    document.body.classList.toggle("dark");
    setTheme(!theme);
    theme ? menu.current.style.color = "white" : menu.current.style.color = "#141414";
  }

  function sideNav() {
    let sidenav = document.getElementById("sideNav");
    if (closed) {
      sidenav.classList.remove("w-0");
      sidenav.classList.add("w-[50%]");
      if (theme) {
        menu.current.style.color = "white"
      }
      setClosed(false)
    } else {
      menu.current.style.color = "";
      sidenav.classList.remove("w-[50%]")
      sidenav.classList.add("w-0")
      setClosed(true)
    }
  }

  return (
    <>
    <nav className="w-[80%] m-auto flex justify-between items-center mt-[8px] relative">
      <div className="logo cursor-pointer">
        <Logo />
      </div>

      <ul className="links flex items-center">
        <li className='group hidden xl:block'>
          <div className="flex shadow-lg dark:shadow-none rounded-tl-[6px] rounded-bl-[6px]">
            <input type="text" name="searchBar" id="searchBar" className="w-[260px] bg-[#FFFFFF] rounded-tl-[6px] rounded-bl-[6px] pl-[12px] pt-[5px] pb-[5px] dark:border-none border-[1px] border-t-[#e1e1e1] border-l-[#e1e1e1] border-b-[#e1e1e1] border-r-none outline-none text-[14px] transition-all transition-duration-[300ms]" placeholder="Search Users..." onInput={e=>setInput(e.target.value)} />
            <Link to={`/dashboard/join?user=${input}`} id="searchBtn" className="bg-[#795DDD] pt-[5px] pb-[5px] text-[14px] text-[#FFFFFF] pr-[12px] pl-[12px] rounded-tr-[6px] rounded-br-[6px] transition-all transition-duration-[300ms] font-semibold hover:bg-[#6B15EC]">Search</Link>
          </div>
        </li>
        <li className="hidden xl:block">
          <Link to="/dashboard/tiers" className='ml-[45px] font-semibold text-[18px] dark:text-[#ffffff] hover:underline underline-offset-[6px]'>Plans</Link>
        </li>
        <li className="mr-[50px] xl:mr-0">
          <div className="cursor-pointer w-[35px] h-[35px] bg-[#795DDD] transition-all transition-duration-[300ms] hover:bg-[#6B15EC] ml-[45px] rounded-full flex justify-center items-center" onClick={changeTheme}>
            <FontAwesomeIcon className="text-white text-[20px]" icon={theme ? faMoon : faSun}/>
          </div>
        </li>
        <li className="hidden xl:block">
          <Link to="/dashboard/login" className="fa-solid fa-circle-user cursor-pointer ml-[45px] text-[35px] text-[#795DDD] hover:text-[#6B15EC] transition-duration-[300ms] transition-all"></Link>
        </li>
        <li className="z-[-999] w-[30px] h-[30px] bg-white ml-[-33px] rounded-full hidden xl:block">
        </li>
        <li className="block xl:hidden absolute z-10 right-0" onClick={sideNav}>
          <FontAwesomeIcon icon={closed ? faBars : faX} className="dark:text-white text-[30px] cursor-pointer" ref={menu}/>
        </li>
      </ul>
    </nav>

    <section id="sideNav" className={`transition-all transition-duration-[300ms] absolute h-[100vh] right-0 top-0 w-0 xl:w-[0] bg-[#6B15EC]`}>

    </section>
    </>
  )
}

export default Navbar