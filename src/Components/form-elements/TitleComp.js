import React, {Component} from 'react'
import {H3} from '../../Styles/Styled'


class TitleComp extends Component {

  render() {
    const {title,seckey} = this.props

    return (
      <>
        {
          seckey === 0 &&
          <H3>{title}</H3>
        }
      </>
    )
  }



}

export default TitleComp
