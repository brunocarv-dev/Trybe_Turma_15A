"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tv {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(this.brand);
        console.log(this.size);
        console.log(this.resolution);
        console.log(this.connections);
        console.log(this.connectedTo);
    }
    getter() {
        return this.connectedTo;
    }
    setter(connect) {
        for (let i = 0; i < this.connections.length; i += 1) {
            if (this.connections[i] === connect && connect != undefined) {
                return this.connectedTo = connect;
            }
        }
        return console.log('Sorry, connection unavailable!');
    }
}
exports.default = Tv;
