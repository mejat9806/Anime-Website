import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Skeleton,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import type { AnimeDatatype } from '../../@types/animeType';
type AnimeListType = {
  data: AnimeDatatype[];
  isLoading: boolean;
};
export const AnimeListRenderer = ({ data, isLoading }: AnimeListType) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      {isLoading
        ? Array.from(new Array(20)).map((_, index) => (
            <Grid
              key={index}
              sx={{ width: '20em', marginTop: '40px' }}
              spacing={{ xs: 1 }}
            >
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Grid>
          ))
        : data.map((anime) => (
            <Grid
              key={`${anime.mal_id}`}
              border={1}
              sx={{
                borderColor: 'grey.300',
                display: 'flex',
                justifyContent: 'center',
                width: '20em',
              }}
            >
              <Card
                style={{
                  backgroundColor: 'whitesmoke',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  height: '100%',
                }}
                onClick={() => navigate(`anime/${anime.mal_id}`)}
              >
                <CardActionArea
                  style={{
                    height: '100%',
                  }}
                >
                  <CardContent
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '0px',
                      height: '100%',
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 'bold', textAlign: 'center' }}
                    >
                      {anime.title}
                    </Typography>
                    <Divider />
                    <div
                      style={{
                        padding: '10px 20px',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div>
                        {anime.genres.map((genre) => (
                          <Chip
                            sx={{
                              height: 'auto',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}
                            label={genre.name}
                            key={`${anime.mal_id}-${genre.name}`}
                          />
                        ))}
                      </div>
                    </div>
                    <Divider style={{ margin: '0' }} />
                    <Box
                      sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        gap: '5px',
                        padding: '10px',
                      }}
                    >
                      <Box sx={{ width: '100%', padding: 1 }}>
                        <img
                          src={anime.images.webp.image_url}
                          alt={anime.title}
                          style={{
                            width: '100%',
                            height: '20em',
                            objectFit: 'fill',
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: '50%',
                          display: 'flex',
                          gap: '5px',
                          flexDirection: 'column',
                        }}
                      >
                        <div>
                          <Typography fontSize={13}>
                            <span style={{ fontWeight: 'bold' }}>
                              Synopsis:
                            </span>{' '}
                            {anime.synopsis
                              ? anime.synopsis.slice(0, 50) + '...'
                              : 'nothing'}
                          </Typography>
                          <Divider />
                        </div>
                        <Typography fontSize={13}>
                          <span style={{ fontWeight: 'bold' }}>Studio:</span>{' '}
                          {anime.studios.length > 0 ? (
                            anime.studios
                              .map((studio) => studio.name)
                              .join(', ')
                          ) : (
                            <span>No Details</span>
                          )}
                        </Typography>
                        <Typography fontSize={13}>
                          <span style={{ fontWeight: 'bold' }}>Source:</span>{' '}
                          {anime.source}
                        </Typography>
                        <Typography fontSize={13}>
                          <span style={{ fontWeight: 'bold' }}>Theme: </span>
                          {anime.themes.length > 0
                            ? anime.themes.map((theme) => theme.name).join(', ')
                            : 'no info'}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};
