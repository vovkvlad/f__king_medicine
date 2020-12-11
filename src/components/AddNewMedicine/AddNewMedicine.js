import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  newMedForm: {
    display: 'flex',
    marginTop: theme.spacing(3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),

    '& > *': {
      marginRight: theme.spacing(4),
    }
  },

  medicineNameField: {
    flexGrow: 3,
  },

  frequencyField: {
    flexGrow: 1,
  }
}));

export function AddNewMedicine({ onMedicineAdd }) {
  const classes = useStyles();
  const [medicineName, setMedicineName] = useState('')
  const [frequency, setFrequency] = useState()


  const resetFields = useCallback(() => {
    setMedicineName('');
    setFrequency(0);
  }, [setMedicineName, setFrequency])

  const addNewMed = useCallback(() => {
    onMedicineAdd({
      name: medicineName,
      frequency,
      progress: 0,
    })
    resetFields()
  }, [onMedicineAdd, medicineName, frequency]);


  return (
    <div className={classes.newMedForm}>
      <TextField
        id="medicine_name"
        label="Medicine name "
        className={classes.medicineNameField}
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
        autoComplete="off"
      />
      <TextField
        id="number_per_day"
        label="Count per day"
        type="number"
        className={classes.frequencyField}
        inputProps={{
          min: 0,
          step: 1,
        }}
        value={frequency}
        onChange={(e) => setFrequency(e.target.valueAsNumber)}
        InputLabelProps={{ shrink: frequency !== undefined  }}
      />
      <Fab
        size="medium"
        color="primary"
        disabled={!medicineName || !frequency}
        aria-label="add"
        onClick={addNewMed}
      >
        <AddIcon/>
      </Fab>
    </div>
  )
}