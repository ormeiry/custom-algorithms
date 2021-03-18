// onChange ->
function callSearch(funcToRun, duration) {
  let timerID;
  return function () {
    if (timerID) clearTimeout(timerID);
    timerID = setTimeout(() => {
      funcToRun();
    }, duration);
  };
}

const func = () => console.log('Sending a Request to the server...');
const search = callSearch(func, 1000);
search();
search();
search();
search();
search();
search();
search();
search();
search();
search();
search();
search();

// Will send only 1 GET Request to the server.
