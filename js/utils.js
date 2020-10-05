function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let n = Math.floor(Math.random() * 36) + 1; //Исправлен баг с рандомным числом
  return `#slot-${n}`;
}
