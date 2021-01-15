class Clock {
    constructor() {
        const time = new Date();

        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();

        this.printTime()
        setInterval(this._tick(), 1000) // setInterval(fn, miliseconds)
    }
}