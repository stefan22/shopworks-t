import React, {Component} from 'react'


class List extends Component {
  render() {
    const {items, item: Item} = this.props

    return (
      <>
        {
          items.map((itm,idx) =>
            <Item
              key={idx}
              seckey={idx}
              {...itm}
              handleChange={this.props.handleChange}
            />
          )
        }
      </>
    )
  }
}


export default List
