import { Artwork } from 'types/data.type';
import axios from 'axios';

export const getArtwork = async (id?: string) => {
  if (!id) {
    throw new Error('Artwork id is required');
  }
  const { data } = await axios.get<Artwork>(
    `${process.env.REACT_APP_API_URI}/${id}.json`,
  );
  return data;
};
