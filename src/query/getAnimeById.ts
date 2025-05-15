import axios from 'axios';
import { ENDPOINT } from '../constants/ENDPOINT';
import { useQuery } from '@tanstack/react-query';
import type { AnimeDatatype } from '../@types/animeType';
export type SingleAnimeData = {
  data: AnimeDatatype;
};
const getAnimeById = async (id: string) => {
  const res = await axios.get<SingleAnimeData>(`${ENDPOINT}/${id}/full`);
  return res.data;
};

const useGetAnimeById = (id: string) => {
  return useQuery<SingleAnimeData>({
    queryKey: ['animes', id],
    queryFn: () => getAnimeById(id),
  });
};

export default useGetAnimeById;
