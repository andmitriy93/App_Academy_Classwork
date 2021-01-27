import React from 'react';


class Clock extends React.Component {

    constructor(props) {
        super(props);
        let date = new Date();
        this.state = { date };
        // this.tick();

        this.tick = this.tick.bind(this);
        this.render = this.render.bind(this);
    }
    
    tick() {
        this.setState({date: new Date() }, () => this.render());
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }



    render(){
        const month = [" January", " February", " March", " April", " May", " June", " July", " August", " September", " October", " November", " December"]
        // debugger
        return (
            <>
                <h1>Clock</h1>
                <div className='clock'>
                    <h2>Date</h2>
                    <div>
                        {this.state.date.getDate()} 
                        {month[this.state.date.getMonth()]},  
                        {this.state.date.getFullYear()}
                    </div>
                </div>
                <br/>
                <div className='clock'>
                    <h2>Time</h2>
                    <div>
                        {this.state.date.getHours()}: 
                        {this.state.date.getMinutes()}: 
                        {this.state.date.getSeconds()}
                    </div>
                </div>
            </>
        )
    }


}

export default Clock;