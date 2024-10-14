export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const taskBlockTrue = true;
    const taskBlockFalse = false;
    return [taskBlockTrue, taskBlockFalse];
  }

  return [task, task2];
}
