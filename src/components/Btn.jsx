import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/Components/Button.scss'

const Btn = ({id, cN, func, name, href, icon, bootsrap}) => {

  const handleClick = (id, href) => {
    if(id == 'start-now'){
      window.location.href=`#${href}`
    } else if(id == 'quoter'){
      window.location.href=`#${href}`
    }
  }

  return (
    <button 
      id={id} 
      className={`my-btn ${cN} ${bootsrap}`} 
      href={href}
      onClick={() => handleClick(id, href)} 
      style={{display: 'flex', justifyContent: 'space-evenly', position: 'relative', zIndex: '1'}} variant="outline-primary">{name}
      {icon &&
        <img className='' style={{height: '1.5em'}} src={icon}></img>
      }
    </button>
  )
}

export default connect(null, null)(Btn)