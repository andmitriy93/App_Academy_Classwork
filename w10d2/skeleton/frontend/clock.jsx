import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        let date = Array.from(new Date()).join(" ");
        this.state = { date };
        // this.tick();
        setInterval(this.tick(), 1000);


        this.render = this.render.bind(this);
    }
    
    tick() {
        this.setState({date: Array.from(new Date()).join(" ") }, this.render);
    }

    render(){
        return (
            <>
                <h1>{this.state.date}</h1>
            </>
        )
    }


}

export default Clock;
// module.export = Clock;