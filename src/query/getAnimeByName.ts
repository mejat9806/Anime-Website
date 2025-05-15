import axios from 'axios';
import { ENDPOINT } from '../constants/ENDPOINT';
import { useQuery } from '@tanstack/react-query';
import type { AnimeDatatype } from '../@types/animeType';
export type SingleAnimeData = {
  data: AnimeDatatype[];
};
const getAnimeByName = async (name: string) => {
  const res = await axios.get<SingleAnimeData>(`${ENDPOINT}?q=${name}`);
  return res.data;
};

const useGetAnimeByName = (name: string) => {
  return useQuery<SingleAnimeData>({
    queryKey: ['animes', name],
    queryFn: () => getAnimeByName(name),
  });
};

export default useGetAnimeByName;
