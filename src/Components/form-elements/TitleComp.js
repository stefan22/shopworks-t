import React from 'react'
import {H3} from '../../Styles/Styled'


const TitleComp = ({seckey,title}) => (

      <>
        {
          seckey === 0 &&
          <H3>{title}</H3>
        }
      </>

)

export default TitleComp
