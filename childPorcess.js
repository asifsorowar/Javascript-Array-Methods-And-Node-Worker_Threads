const { parentPort, workerData } = require("worker_threads");

console.log(`Worker! Process ID: ${process.pid}`);
parentPort.postMessage(workerData.sort((a, b) => a - b));
