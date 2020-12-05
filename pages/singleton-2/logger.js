class FancyLogger {
  constructor() {
    if (!FancyLogger.instance) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;