import axios from 'axios';
import { ENDPOINT } from '../constants/ENDPOINT';
import { useQuery } from '@tanstack/react-query';
import type { AnimeApiReturn } from '../@types/animeType';

const getAllAnimeList = async (page: string) => {
  const res = await axios.get<AnimeApiReturn>(`${ENDPOINT}?page=${page}`);
  return res.data;
};

const useGetAllAnimeList = (page: string) => {
  return useQuery<AnimeApiReturn>({
    queryKey: ['animes', page],
    queryFn: () => getAllAnimeList(page),
  });
};

export default useGetAllAnimeList;
