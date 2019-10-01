import React from "react";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            userText: ""
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input onChange={e => this.props.updateUserText(e.target.value)} />
            </div>
        );
    }
}

export default Intro;