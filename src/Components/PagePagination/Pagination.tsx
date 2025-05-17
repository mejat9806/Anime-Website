import { Pagination, Stack } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
type PaginationProps = {
  totalPages?: number;
};
const PagePagination = ({ totalPages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const handleChange = (_: unknown, value: number) => {
    setSearchParams({ page: value.toString() });
  };
  return (
    <Stack spacing={2}>
      <Pagination
        defaultPage={1}
        count={totalPages}
        onChange={handleChange}
        page={Math.min(currentPage, totalPages ?? 1)}
      />
    </Stack>
  );
};

export default PagePagination;
