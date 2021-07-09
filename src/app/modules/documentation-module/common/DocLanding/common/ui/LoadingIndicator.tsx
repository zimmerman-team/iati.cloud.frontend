import React from 'react';
import styled from 'styled-components/macro';
import { CircularProgress } from '@material-ui/core';

const LoadingContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-top: 10rem;
`;

export const LoadingIndicator = () => (
  <LoadingContainer>
    <CircularProgress />
  </LoadingContainer>
)
