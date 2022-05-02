import Cat from "./Cat"
import Team from "./Team"

import {useState, useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import { dataContext } from '../helper/dataContext'
import { teamContext } from '../helper/teamContext'

function Play() {
  let {data} = useContext(dataContext)
  let {team, setTeam} = useContext(teamContext)

  if (data.length === 0) { 
      return (<h1>Create a game <Link to="/create" className="underline text-[#6C63FF]">here</Link></h1>)
  }

  function genID() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let special = "[]!@#$%&'()*+,-./:;<=>?@>";
    let id = (Math.random() * 1000) + special[Math.floor(Math.random() * special.length)] + chars[Math.floor(Math.random() * chars.length)]
    return id;
  }

  function addTeam() {
    let teamName = window.prompt("Team name: ")
    if (teamName !== null && teamName !== "") {
      setTeam([
        ...team,
        {name: teamName, score: 0, id: genID()}
      ])
    }
  }

  return (
    <section>
      <div className="w-full h-[50vh] overflow-x-scroll">
          {/* <h1 className="text-center font-semibold text-[24px] mt-2 mb-2">Choose a question:</h1> */}
          <div className="h-full flex flex-col justify-around items-center">
            {data.map(obj => {
              let key = genID()
              return (
                <Cat key={key} {...obj}/>
              )
            })}
          </div>
      </div>

        <div className="w-full h-[50vh]">
            <h1 className="text-center font-semibold text-[24px] mt-2 mb-2">Leaderboard:</h1>
            <div className="w-[88%] h-full m-auto pt-[20px] pb-[20px]">
            <div className="leaderboard h-full">
              {team.map((obj) => {
                return (
                  <Team key={obj.id} {...obj} />
                )
              })}
              <div className="flex justify-center items-center text-[20px] border-[2px] border-black cursor-pointer underline" onClick={addTeam}>
                Add Team
              </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Play