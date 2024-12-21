import './App.css'
import React from "react";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      quantity : null,
      items : null,
      bill : null
    }
  }

  handleQuantity = (e) =>{
    this.setState({quantity :  parseInt(e.target.value)});
  }

  handleItems = (e) =>{
    this.setState({items :  parseInt(e.target.value)});
  }

  calcBill = () =>{
    // console.log("hi");
    
    this.setState({bill :  1.18 * parseInt(this.state.items) * parseInt(this.state.quantity)});

  }

    render(){
      return (
        <>
          <form action="" id="form">
            <div className="form">

            <section id="quantity" className="container">
              <label htmlFor="Quantity" className='label'>Quantity :</label>
              <input type="number" name="quantity" value={this.state.quantity} id="quantityInput" className="input" onChange={(e) => this.handleQuantity(e)} placeholder='Enter the quantity' min={0}/>
          </section>
          <section id="items" className="container">
              <label htmlFor="items" className='label'>Items :</label>
              <input type="number" name="items" value={this.state.items} id="itemsInput" className="input" onChange={(e) => this.handleItems(e)} placeholder='Enter the total items' min={0}/>
          </section>
          <section id="bill" className="container">
              <label htmlFor="bill" className='label'>Total Bill :</label>
              <input type="number" name="bill" value={this.state.bill} id="billInput" className="input" placeholder='Total Bill' min={0}/>
          </section>

          <section id="calc">
            <input type="button" className="calcButton" onClick={this.calcBill} value="calculate"/>
          </section>

            </div>
          </form>
        </>
    )
    }
};

