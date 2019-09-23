import React from 'react'
import {SelectInput,Label,TextInput} from '../../Styles/Styled'

const SelectField = ({fields,value,onChange}) => {

  return (
    <>
    {
      fields.map((sel,idx) =>

        (sel.type === 'dropdown') ?

          <TextInput key={idx}>
            <Label
              className='label-field'
              htmlFor={sel.name}
            >
              {sel.label}
            </Label>
            <SelectInput
              className='select'
              name={sel.name}
              id={sel.name}
              type='dropdown'
              onChange={onChange}
            >
              {
                sel.options.map(option =>
                  <option
                    key={option}
                    value={value}
                  >
                    {option}
                  </option>
                )
              }

            </SelectInput>
          </TextInput>
          : false
      )
    }
    </>
  )

}



export default SelectField
