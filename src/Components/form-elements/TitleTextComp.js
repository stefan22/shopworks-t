import React from 'react'
import {InputStyled,TextField,Label} from '../../Styles/Styled'


const TitleTextComp = ({seckey,fields,onChange}) => (

      <>
          {
            seckey === 0 &&
            fields.map((itm,idx) =>
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
                    //first name required
                    required={(idx === 0) ? true : false}
                    onChange={onChange}

                  />
                </TextField>
                : false
            )
          }
      </>

)

export default TitleTextComp
