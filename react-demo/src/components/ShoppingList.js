import React from 'react'

class ShoppingList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='shoppingList'>
        <h1>Shopping list for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingList
