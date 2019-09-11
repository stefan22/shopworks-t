import React from 'react'


const List = ({items,item: Item,handleChange}) => (

    <>
      {
        items.map((itm,idx) =>
          <Item
            key={idx}
            seckey={idx}
            {...itm}
            handleChange={handleChange}
          />
        )
      }
    </>

)


export default List
