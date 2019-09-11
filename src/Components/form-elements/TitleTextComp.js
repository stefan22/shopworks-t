import React from 'react'
import {InputStyled,TextField,Label} from '../../Styles/Styled'


const TitleTextComp = ({seckey,value,fields,onChange}) => (

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
                    value={value}
                    //first name required
                    required={(idx === 0) ? true : false}
                    onChange={(e) => onChange(e.target.value,itm)}

                  />
                </TextField>
                : false
            )
          }
      </>

)

export default TitleTextComp
