import React from 'react';
import BaseAppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';
import AppBarButton from 'app/components/inputs/buttons/AppBarButton';
import Grid from '@material-ui/core/Grid';
import { IATILogoColor } from 'app/components/svgs/IATILogo';
import { Link } from 'react-router-dom';

type AppBarProps = {
  label?: string;
  size?: string;
};

const BaseComponent = styled(props => <BaseAppBar {...props} />)`
  && {
    //padding: 20px 45px 20px 20px;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 45px;
    position: sticky;
    top: 40px;
  }
`;

const AppBar = (props: AppBarProps) => {
  return (
    <BaseComponent position="static" elevation={0} {...props}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item md={5}>
          <Link to="/">
            {' '}
            <IATILogoColor />
          </Link>
        </Grid>

        <Grid
          item
          md={7}
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <AppBarButton label="HOME" url="/" />
          <AppBarButton label="ABOUT" url="/about" />
          <AppBarButton
            label="QUERY BUILDER"
            url="/querybuilder/core-filters"
          />
          <AppBarButton
            label="API DOCUMENTATION"
            url="/documentation/introduction"
          />

          {/* <AppBarButton disabled label="GUIDANCE" url="/guidance" />*/}


        </Grid>
      </Grid>
    </BaseComponent>
  );
};

export default AppBar;
