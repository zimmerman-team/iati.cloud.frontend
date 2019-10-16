import React from 'react';
import styled from 'styled-components';
import { useEffectOnce } from 'react-use';

import { Route, Switch } from 'react-router';
import { DocDetail } from 'app/modules/Documentation/common/DocDetail';
import { DocLanding } from 'app/modules/Documentation/common/DocLanding';
import { useStoreActions } from 'app/modules/Documentation/state/store';

const RouteContainer = styled.div`
  position: sticky;
  top: 187px;
  overflow-y: scroll;
  height: calc(100vh - 187px);
  padding-left: 20px;
  padding-right: 20px;
`;

export const DocumentationRoutes = () => {
  const fetchPostman = useStoreActions(actions => actions.postmanData.fetch);

  useEffectOnce(() => {
    console.log('Running effect once on mount');

    fetchPostman();

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  return (
    <RouteContainer>
      <Switch>
        <Route exact path="/documentation/introduction">
          <DocLanding />
        </Route>
        <Route path="/documentation/:_postman_id">
          <DocDetail />
        </Route>
      </Switch>
    </RouteContainer>
  );
};
