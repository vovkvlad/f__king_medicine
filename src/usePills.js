import { useState, useCallback, useEffect } from 'react';

export function usePills(backEnd) {
  // this are 3 methods each back-end should implement
  const {
    getData,
    updateData,
    removeAllData,
  } = backEnd;

  const [pills, setPills] = useState(getData());

  const onPillAdd = useCallback((item) => {
    const newPillsArr = [...pills, item];
    setPills(newPillsArr);
  }, [setPills, pills])

  const onPillTaken = useCallback(item => {
    const indexToDelete = pills.findIndex(pill => pill.name === item.name);
    const pillToEdit = pills[indexToDelete];
    if (pillToEdit.progress < pillToEdit.frequency) {
      const newPill = {
        ...pillToEdit,
        progress: pillToEdit.progress + 1,
      };
      pills.splice(indexToDelete, 1, newPill)
      setPills([...pills])
    }

  }, [pills, setPills]);

  const onPillRemoved = useCallback(item => {
    const indexToDelete = pills.findIndex(pill => pill.name === item.name);
    pills.splice(indexToDelete, 1);
    setPills([...pills])
  }, [pills, setPills])

  const onProgressReset = useCallback(item => {
    const indexToDelete = pills.findIndex(pill => pill.name === item.name);
    const pillToEdit = pills[indexToDelete];
    const newPill = {
      ...pillToEdit,
      progress: 0,
    };
    pills.splice(indexToDelete, 1, newPill)
    setPills([...pills])
  }, [pills, setPills]);

  // every time pills are updated - save it to the back-end
  useEffect(() => {
    updateData(pills);
  }, [pills])

  return {
    pills,
    onPillAdd,
    onPillRemoved,
    onPillTaken,
    onProgressReset,
  };
}