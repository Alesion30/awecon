import React from 'react';
import { Heading, withStyles } from 'arwes';

const styles = (theme: any) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    margin: 0,
  },
});

const CustomHeading = withStyles(styles)(({ classes, children }: any) => (
  <Heading className={classes.root} node="h1">
    {children}
  </Heading>
));
export default CustomHeading;
