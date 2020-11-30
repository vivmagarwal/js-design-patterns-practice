console.log('creational-singleton works!!');

// limit creation to one.

const Singleton = (function () {
  let pManager;

  function ProcessManager() {
    this.numProcesses = 0;
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = new ProcessManager();
      }
      return pManager;
    },
  };
})();

const processManger = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
const processManager3 = Singleton.getProcessManager();

console.log(processManger);
console.log(processManager2);
console.log(processManager3);

console.log(processManger == processManager2);
console.log(processManger == processManager3);
console.log(Object.is(processManger, processManager2));