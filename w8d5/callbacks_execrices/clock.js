class Clock {
    constructor() {
        this.time = new Date();

        this.hours = this.time.getHours();
        this.minutes = this.time.getMinutes();
        this.seconds = this.time.getSeconds();

        this.printTime()
        setInterval(this._tick.bind(this), 1000) // setInterval(fn, miliseconds)
    }

    printTime() {
        let timeFormat = [this.hours, this.minutes, this.seconds].join(":");
        console.log(timeFormat);
    }

    _tick() {
        this._incrementSeconds();

        this.printTime();
    };

    _incrementSeconds() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }

    };

    _incrementMinutes() {
        this.minutes++;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    };

    _incrementHours() {
        this.hours++;
        if (this.hours === 24) {
            this.hours = 0;
        }  
    };

}

const clock = new Clock();
