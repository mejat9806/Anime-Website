import { Divider, Stack, Typography } from '@mui/material';
import type { AnimeDatatype } from '../../@types/animeType';
import { capitalizeFirstLetter } from '../../@utils/utils';

export const MainInfo = ({ props }: { props: AnimeDatatype }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Typography fontWeight={'bold'}>{props.title}</Typography>
      <img src={props.images.webp.image_url} alt={props.title} width={200} />
      <Divider />
      <div>
        <Typography variant="h6">Alternative Titles</Typography>
        <Divider sx={{ marginBottom: '10px' }} />
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Synonyms:</span>{' '}
          {props.title_synonyms}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Japanese:</span>{' '}
          {props.title_japanese}
        </Typography>
      </div>
      <div>
        <Typography variant="h6">Info</Typography>
        <Divider sx={{ marginBottom: '10px' }} />
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Type:</span> {props.type ?? ''}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Episodes:</span>{' '}
          {props.episodes ?? ''}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Aired:</span>{' '}
          {props.aired.string ?? ''}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Premiered:</span>
          {capitalizeFirstLetter(props.season ?? '')}{' '}
          {props.aired.prop.from.year}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Broadcast:</span>{' '}
          {props.broadcast.string ?? 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Producers:</span>{' '}
          {props.producers && props.producers.length > 0
            ? props.producers.map((producer, index) => (
                <span key={producer.name}>
                  {producer.name}
                  {index < props.producers.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Licensors:</span>{' '}
          {props.licensors && props.licensors.length > 0
            ? props.licensors.map((licensor, index) => (
                <span key={licensor.name}>
                  {licensor.name}
                  {index < props.licensors.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Studios:</span>{' '}
          {props.studios && props.studios.length > 0
            ? props.studios.map((studio, index) => (
                <span key={studio.name}>
                  {studio.name}
                  {index < props.studios.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Sources:</span>{' '}
          {props.source ?? 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Genres:</span>{' '}
          {props.genres && props.genres.length > 0
            ? props.genres.map((genre, index) => (
                <span key={genre.name}>
                  {genre.name}
                  {index < props.genres.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Themes:</span>{' '}
          {props.themes && props.themes.length > 0
            ? props.themes.map((theme, index) => (
                <span key={theme.name}>
                  {theme.name}
                  {index < props.themes.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Demographic:</span>{' '}
          {props.demographic && props.demographic.length > 0
            ? props.demographic.map((demographic, index) => (
                <span key={demographic.name}>
                  {demographic.name}
                  {index < props.demographic.length - 1 ? ', ' : ''}
                </span>
              ))
            : 'No data'}{' '}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Duration:</span>{' '}
          {props.duration ?? 'No data'}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Rating:</span>{' '}
          {props.rating ?? 'No data'}
        </Typography>
      </div>
      <div>
        <Typography variant="h6">Statistics</Typography>
        <Divider sx={{ marginBottom: '10px' }} />
        <Typography variant="body2">
          <span style={{ fontWeight: 'bold' }}>Score:</span> {props.score} (
          <Typography variant="caption">{props.scored_by} users</Typography>)
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Ranked:</span> #{props.rank}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Popularity:</span> #
          {props.popularity}
        </Typography>
        <Typography variant="subtitle2">
          <span style={{ fontWeight: 'bold' }}>Members:</span> {props.members}
        </Typography>
      </div>
    </Stack>
  );
};
