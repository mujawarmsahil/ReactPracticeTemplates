import React from "react"
import "../css/Card.css"

export default class Card extends React.Component {
    constructor()
    {
        super();
        this.state = {
            lists : [],
            name : ""
        }
    }

    addName = (e) => {
        this.setState({name : e.target.value})
    }

    addItems = () => {
        if(this.state.name === "")
        {
            return
        }
        this.setState({lists : [...this.state.lists, this.state.name] , name : ""})
    }

    removeMe = (e) => {
        this.setState({lists : this.state.lists.filter((item, index) => {  
            return index !== parseInt(e.target.parentElement.className);
        })})
    }

    render(){
        return <>
        
            <section className="bubble"></section>
            <div className="card">
                <section className="inputContainer">
                    <input type="text" name="lists" value={this.state.name} onChange={(e) => {this.addName(e)}} id="ToDoContainer" />
                    <button className="addMe" onClick={this.addItems}>Add</button>
                </section>
                <section className="itemsToDo">
                    <ul>
                        {
                            this.state.lists.length !== null ? 
                            (this.state.lists.map((item, index) => {
                                return <li key={index} className={index} >{item} <span id="close" onClick={this.removeMe}>x</span></li>
                            }) ): null
                        }
                    </ul>
                </section>
            </div>
        </>
    }
}