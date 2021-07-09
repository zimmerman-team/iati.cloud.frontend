// cc:api documentation module#; content - landing
import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ApiList } from 'app/modules/documentation-module/common/DocDetail/common/ApiBaseList';
import { useStoreState } from 'app/modules/documentation-module/state/store';
import { Root } from 'app/modules/documentation-module/state/RootModel';
import { HeaderH6 } from 'app/modules/documentation-module/common/DocLanding/common/ui/HeaderH6';
import { LoadingIndicator } from './common/ui/LoadingIndicator';

export const DocLanding = () => {
  // @ts-ignore
  const data: Root = useStoreState((state) => state.data && state.data);
  const loading = useStoreState((state) => state.loading);

  const collection = data && data.collection;

  return (
    <>
      <Box width="100%" height="54px" />
      <Grid container>
        <Grid item md={11}>
          {/* todo: in due time the css attribute should be cleaned */}
          <Typography
            variant="h6"
            css={`
              && {
                line-height: 30px;
                font-weight: normal;
              }
            `}
          >
            <b>API Documentation</b>
          </Typography>
        </Grid>

        <Box width="100%" height="30px" />

        {/* description */}
        <Grid item md={12}>
          <Typography variant="body2">
            This API provides programmatic access to query IATI data. The API
            responses are available in JSON, XML and CSV format. The API is
            developed using the Django rest framework and also makes use of
            Solr, an open source enterprise search platform, written in Java.
          </Typography>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------ */}
      <Box width="100%" height="74px" />
      {/* -------------------- */}
      {/* available endpoints */}
      <Grid container>
        <Grid item md={12}>
          <HeaderH6
            css={`
              && {
                margin-bottom: 8px;
              }
            `}
          >
            Available endpoints
          </HeaderH6>
        </Grid>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <Grid item md={12}>
            {collection && (
              <ApiList info={collection.info} item={collection.item} />
            )}
          </Grid>
        )}
      </Grid>
      {/* ---------- */}
      <Box width="100%" height="50px" />
    </>
  );
};
