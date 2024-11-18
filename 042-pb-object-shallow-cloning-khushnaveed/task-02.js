const tasks = [
  {
    task: "clean apartment",
    priority: 5,
  },
  {
    task: "learn objects",
    priority: 2,
  },
  {
    task: "practice JavaScript",
    priority: 1,
  },
];

const finishTask = (tasks) => {
  let copy = [...tasks];
  copy.pop();
  return copy;
};

console.log(finishTask(tasks));
console.log(tasks);
