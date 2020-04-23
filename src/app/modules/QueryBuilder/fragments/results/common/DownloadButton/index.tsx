/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import 'styled-components/macro';
import { IconButton } from 'app/components/inputs/buttons/IconButton';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Download from '@material-ui/icons/GetApp';
import { useToggle } from 'react-use';
import {
  downloadFile,
  cleanIframes,
} from 'app/modules/QueryBuilder/fragments/results/util';

type Props = {
  text?: string;
  type?: string;
  queryURL?: string;
  fileName?: string;
};

export const DownloadButton = props => {
  const [downloading, toggle] = useToggle(false);

  return (
    <div
      onClick={() => {
        downloadFile(props.queryURL, props.fileName).then(() => cleanIframes());
        toggle();
      }}
    >
      {downloading ? (
        <IconButton
          icon={<CloudDownloadIcon />}
          label="Preparing download..."
          bgcolor="green"
        />
      ) : (
        <IconButton icon={<Download />} label={`Download ${props.type}`} />
      )}
    </div>
  );
};