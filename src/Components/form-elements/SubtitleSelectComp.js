import React, {Component} from 'react'
import {TextField,SelectField,Label} from '../../Styles/Styled'


class SubtitleSelectComp extends Component {

  handleChange(val,itm) {
    this.props.handleChange(val,itm)
  }

  render() {
    const {seckey} = this.props

    return(
      <>
          {
            seckey === 1 &&
            this.props.fields.map(itm =>

              (itm.type === 'dropdown') ?

                <TextField key={itm.name}
                >
                  <Label
                    htmlFor={itm.name}
                  >
                    {itm.label}
                  </Label>

                  <SelectField
                    type='dropdown'
                    name={itm.name}
                    id={itm.name}
                    onChange={(e) => this.handleChange(e.target.value,itm)}
                  >
                    {
                      itm.options.map(option =>
                        <option
                          value={option}
                          key={option}
                        >
                          {option}
                        </option>
                      )
                    }
                  </SelectField>

                </TextField>

                : false
            )

          }
      </>

    )
  }


}

export default SubtitleSelectComp
