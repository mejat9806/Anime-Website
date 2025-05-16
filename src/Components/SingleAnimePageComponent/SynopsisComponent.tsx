import { Divider, Stack, Typography } from '@mui/material';

const SynopsisComponent = ({ synopsis }: { synopsis: string }) => {
  return (
    <Stack
      sx={{
        margin: '0 auto',
      }}
    >
      <Typography
        fontWeight="bold"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
        }}
      >
        Synopsis
      </Typography>
      <Divider sx={{ marginY: '8px' }} />
      <Typography variant="subtitle1">
        {synopsis.length !== 0 ? synopsis : 'No data'}
      </Typography>
    </Stack>
  );
};

export default SynopsisComponent;
