const YOUTUBE_API_KEY = 'AIzaSyDC0aaP9PvYiwB88RGGhV_DJ4h887pCpKY';

export const YOUTUBE_VIDEO_API =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
    YOUTUBE_API_KEY;