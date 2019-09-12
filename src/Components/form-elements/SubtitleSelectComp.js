import React from 'react'
import {TextField,SelectField,Label} from '../../Styles/Styled'


const SubtitleSelectComp = ({seckey,fields,onChange}) => (

      <>
          {
            seckey === 1 &&
            fields.map(itm =>

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
                    onChange={onChange}
                  >
                    {
                      itm.options.map(option =>
                        <option
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

export default SubtitleSelectComp
