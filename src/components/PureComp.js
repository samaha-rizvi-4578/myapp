import React, { PureComponent } from 'react';


class PureComp extends PureComponent {
    render() {
        console.log("Pure Component Render");
        return (
            <div>
                I am the Pure Component {this.props.name}
            </div>
        );
    }
}

PureComp.propTypes = {

};

export default PureComp;