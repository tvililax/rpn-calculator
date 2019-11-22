import React, { Component } from 'react';


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberDisplay : '',
        }
    }

    render(){
        return (
            <div>
                <button onClick={() => this.displaySelection(0)}> 0 </button> <br/>
                <button onClick={() => this.displaySelection(1)}> 1 </button>
                <button onClick={() => this.displaySelection(2)}> 2 </button>
                <button onClick={() => this.displaySelection(3)}> 3 </button> <br/>
                <button onClick={() => this.displaySelection(4)}> 4 </button> 
                <button onClick={() => this.displaySelection(5)}> 5 </button>
                <button onClick={() => this.displaySelection(6)}> 6 </button> <br/>
                <button onClick={() => this.displaySelection(7)}> 7 </button> 
                <button onClick={() => this.displaySelection(8)}> 8 </button> 
                <button onClick={() => this.displaySelection(9)}> 9 </button> <br/>
                <button > + </button> 
                <button > - </button> 
                <button > * </button> <br/>

                <button onClick={() => this.pushList(this.state.numberDisplay)}>Entrer</button>

                <p> {this.state.numberDisplay}</p>

            </div>
        )
    }

    displaySelection = (num) => {
        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay+num
        }))
    }

    pushList = (pile) => {
        console.log(pile);
        this.setState((prevState) => ({
            numberDisplay: ''
        }))
    }

}

export default Calculator;