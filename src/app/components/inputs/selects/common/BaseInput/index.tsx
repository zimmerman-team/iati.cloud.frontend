import React from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

const BaseComponent = styled(props => <InputBase {...props} />)`
  && {
    border-radius: 2px;
    height: 48px;
  }
`;

const BaseInput: React.FC = props => {
  return <BaseComponent {...props} name="age" id="outlined-age-simple" />;
};

export default BaseInput;