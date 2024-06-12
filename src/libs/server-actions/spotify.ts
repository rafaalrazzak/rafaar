'use server';

import { addSongToPlaylist } from '../api';

export async function actionAddToPlaylist(songId: string) {
  return await addSongToPlaylist(songId);
}
