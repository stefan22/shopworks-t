import React from 'react'
import {H3} from '../../Styles/Styled'


const SubtitleComp = ({seckey,title}) => (

      <>
        {
          seckey === 1 &&
          <H3>{title}</H3>
        }
      </>

)

export default SubtitleComp

