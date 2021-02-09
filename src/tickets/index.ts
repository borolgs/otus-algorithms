import { runTests } from '../common';
import { getLuckyCountV3 } from './lucky-tickets/tickets';
import { getLength } from './string-counter/string-counter';

function run() {
  try {
    // runTests('0.String', (input, output) => getLength(input).toString() === output);
    runTests('1.Tickets', (input, output) => getLuckyCountV3(Number(input)).toString() === output);
  } catch (error) {
    console.log(error);
  }
}

run();
