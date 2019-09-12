import React from 'react'
import {InputStyled,TextField,Label} from '../../Styles/Styled'


const SubtitleTextComp = ({seckey,fields,onChange}) => (

      <>
          {
            seckey === 1 &&

            fields.map(itm =>

              (itm.type === 'text') ?

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
                    onChange={onChange}
                  />
                </TextField>

                : false
            )
          }
      </>

)


export default SubtitleTextComp
