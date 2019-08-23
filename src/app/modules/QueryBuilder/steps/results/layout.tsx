import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useSize } from 'react-use';
import styled from 'styled-components';
import { Skeletor } from 'app/components/utils/Skeletor';

const FilePlaceholder = () => {
  return (
    <Grid container spacing={4}>
      <Grid item md={8}>
        <Skeletor />
      </Grid>
      <Grid item md={4}>
        <Skeletor />
      </Grid>
    </Grid>
  );
};

export const ResultsLayout = () => {
  return (
    <Grid container spacing={4}>
      {/** output sample */}
      <Grid item md={12}>
        <Skeletor height="300px" />
      </Grid>

      {/** files */}
      <Grid item md={12}>
        <FilePlaceholder />
        <FilePlaceholder />
        <FilePlaceholder />
      </Grid>
    </Grid>
  );
};
