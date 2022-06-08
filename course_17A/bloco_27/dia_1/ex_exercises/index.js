"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const tv = new app_1.default('Samsung', 50, '4096 pixels', ['HDMI', 'VGA', 'Bluetooth', 'Wi-fi', 'Ethernet']);
tv.turnOn();
tv.setter('VGA');
console.log(tv.getter());
