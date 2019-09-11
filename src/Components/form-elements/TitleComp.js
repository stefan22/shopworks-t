import React from 'react'
import {H3} from '../../Styles/Styled'


const TitleComp = ({title,seckey}) => (

      <>
        {
          seckey === 0 &&
          <H3>{title}</H3>
        }
      </>

)

export default TitleComp
