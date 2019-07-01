import React from 'react';
import ChipInput from 'material-ui-chip-input';
import styled from 'styled-components';
import Chip from 'app/components/datadisplay/Chip';
import BaseHelperText from 'app/components/inputs/selects/common/BaseHelperText';

interface ChippieProps {
  value?: any;
}

const Component = styled(props => <ChipInput {...props} />)`
  && {
    display: flex;
    flex-direction: column;
    background: #f0f3f7;
    padding-left: 14px;
    padding-top: 6px;
    padding-bottom: 8px;
    width: 100%;

    & [class*='WAMuiChipInput-inputRoot'] {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
`;

const Container: React.FC<ChippieProps> = props => {
  return (
    <React.Fragment>
      <Component
        clickable="false"
        disableUnderline
        defaultValue={[
          'Activities',
          'Activity',
          'Locations',
          'Transactions',
          'Organisation'
        ]}
        chipRenderer={(
          { value, isFocused, isDisabled, handleClick, handleDelete },
          key
        ) => <Chip key={key} label={value} />}
        InputLabelProps={{
          shrink: false
        }}
        {...props}
      />
      <BaseHelperText
        helperText="See "
        linkText="OIPA documentation"
        url="https://www.zimmermanzimmerman.nl"
        helperTextAfter=" for full list of possible elements"
      />
    </React.Fragment>
  );
};

export default Container;
