import { NextResponse } from 'next/server';

const client_id = 'f105ed966a1c4c0db06302a197b08c4a';
const client_secret = '0fde6fb618e74a388d91bd89c6494674';
const refresh_token = 'AQATic5sAynA8r0aF07UzyYTH6cShffuH5zxP-HW69uBJq4ReHTnG9NxztkeGGhbfJFFOQ-q4TZxg28-c3TUbB5cgy0Z9GIQAk-lcoOX4x2ibvelLEjSDctsTEF4aoJfuV4Kg0XVuJ0dKasvHn_u1PVVT3XlYcbTFyqeZN0tlyMpGmNkTOYYxN0-XRa86dQPFvpEJDHymOz_Ohemn0zBrUYtaywCBpe3PQ';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });
  return response.json();
};

export async function GET() {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${access_token}` },
    next: { revalidate: 30 } // Cache for 30 seconds
  });

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();
  return NextResponse.json({
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  });
}