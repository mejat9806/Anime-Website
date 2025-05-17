import axios from 'axios';
import { ENDPOINT } from '../constants/ENDPOINT';
import { useQuery } from '@tanstack/react-query';
import type { AnimeApiReturn } from '../@types/animeType';

const getAllAnimeList = async ({
  page = '1',
  search = '',
}: {
  page: string;
  search: string;
}) => {
  const query = new URLSearchParams({
    page: String(page),
    ...(search && { q: search }),
  });

  const res = await axios.get<AnimeApiReturn>(`${ENDPOINT}?${query}`);
  return res.data;
};

const useGetAllAnimeList = ({
  page,
  search,
}: {
  page: string;
  search: string;
}) => {
  return useQuery<AnimeApiReturn>({
    queryKey: ['animes', page, search],
    queryFn: () => getAllAnimeList({ search, page }),
  });
};

export default useGetAllAnimeList;
