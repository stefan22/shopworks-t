import React from 'react'


const List = ({items,item: Item,onChange}) => (

    <>
      {
        items.map((itm,idx) =>
          <Item
            key={idx}
            seckey={idx}
            {...itm}
            onChange={onChange}
          />
        )
      }
    </>

)


export default List
