import React, { Component } from 'react';


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberDisplay : '',
            piles: [],
            result: 0,
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
                <button onClick={() => this.plusOperator(this.state.numberDisplay)}> + </button> 
                <button onClick={() => this.minusOperator()}> - </button> 
                <button onClick={() => this.multipleOperator()}> * </button> <br/>

                <button onClick={() => this.pushList(this.state.numberDisplay)}>Entrer</button>

                <p> {this.state.numberDisplay} </p>
                <p> {this.state.result} </p>

            </div>
        )
    }

    // fonction qui permet l'affichage en direct à chaque numéro cliqué
    displaySelection = (num) => {

        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay+num
        }))

    }

    // fonction qui permet de pousser un bouton cliqué dans une pile
    pushList = (pile) => {

        console.log(pile);

        this.state.piles.push(pile);
        this.setState(() => ({
            numberDisplay: ''
        }));

        console.log('tableau piles');
        console.log(this.state.piles);
    }

    // fonction qui permet d'additionner le nombre entré, avec celui/ceux déjà dans la pile
    plusOperator = (num) => {

        console.log("on va additionner "+this.state.piles+" avec "+num);

        for (let i=0; i<this.state.piles.length;i++){
            this.state.result += parseInt(this.state.piles[i])
        }

        this.state.result += parseInt(num);
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: this.state.result,
            numberDisplay: ''
        }))

    }

    // fonction qui permet de soustraire le nombre déjà dans la pile par celui entré
    plusOperator = (num) => {

        console.log("on va additionner "+this.state.piles+" avec "+num);

        for (let i=0; i<this.state.piles.length;i++){
            this.state.result += parseInt(this.state.piles[i])
        }

        this.state.result += parseInt(num);
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: this.state.result,
            numberDisplay: ''
        }))

    }

}

export default Calculator;