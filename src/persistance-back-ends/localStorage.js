import dayjs from 'dayjs';

const LOCAL_STORAGE_KEY = 'pills_progress'
const DATE_FORMAT = 'YYYY-MM-DD';

let getData = () => [];
let updateData = () => {};
let removeAllData = () => {};

if(process.browser) {
  getData = () => {
    const json = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(!json) {
      return [];
    }

    // check data for today:
    const persistedData = JSON.parse(json);
    const currentDay = dayjs().format(DATE_FORMAT);

    if(persistedData[currentDay]) {
      return persistedData[currentDay];
    }

    // if there is no data for current day - check whether there is dta for previous dat, and copy data from there, but
    // with reset progress
    const previousDay = dayjs().subtract(1, 'day').format(DATE_FORMAT);
    if(persistedData[previousDay]) {
      const valuesForCurrentDay = persistedData[previousDay].map(item => ({
        ...item,
        progress: 0,
      }))
      return valuesForCurrentDay;
    }

    // if none of the above - return MF empty array
  };

  updateData = (value) => {
    const currentDay = dayjs().format(DATE_FORMAT);
    const currentPersistentData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    const updatedValue = {
      ...currentPersistentData,
      [currentDay]:value,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedValue));
  };

  removeAllData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };
}

export const localStorageBackEnd = {
  getData,
  updateData,
  removeAllData,
}