import React from 'react'
import './teams.css'
import team_1 from '../../assets/mclaren.png'
import team_2 from '../../assets/ferrari.png'
import team_3 from '../../assets/rbracing.png'
import team_4 from '../../assets/mercedes.png'
import team_5 from '../../assets/astorn.png'
import team_6 from '../../assets/alpine.png'
import team_7 from '../../assets/haas.png'
import team_8 from '../../assets/rb.png'
import team_9 from '../../assets/williams.png'
import team_10 from '../../assets/sauber.png'
const Teams = () => {
  return (
    <>
    <div>
      <p>All the contructors</p>
    </div>
    <div className='teams'>
    <img src={team_1} className='team'></img>
    <img src={team_2} className='team'></img>
    <img src={team_3} className='team'></img>
    <img src={team_4} className='team'></img>
    <img src={team_5} className='team'></img>
    <img src={team_6} className='team'></img>
    <img src={team_7} className='team'></img>
    <img src={team_8} className='team'></img>
    <img src={team_9} className='team'></img>
    <img src={team_10} className='team'></img>
    </div>
    </>
  )
}

export default Teams