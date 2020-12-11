import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { CardItem } from './CardItem';

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  }
}))

export function Cards({ items, onPillTaken, onPillRemoved, onProgressReset }) {
  const classes = useStyles();

  return (
    <div className={classes.cardsContainer}>
      {items.map((item) => {
        return (
          <CardItem
            key={item.name}
            item={item}
            onPillTaken={onPillTaken}
            onPillRemoved={onPillRemoved}
            onProgressReset={onProgressReset}
          />
        );
      })}
    </div>
  );
}