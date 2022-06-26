"use strict";
class ConsoleLogger {
    constructor() { }
    log(param) {
        console.log(param);
    }
}
class ConsoleLogger2 {
    constructor() { }
    log(param) {
        console.log('Olá, mundo!');
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(key);
        this.logger.log(value);
    }
}
const objectConsoleLogger = new ConsoleLogger();
const objectConsoleLogger2 = new ConsoleLogger2();
const objectDatabase1 = new ExampleDatabase(objectConsoleLogger);
const objectDatabase2 = new ExampleDatabase(objectConsoleLogger2);
const objectDatabase3 = new ExampleDatabase();
objectDatabase1.save('123456', 'Bruno');
