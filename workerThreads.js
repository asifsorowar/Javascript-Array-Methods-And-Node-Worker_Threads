const {
  isMainThread,
  Worker,
  workerData,
  parentPort,
} = require("worker_threads");

const { flat } = require("./arrayMethods");

let worker1 = new Worker("./childPorcess.js", {
  workerData: [5, 7, 1, 4],
});
let worker2 = new Worker("./childPorcess.js", {
  workerData: [8, 2, 9, 4],
});

function procesedData(worker) {
  return new Promise((resolve, reject) => {
    worker.on("message", (data) => {
      resolve(data);
    });
  });
}

async function fetchData() {
  let item = await Promise.all([procesedData(worker1), procesedData(worker2)]);

  item = flat(item, 1);
  console.log(item);
}

fetchData();
