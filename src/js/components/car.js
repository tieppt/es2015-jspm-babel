export class Car {
    constructor(branch, engine) {
        this.branch = branch;
        this.engine = engine;
    }
    toString() {
        return `${this.branch} use ${this.engine}`;
    }
    log() {
        console.log(this.toString());
    }
}
