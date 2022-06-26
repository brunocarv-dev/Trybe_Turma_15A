class Tv {
  private brand: string;
  private size: number;
  private resolution: string;
  private connections: string[];
  private connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(this.brand);
    console.log(this.size);
    console.log(this.resolution);
    console.log(this.connections);
    console.log(this.connectedTo);
  }

  getter(): string | undefined {
    return this.connectedTo as string;
  }

  setter(connect: string): string | void {
    for (let i: number = 0; i < this.connections.length; i+=1 ) {
      if (this.connections[i] === connect && connect != undefined) {
        return this.connectedTo = connect;
      }
    }
    return console.log('Sorry, connection unavailable!');
  }
}

export default Tv;