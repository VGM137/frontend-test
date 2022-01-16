import React from 'react'
import { connect } from 'react-redux'
import mapBg from '../assets/static/world-bg.png'
import avatar1 from '../assets/static/avatar-1.jpg'
import avatar2 from '../assets/static/avatar-2.jpg'
import avatar3 from '../assets/static/avatar-3.jpg'
import avatar4 from '../assets/static/avatar-4.jpg'
import avatar5 from '../assets/static/avatar-5.jpg'
import avatar6 from '../assets/static/avatar-6.jpg'
import Text from './Text'
import CircleImages from './CircleImages'
import '../assets/styles/Components/Map.scss'

const Map = () => {

  return (
    <div className='row w-100 m-0 map-container'>
      <img className="col map-img" src={mapBg} alt="" />
      <div className='row map-content'>
        <Text 
          bootstrap={'mt-3 mt-md-5 mb-3'}
          cN={'my-card'}
          col={'col'} 
          pCol={'col-12'}
          pColMd={'col-md-9'}
          pColLg={'col-lg-7'}
          height={'auto'}
          title1='Trusted by world experts'
        >
        </Text>
        <div className='col w-75 h-75 map-images'>
          <CircleImages 
            img={avatar1}
            size={'sm'}
            position={'one'}/>
          <CircleImages 
            img={avatar2}
            size={'sm'}
            position={'two'}/>
          <CircleImages 
            img={avatar3}
            size={'md'}
            position={'three'}/>
          <CircleImages 
            img={avatar6}
            size={'gd'}
            position={'four'}/>
          <CircleImages 
            img={avatar5}
            size={'gd'}
            position={'five'}/>
          <CircleImages 
            img={avatar4}
            size={'sm'}
            position={'six'}/>
          <CircleImages 
            img={avatar2}
            size={'sm'}
            position={'seven'}/>
        </div>
      </div>
    </div>
  )
}

export default connect(null, null)(Map)