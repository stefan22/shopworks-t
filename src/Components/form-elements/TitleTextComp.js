import React, {Component} from 'react'
import {InputStyled,TextField,Label} from '../../Styles/Styled'


class TitleTextComp extends Component {

  handleChange(val,itm) {
    this.props.handleChange(val,itm)
  }

  render() {
    const {seckey,value} = this.props

    return(
      <>
          {
            seckey === 0 &&
            this.props.fields.map((itm,idx) =>
              (itm.type) === 'text' ?
                <TextField key={itm.name}
                >
                  <Label
                    htmlFor={itm.name}
                  >
                    {itm.label}
                  </Label>
                  <InputStyled
                    type='text'
                    name={itm.name}
                    value={value}
                    //first name required
                    required={(idx === 0) ? true : false}
                    onChange={(e) => this.handleChange(e.target.value,itm)}

                  />
                </TextField>
                : false
            )
          }
      </>
    )
  }


}

export default TitleTextComp
