import { Stack } from '@mui/material';
import { AnimeListRenderer } from '../../Components/AnimeListRender/AnimeListRenderer';
import { useSearchParams } from 'react-router-dom';
import useGetAllAnimeList from '../../query/getAllAnimeList';
import PagePagination from '../../Components/PagePagination/Pagination';

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '';
  const { data: animeLists, isLoading: isloadingAllAnimeData } =
    useGetAllAnimeList(page);
  console.log(animeLists);
  const totalPage = animeLists?.pagination.last_visible_page;
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
      }}
    >
      {!isloadingAllAnimeData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={2}>
            <PagePagination totalPages={totalPage} />
          </Stack>
        </div>
      )}
      <AnimeListRenderer
        data={animeLists?.data ?? []}
        isLoading={isloadingAllAnimeData}
      />
      {!isloadingAllAnimeData && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={2}>
            <PagePagination totalPages={totalPage} />
          </Stack>
        </div>
      )}
    </div>
  );
};

export default MainPage;
