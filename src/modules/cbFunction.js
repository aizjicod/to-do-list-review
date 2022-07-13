import listData from './list-data.js';
import storage from './storage.js';

// --------------------------functions--------------------------------//

const checkFunction = (li, index) => {
  li.classList.toggle('completed');
  li.classList.remove('incorrect');
  if (index.completed === false) {
    index.completed = true;
  } else {
    index.completed = false;
  }
  storage.setStorage(listData);
};

export default checkFunction;