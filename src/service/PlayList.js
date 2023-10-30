import { domainURL, artistPlaySongs, godPlaySongs } from './rest_Config';
export async function getPlayList() {
  try {
    let songsList = await fetch(`${domainURL}/${artistPlaySongs}`);
    let result = await songsList.json();
    songsList = null;
    return result.data;
  } catch (error) {
    throw error;
  }
}
