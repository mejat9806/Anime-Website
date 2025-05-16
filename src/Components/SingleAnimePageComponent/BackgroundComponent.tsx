import { Divider, Stack, Typography } from '@mui/material';

export const BackgroundComponent = ({ background }: { background: string }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: { xs: '100%', lg: '100%' },
        margin: '0 auto',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
        }}
        fontWeight={'bold'}
      >
        Background
      </Typography>
      <Divider />
      <Typography variant="subtitle1">
        {background.length !== 0 ? background : 'No data'}
      </Typography>
    </Stack>
  );
};
