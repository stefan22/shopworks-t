import React from 'react'
import {H3,InputStyled,TextInput,Label} from '../../Styles/Styled'


const TextField = ({onChange,onBlur,fields,title,seckey,value}) => {

  return (
    <div className='text-input-field'>
      <H3>{seckey+1}. {title}</H3>

      {
        fields.map(itm =>
          (itm.type !== 'dropdown' && itm.type !== 'checkbox') ?
            <TextInput key={itm.name}
            >
              <Label
                className='input-label'
                htmlFor={itm.name}
              >
                {itm.label}
              </Label>
              <InputStyled
                id={itm.name}
                type={itm.type}
                name={itm.name}
                className='text-input'
                value={value}
                required={true}
                onChange={onChange}
              />
            </TextInput> : false
        )
      }
    </div>
  )

}


export default TextField
