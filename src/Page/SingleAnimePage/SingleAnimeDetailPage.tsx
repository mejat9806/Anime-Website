import { useNavigate, useParams } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  CircularProgress,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import { MainInfo } from '../../Components/SingleAnimePageComponent/MainInfo';
import useGetAnimeById from '../../query/getAnimeById';
import { AdditionalInfo } from '../../Components/SingleAnimePageComponent/AdditionalInfo';

export const SingleAnimeDetailPage = () => {
  const { animeID } = useParams();
  const navigation = useNavigate();
  const { data: animeDetail, isLoading } = useGetAnimeById(animeID ?? '');
  if (isLoading) {
    return (
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100svh - 100px)',
          overflow: 'hidden',
        }}
      >
        <CircularProgress />
      </Stack>
    );
  }

  if (!animeID || !animeDetail) {
    return <Typography>No anime found</Typography>;
  }
  return (
    <Stack alignItems="flex-start">
      <Button onClick={() => navigation('/')}>Go back</Button>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', padding: '10px' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid size={3}>
          <MainInfo props={animeDetail.data} />
        </Grid>
        <Grid>
          <Divider
            orientation="vertical"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          />
        </Grid>

        <Grid size={7}>
          <Box sx={{ p: 2 }}>
            <AdditionalInfo props={animeDetail.data} />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
