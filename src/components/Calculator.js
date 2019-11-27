import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            numberDisplay : '',
            piles: [],
            result: 0,
            displayResult: '',
            isOperator: false
        }
    }

    render(){
        return (
            <div>
                <div id='calculator'>
                    <p className="pileStyle">{this.state.piles[this.state.piles.length-4]}</p>
                    <p className="pileStyle">{this.state.piles[this.state.piles.length-3]}</p>
                    <p className="pileStyle">{this.state.piles[this.state.piles.length-2]}</p>
                    <p className="pileStyle">{this.state.piles[this.state.piles.length-1]}</p>
                    {this.state.displayResult &&
                        <p> Résultat : <b>{this.state.displayResult}</b></p>
                    }
                    <p className="pileStyle" style={{'textDecoration': 'underline blue'}} > {this.state.numberDisplay} </p>

                    <button className='btnStyle' style={{'width': '100%'}} onClick={() => this.displaySelection(0)}> 0 </button> <br/>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(1)}> 1 </button>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(2)}> 2 </button>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(3)}> 3 </button> <br/>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(4)}> 4 </button> 
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(5)}> 5 </button>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(6)}> 6 </button> <br/>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(7)}> 7 </button> 
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(8)}> 8 </button> 
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={() => this.displaySelection(9)}> 9 </button> <br/>

                    <button className='btnStyle' style={{'width': '25%'}} onClick={() => this.plusOperator(parseInt(this.state.numberDisplay))}> + </button> 
                    <button className='btnStyle' style={{'width': '25%'}} onClick={() => this.minusOperator(parseInt(this.state.numberDisplay))}> - </button> 
                    <button className='btnStyle' style={{'width': '25%'}} onClick={() => this.multipleOperator(parseInt(this.state.numberDisplay))}> X </button>
                    <button className='btnStyle' style={{'width': '25%'}} onClick={() => this.divideOperator(parseInt(this.state.numberDisplay))}> % </button> <br/>

                    <button className='btnStyle' style={{'width': '100%'}} onClick={() => this.pushList(this.state.numberDisplay)}>ENTER</button><br/>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={this.changeSign}>+ / -</button>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={this.pileDrop}>DROP</button>
                    <button className='btnStyle' style={{'width': '33.33%'}} onClick={this.pileSwap}>SWAP</button>
                    <button className='btnStyle' style={{'width': '50%'}} onClick={this.clearDisplay}>C</button>
                    <button className='btnStyle' style={{'width': '50%'}} onClick={this.clearAll}>AC</button>
                </div>
            </div>
        )
    }

    // fonction qui permet l'affichage en direct à chaque numéro cliqué
    displaySelection = (num) => {
        this.setState((prevState) => ({
            numberDisplay: prevState.numberDisplay+num,
            isOperator: false
        }))
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
        this.setState((prevState) => ({
            piles: prevState.piles
        }))
        console.log('après le drop : '+this.state.piles);
    }

    // fonction drop, qui supprime le dernier élément du tableau
    pileSwap = () => {
        console.log('avant le swap : '+this.state.piles);
        
        let tmp = this.state.piles[this.state.piles.length-1];
        this.state.piles[this.state.piles.length-1] = this.state.piles[this.state.piles.length-2];
        this.state.piles[this.state.piles.length-2] = tmp;

        this.setState((prevState) => ({
            piles: prevState.piles
        }))

        console.log('après le swap : '+this.state.piles);
    }

    // fonction qui reset le nombre entré
    clearDisplay = () => {

        this.setState(() => ({
                numberDisplay : '',
        }))
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

        if(num && !this.state.isOperator){
            console.log("on va additionner "+this.state.piles[this.state.piles.length-1]+" avec "+num);
            
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) + parseInt(num);
            
            console.log("resultat : "+this.state.result)

            this.setState((prevState) => ({
                result: null,
                numberDisplay: "",
                displayResult: prevState.result,
                isOperator: true
            }))

            this.state.piles.push(num,this.state.result);

        } else if((num || this.state.displayResult) && this.state.isOperator){
            
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) + parseInt(this.state.piles[this.state.piles.length-4]);

            this.setState((prevState) => ({
                result: null,
                numberDisplay: "",
                displayResult: prevState.result,
            }))
            this.state.piles.push(this.state.result);
        }

    }

    // fonction qui permet de multiplier le nombre entré, avec celui déjà dans la pile
    multipleOperator = (num) => {

        if(num && !this.state.isOperator){

            console.log("on va multiplier "+this.state.piles[this.state.piles.length-1]+" avec "+num);
            
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) * parseInt(num);
            
            console.log("resultat : "+this.state.result)

            this.setState(() => ({
                result: null,
                numberDisplay: "",
                displayResult: this.state.result,
            }))

            this.state.piles.push(num,this.state.result);

        } else if((num || this.state.displayResult) && this.state.isOperator){
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) * parseInt(this.state.piles[this.state.piles.length-4]);

            this.setState((prevState) => ({
                result: null,
                numberDisplay: "",
                displayResult: prevState.result,
            }))
            this.state.piles.push(this.state.result);
        }

    }

    // fonction qui permet de soustraire le dernier nombre dans la pile, par le nombre entré
    minusOperator = (num) => {

        if(num && !this.state.isOperator){

            console.log("on va soustraire "+this.state.piles[this.state.piles.length-1]+" avec "+num);
            
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) - parseInt(num);
            
            console.log("resultat : "+this.state.result)

            this.setState(() => ({
                result: null,
                numberDisplay: "",
                displayResult: this.state.result,
            }))

            this.state.piles.push(num,this.state.result);

        } else if((num || this.state.displayResult) && this.state.isOperator){
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) - parseInt(this.state.piles[this.state.piles.length-4]);

            this.setState((prevState) => ({
                result: null,
                numberDisplay: "",
                displayResult: prevState.result,
            }))
            this.state.piles.push(this.state.result);
        }

    }

    // fonction qui permet de diviser le dernier nombre dans la pile, par le nombre entré
    divideOperator = (num) => {

        if(num && !this.state.isOperator){

            console.log("on va diviser "+this.state.piles[this.state.piles.length-1]+" avec "+num);
            
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) / parseInt(num);
            
            console.log("resultat : "+this.state.result)

            this.setState(() => ({
                result: null,
                numberDisplay: "",
                displayResult: this.state.result,
            }))

            this.state.piles.push(num,this.state.result);

        } else if((num || this.state.displayResult) && this.state.isOperator){
            this.state.result += parseInt(this.state.piles[this.state.piles.length-1]) / parseInt(this.state.piles[this.state.piles.length-4]);

            this.setState((prevState) => ({
                result: null,
                numberDisplay: "",
                displayResult: prevState.result,
            }))
            this.state.piles.push(this.state.result);
        }
    }

}

export default Calculator;
