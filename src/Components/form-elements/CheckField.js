import React from 'react'
import {Label} from '../../Styles/Styled'


const CheckField = ({fields,onChange,seckey,value}) => (

    <>
      {
        fields.map(itm =>
          itm.type === 'checkbox' ?
            <div className="checkbox" key={seckey}>
              <input
                type={itm.type}
                name={itm.name}
                id={itm.name}
                defaultChecked={false}
                value={value}
                onChange={onChange}
              />
              <Label htmlFor={itm.name}>{itm.label}</Label>
            </div>
            : false
        )
      }
    </>

)




export default CheckField
