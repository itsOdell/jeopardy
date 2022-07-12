import {Link} from "react-router-dom"
import {ReactComponent as Hero} from "../img/Hero.svg";
import {ReactComponent as Blob} from "../img/Blob.svg";

function Main() {
  return (
    <main className="w-[80%] mt-[5px] flex justify-center items-center m-auto xl:justify-between select-none">
      <div className="w-[550px] mt-[60px]">
        <h1 className="dark:text-[#FFFFFF] text-[50px] font-bold tracking-[3%] leading-[1.3] mb-[50px]">Play, edit and make
        jeopardies easily</h1>
        <p className="text-[20px] dark:text-[#D7D7D7] tracking-[3%] font-medium leading-7 mb-[50px]">Effortlesly create and play jeopardy quizzes made by other players, or make your own 
        jeopardy and make it public for the world to see. Play by yourself or with friends, all for free.</p>
        <Link to="/dashboard/create" className="w-full bg-[#795DDD] text-[#FFFFFF] rounded-[6px] block font-semibold text-[20px] text-center mb-[20px] pt-[15px] pb-[15px] transition-all transition-duration-[300ms] hover:bg-[#6B15EC] hover:shadow-xl">Create a jeopardy</Link>
        <Link to="/dashboard/join" className="w-full bg-[#795DDD] text-[#FFFFFF] rounded-[6px] block font-semibold text-[20px] text-center pt-[15px] pb-[15px] transition-all transition-duration-[300ms] hover:bg-[#6B15EC] hover:shadow-xl">Search a Jeopardy</Link>
      </div>

      <div className="hidden mt-[60px] xl:block relative pl-[10px]">
        <Blob className="absolute z-[-1] top-[-50px] left-[-75px]"/>
        <Hero />
      </div>
    </main>
  )
}

export default Main