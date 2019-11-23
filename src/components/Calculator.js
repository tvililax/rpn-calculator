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
                <button onClick={() => this.divideOperator(parseInt(this.state.numberDisplay))}> % </button> <br/>

                <button onClick={() => this.pushList(this.state.numberDisplay)}>ENTER</button>
                <button onClick={this.changeSign}>+ / -</button>
                <button onClick={this.pileDrop}>DROP</button>
                <button onClick={this.pileSwap}>SWAP</button>
                <button onClick={this.clearAll}>CLEAR ALL</button>

                <p> {this.state.numberDisplay} </p>
                <p> Résultat : {this.state.displayResult} </p>

            </div>
        )
    }

    // fonction qui permet l'affichage en direct à chaque numéro cliqué
    displaySelection = (num) => {
        console.log(this.state.numberDisplay);
        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay+num
        }))
        console.log(this.state.numberDisplay);
    }

    // fonction qui change le signe du nombre entré
    changeSign = () => {

        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay * -1
        }))

    }

    // fonction drop, qui supprime le dernier élément du tableau
    pileDrop = () => {
        console.log('avant le drop : '+this.state.piles);
        this.state.piles.splice(this.state.piles.length-1, 1);
        this.setState(() => ({
            piles: this.state.piles
        }))
        console.log('après le drop : '+this.state.piles);
    }

    // fonction drop, qui supprime le dernier élément du tableau
    pileSwap = () => {
        console.log('avant le swap : '+this.state.piles);
        
        let tmp = this.state.piles[this.state.piles.length-1];
        this.state.piles[this.state.piles.length-1] = this.state.piles[this.state.piles.length-2];
        this.state.piles[this.state.piles.length-2] = tmp;

        this.setState(() => ({
            piles: this.state.piles
        }))

        console.log('après le swap : '+this.state.piles);
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
            numberDisplay: "",
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
            numberDisplay: "",
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
            numberDisplay: "",
            piles: [this.state.result],
            displayResult: this.state.result,
        }))

    }

    // fonction qui permet de diviser le dernier nombre dans la pile, par le nombre entré
    divideOperator = (num) => {

        console.log("on va diviser "+this.state.piles[this.state.piles.length-1]+" avec "+num);
        
        this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) / parseInt(num);
        
        console.log("resultat : "+this.state.result)

        this.setState(() => ({
            result: null,
            numberDisplay: "",
            piles: [this.state.result],
            displayResult: this.state.result,
        }))

    }

}

export default Calculator;
