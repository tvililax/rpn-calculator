import React, { Component } from 'react';


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberDisplay : '',
            piles: [],
            result: 0,
            displayResult: '',
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

                <button onClick={() => this.plusOperator(parseInt(this.state.numberDisplay))}> + </button> 
                <button onClick={() => this.minusOperator(parseInt(this.state.numberDisplay))}> - </button> 
                <button onClick={() => this.multipleOperator(parseInt(this.state.numberDisplay))}> * </button>
                <button onClick={() => this.multipleOperator()}> % </button> <br/>

                <button onClick={() => this.pushList(this.state.numberDisplay)}>ENTER</button>
                <button onClick={this.pileDrop}>DROP</button>
                <button>SWAP</button>
                <button onClick={this.clearAll}>CLEAR ALL</button>

                <p> {this.state.numberDisplay} </p>
                <p> Résultat : {this.state.displayResult} </p>

            </div>
        )
    }

    // fonction qui permet l'affichage en direct à chaque numéro cliqué
    displaySelection = (num) => {

        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay+num
        }))

    }

    // fonction drop, qui supprime le dernier élément du tableau
    pileDrop = () => {

        console.log(this.state.piles);
        this.setState(() => ({
            piles: this.state.piles.pop()
        }))
        console.log(this.state.piles)
    }

    // fonction qui reset tout
    clearAll = () => {

        this.setState(() => ({
                numberDisplay : '',
                piles: [],
                result: 0,
                displayResult: '',
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

    // fonction qui permet d'additionner le nombre entré, avec celui déjà dans la pile
    plusOperator = (num) => {

        console.log("on va additionner "+this.state.piles[this.state.piles.length-1]+" avec "+num);
        
        this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) + parseInt(num);
        
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: null,
            numberDisplay: null,
            piles: [this.state.result],
            displayResult: this.state.result,
        }))

    }

    // fonction qui permet de multiplier le nombre entré, avec celui déjà dans la pile
    multipleOperator = (num) => {

        console.log("on va multiplier "+this.state.piles[this.state.piles.length-1]+" avec "+num);
        
        this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) * parseInt(num);
        
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: null,
            numberDisplay: null,
            piles: [this.state.result],
            displayResult: this.state.result,
        }))

    }

    // fonction qui permet de soustraire le dernier nombre dans la pile, par le nombre entré
    minusOperator = (num) => {

        console.log("on va soustraire "+this.state.piles[this.state.piles.length-1]+" avec "+num);
        
        this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) - parseInt(num);
        
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: null,
            numberDisplay: null,
            piles: [this.state.result],
            displayResult: this.state.result,
        }))

    }

}

export default Calculator;