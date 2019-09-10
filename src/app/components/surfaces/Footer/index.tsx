import React from 'react';
import { Grid, Typography, Container, Box } from '@material-ui/core';
import { Mail, Phone, Star } from '@material-ui/icons';
import { IATILogoWhite } from 'app/components/svgs/IATILogo';
import { ZZLogo } from 'app/components/svgs/ZZLogo';

export const Footer = () => {
  return (
    <Box bgcolor="#155366" width="100%" position="absolute" bottom="0">
      <Container maxWidth="lg">
        {/*LEFT ITEM*/}
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ height: '200px' }}
        >
          <Grid item>
            <IATILogoWhite />
          </Grid>

          {/*MIDDLE ITEM*/}
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-between"
              spacing={2}
            >
              <Grid container item alignItems="center">
                <Phone style={{ marginRight: '16px', fill: 'white' }} />
                <Typography variant="body1" color="textSecondary">
                  +31 (0)00 000 00 00
                </Typography>
              </Grid>
              <Grid container item alignItems="center">
                <Mail style={{ marginRight: '16px', fill: 'white' }} />
                <Typography variant="body1" color="textSecondary">
                  info@iatistandard.org
                </Typography>
              </Grid>
              <Grid container item alignItems="center">
                <Star style={{ marginRight: '16px', fill: 'white' }} />
                <Typography variant="body1" color="textSecondary">
                  @iati
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/*RIGHT ITEM*/}
          <Grid item>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid container item alignItems="center">
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    style={{ marginRight: '16px' }}
                  >
                    powered by OIPA from
                  </Typography>
                  <ZZLogo
                    onClick={() =>
                      window.open('https://www.zimmermanzimmerman.nl', '_blank')
                    }
                    style={{ cursor: 'pointer' }}
                  />
                </Grid>
              </Grid>

              {/*This one is confusing, couldn't get the type to align center.*/}
              <Grid
                container
                // item
                style={{ marginTop: '32px', width: '350px' }}
                wrap="wrap"
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  align="center"
                >
                  Code licensed under the GNU AGPL. Documentation licensed under
                  CC BY 3.0.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
