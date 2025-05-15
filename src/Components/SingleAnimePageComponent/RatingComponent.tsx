import { Card, Divider, Stack, Typography } from '@mui/material';
import type { AnimeDatatype } from '../../@types/animeType';
import { capitalizeFirstLetter } from '../../@utils/utils';

export const RatingComponent = ({ props }: { props: AnimeDatatype }) => {
  return (
    <Card
      sx={{
        padding: '10px',
        background: 'rgba(46, 81, 162, 0.3)',
        width: {
          xs: '100%',
          sm: '80%',
          md: '60%',
          lg: '100%',
        },
        margin: '0 auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="start"
        spacing={2}
      >
        <Stack
          sx={{
            width: { xs: '100%', sm: '100px' },
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#2e51a2',
              color: 'white',
              width: '100%',
              height: '50px',
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Score
            </Typography>
          </div>
          <Typography variant="h5" fontWeight="bold">
            {props.score}
          </Typography>
          <Typography variant="subtitle2">{props.scored_by} Users</Typography>
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', sm: 'block' },
            mx: 2,
          }}
        />

        <Stack spacing={1}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Typography variant="h6">
              Ranked: <span style={{ fontWeight: 'bold' }}>{props.rank}</span>
            </Typography>
            <Typography variant="h6">
              Popularity:{' '}
              <span style={{ fontWeight: 'bold' }}>{props.popularity}</span>
            </Typography>
            <Typography variant="h6">
              Members:{' '}
              <span style={{ fontWeight: 'bold' }}>{props.members}</span>
            </Typography>
          </Stack>
          <Typography sx={{ color: 'rgb(79, 94, 131)' }}>
            {capitalizeFirstLetter(props.season ?? '')}{' '}
            {props.aired.prop.from.year}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
