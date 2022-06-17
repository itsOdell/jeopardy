import {useRef, useContext} from 'react'
import {teamContext} from "../helper/teamContext"
function Team({name, id, score}) {
  let {team, setTeam} = useContext(teamContext)
  let input = useRef()

  function handle() {
    let finalAdd = Number(input.current.value) + score
    setTeam(team.map(team => {
      return team.id === id ?
      {...team, score: finalAdd} :
      team
    }));
    input.current.value = "";
  }

  return (
    <div className="team h-[130px] rounded-md" id={id}>
      <div className="flex justify-between flex-wrap">
        <p className="text-[20px] font-medium">{name}</p>
        <p className="text-[20px] font-medium">{score}</p>
      </div>
      <div className="flex justify-around w-full flex-wrap">
        <input type="number" className='border-[1px] border-[#00000047] w-[90%] mt-[8px]' ref={input}/>
        <button className="pr-[8px] pl-[8px] border-[2px] text-[18px] mt-[8px] rounded-md" onClick={handle}>Submit</button>
      </div>
    </div>
  )
}

export default Team