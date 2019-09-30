import { Box, Button, Grid } from '@material-ui/core';
import { RequestResponseModel } from 'app/modules/Documentation/common/DocCallPreview/common/RequestResponse/model';
// import { response } from 'app/modules/Documentation/common/DocCallPreview/common/RequestExample/response';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

import { RequestModel, UrlModel } from 'app/modules/Documentation/state/model';
import { useStoreState } from 'app/modules/Documentation/state/store';
import React, { Suspense } from 'react';
import useFetch from 'use-http';
import styled from 'styled-components';

const ResponseDiv = styled.div`
  color: white;
  padding: 20px;
  padding-top: 0;
`;

const ResponseButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    width: 50%;
    cursor: pointer;
  }
`;

export const RequestResponse = () => {
  const requestObj: RequestModel = useStoreState(
    state => state.request.activeRequest
  );

  const url: UrlModel = requestObj.url;

  const moddedURL = url.raw.replace(
    '{{url}}',
    'https://test-datastore.iatistandard.org'
  );

  const [request, response] = useFetch(moddedURL);
  const handleClick = () => request.get();

  // const { data, loading } = useFetch(moddedURL, { onMount: true });

  console.log('leggo');

  return (
    <Grid container>
      <Box height="20px" width="100%" />
      {/* header */}
      <Grid item md={12}>
        <ResponseDiv>Example response</ResponseDiv>
      </Grid>

      {/* button */}
      {handleClick && (
        <Grid item md={12}>
          <ResponseDiv>
            <ResponseButton onClick={handleClick}>
              Execute request
            </ResponseButton>
          </ResponseDiv>
        </Grid>
      )}

      {/* content */}
      <Grid item md={12}>
        <ResponseDiv>
          {request.loading
            ? 'loading....'
            : response && (
                <code style={{ display: 'block' }}>
                  <pre>{JSON.stringify(response, null, 2)}</pre>
                </code>
              )}
        </ResponseDiv>
      </Grid>
    </Grid>
  );
};
