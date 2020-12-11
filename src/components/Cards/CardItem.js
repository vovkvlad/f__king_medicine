import React, { useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import LinearProgress from '@material-ui/core/LinearProgress'

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    flexBasis: '60px'
  },

  headerRow: {
    display: 'flex',
    alignItems: 'center',
  },

  checkButton: {
    marginRight: theme.spacing(4)
  },

  rightPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },

  nameAndProgress: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },

  name: {
    marginRight: theme.spacing(2),
  },

  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },

  linearProgress: {
    width: '100%',
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },

  numberProgress: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    flexGrow: 0,
  },

  rightActionBar: {
    display: 'flex',
    flexShrink: 0,
  }
}));

export function CardItem({ item, onPillTaken, onPillRemoved, onProgressReset }) {
  const classes = useStyles();

  const percentage = useMemo(() => {
    return Math.round((item.progress / item.frequency) * 100)
  }, [item.frequency, item.progress]);

  return (
    <Paper elevation={3} className={classes.cardContainer}>
      <div className={classes.headerRow}>
        <IconButton color="primary" className={classes.checkButton} onClick={() => onPillTaken(item)}>
          <CheckCircleIcon/>
        </IconButton>

        <div className={classes.rightPart}>
          <div className={classes.nameAndProgress}>
            <Typography variant="h5" className={classes.name}>{item.name}</Typography>
            <div className={classes.progressContainer}>
              <LinearProgress variant="determinate" value={percentage} className={classes.linearProgress}/>
              <Typography variant="h6" className={classes.name}>{`[${item.progress}/${item.frequency}]`}</Typography>
            </div>
          </div>

          <div className={classes.rightActionBar}>
            <IconButton
              color="primary"
              onClick={() => onProgressReset(item)}
            >
              <RotateLeftIcon/>
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => onPillRemoved(item)}
            >
              <DeleteIcon/>
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  )
}