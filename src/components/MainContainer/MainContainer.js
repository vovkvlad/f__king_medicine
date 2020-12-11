import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { AddNewMedicine } from '../AddNewMedicine'
import { Cards } from '../Cards';

import { usePills } from '../../usePills';
import { localStorageBackEnd } from '../../persistance-back-ends/localStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(2),
  },

  leftContainer: {
    height: '90vh',
  }
}));

export function MainContainer() {
  const classes = useStyles();

  const {
    pills,
    onPillAdd,
    onPillRemoved,
    onPillTaken,
    onProgressReset,
  } = usePills(localStorageBackEnd);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div className={classes.leftContainer}>
            <AddNewMedicine onMedicineAdd={onPillAdd}/>
            <Cards
              items={pills}
              onPillTaken={onPillTaken}
              onPillRemoved={onPillRemoved}
              onProgressReset={onProgressReset}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}