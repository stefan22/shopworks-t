import React, {Component} from 'react'
import {H3} from '../../Styles/Styled'


class SubtitleComp extends Component {

  render() {
    const {title,seckey} = this.props

    return (
      <>
        {
          seckey === 1 &&
          <H3>{title}</H3>
        }
      </>
    )
  }



}

export default SubtitleComp
