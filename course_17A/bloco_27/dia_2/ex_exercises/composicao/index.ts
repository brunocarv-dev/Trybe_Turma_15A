interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger{
  constructor() {}

  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 {
  constructor() {}

  log(param: string): void {
    console.log('Olá, mundo!');
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string) {
    this.logger.log(key)
    this.logger.log(value)
  }
}

const objectConsoleLogger = new ConsoleLogger();
const objectConsoleLogger2 = new ConsoleLogger2();

const objectDatabase1 = new ExampleDatabase(objectConsoleLogger);
const objectDatabase2 = new ExampleDatabase(objectConsoleLogger2);
const objectDatabase3 = new ExampleDatabase();

objectDatabase1.save('123456', 'Bruno')
