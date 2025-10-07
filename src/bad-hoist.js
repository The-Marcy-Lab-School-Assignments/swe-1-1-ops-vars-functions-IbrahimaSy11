const debugFunc = () => {
  let time = 'today';
  let name = 'Zo';
  let mood = 'happy';
  console.log('Hello ' + name + ", are you feeling " + mood + ' ' + time + '?');


  console.log("Oh no, I'm sorry you're feeling " + mood + ' ' + time + '.');
  mood = 'sad';
};

debugFunc();

module.exports = {
  debugFunc,
};

debugger;
