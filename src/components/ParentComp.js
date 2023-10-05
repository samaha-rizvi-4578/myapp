import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';


class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Samaha"
        }


    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Samaha"
            });
        }, 3000);
    }
    render() {
        console.log("Parent Component Render");
        return (
            <div>
                I am the Parent Component
                <RegComp name = {this.state.name} />
                <PureComp name={this.state.name} />
                
            </div>
        );
    }
}

export default ParentComp;