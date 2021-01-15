class Clock {
    constructor() {
        this.time = new Date();

        this.hours = this.time.getHours();
        this.minutes = this.time.getMinutes();
        this.seconds = this.time.getSeconds();

        this.printTime()
        setInterval(this._tick.bind(this), 1000) // setInterval(fn, miliseconds)
        // setInterval(function() {
        //     this.time.(this.seconds + 1);
        //     this.printTime();
        // }, 1000) // setInterval(fn, miliseconds)
    }

    printTime() {
        let timeFormat = [this.hours, this.minutes, this.seconds].join(":");
        console.log(timeFormat);
    }

    _tick() {
        // this.time.setSeconds(this.seconds + 1);
        // while second < 59 => increment this.seconds
        // while minutes < 59 => increment this.minutes
        // while (this.seconds < 59) {
        //     this.seconds += 1;
        //     console.log(this.seconds);
        //     // if (this.seconds === 59) {
        //     //     this.seconds = 0;
        //     // };

        // }
        while (this.seconds < 60) {
            this.incrementSeconds();
        }
        



        this.printTime();
    };

    incrementSeconds() {
        this.seconds++;
        if (this.seconds === 59) {
            this.seconds = 0;
        };
    };

    incrementMinutes() {
        this.minutes++;
        if (this.minutes === 59) {
            this.minutes = 0;
        };
    };

    incrementHours() {
        
    };

}

const clock = new Clock();