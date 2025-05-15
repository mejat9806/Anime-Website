import { Stack, Typography } from '@mui/material';
import type { AnimeDatatype } from '../../@types/animeType';
import { RatingComponent } from './RatingComponent';
import SynopsisComponent from './SynopsisComponent';
import { BackgroundComponent } from './BackgroundComponent';
import { RelatedComponent } from './RelatedComponent';

export const AdditionalInfo = ({ props }: { props: AnimeDatatype }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        gap: '30px',
      }}
      direction={{ xs: 'column' }}
    >
      <Typography variant="h4">Additional Info</Typography>
      <RatingComponent props={props} />
      <SynopsisComponent synopsis={props.synopsis} />
      <BackgroundComponent background={props.background} />
      <RelatedComponent relatedEntries={props.relations} />
    </Stack>
  );
};
