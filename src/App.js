import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            list: []
        }
    }
    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    }
    addToList(input) {
        if (input.length !== 0) {
            let listArray = this.state.list;
            listArray.push(input);
            this.setState({
                list: listArray,
                userInput: ''
            })
        }
    }

    delete(i) {
        let la = this.state.list;
        delete la[i];
        console.log(la);
        this.setState({ list: la })
    }
    enter(val, e) {
        console.log(val);
        if (e.charCode === 13 || e.keyCode === 13) { this.addToList(val); }
    }
    render() {
        return ( < div >
            <
            h1 > Shopping List! < /h1>   <
            p > Get it done today... < /p> <div id='inp'>  <
            input id = 'userinput'
            onChange = {
                (e) => this.changeUserInput(e.target.value)
            }
            value = { this.state.userInput }
            onKeyPress = {
                (e) => this.enter(this.state.userInput, e)
            }
            type = "text" / >
            <
            button id = 'enter'
            onClick = {
                () => this.addToList(this.state.userInput)
            } >
            Enter! < /button> <
            ul id = 'un' > {
                this.state.list.map((val, i) => < li id = 'ls' > { val } < button id = 'del'
                    onClick = {
                        () => this.delete(i, this.list)
                    } > x < /button>< /li > )
            } < /
            ul > < /
            div > <
            /div >
        );
    }
}

export default App;