import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { AnimeListRenderer } from '../../Components/AnimeListRender/AnimeListRenderer';
import { useSearchParams } from 'react-router-dom';
import useGetAllAnimeList from '../../query/getAllAnimeList';
import PagePagination from '../../Components/PagePagination/Pagination';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import useDebounce from '../../@utils/useDebounce';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const search = searchParams.get('search') || '';
  const debouncedInputValue = useDebounce({ search, delay: 250 });
  const { data: animeLists, isLoading: isloadingAllAnimeData } =
    useGetAllAnimeList({ search: debouncedInputValue, page });
  const totalPage = animeLists?.pagination.last_visible_page;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set('search', newSearch);
    newParams.set('page', '1');
    setSearchParams(newParams);
  };
  return (
    <Stack
      sx={{
        display: 'flex',
        gap: '20px',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <TextField
        onChange={handleInputChange}
        type="text"
        defaultValue={search}
        sx={{ background: 'white', borderRadius: '10px' }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SavedSearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      {!isloadingAllAnimeData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={2}>
            <PagePagination totalPages={totalPage} />
          </Stack>
        </div>
      )}
      {animeLists?.data.length === 0 && !isloadingAllAnimeData ? (
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10rem',
          }}
        >
          <Typography>No Anime Found</Typography>{' '}
        </Stack>
      ) : (
        <AnimeListRenderer
          data={animeLists?.data ?? []}
          isLoading={isloadingAllAnimeData}
        />
      )}

      {!isloadingAllAnimeData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={2}>
            <PagePagination totalPages={totalPage} />
          </Stack>
        </div>
      )}
    </Stack>
  );
};

export default MainPage;
