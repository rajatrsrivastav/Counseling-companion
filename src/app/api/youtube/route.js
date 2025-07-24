import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const NEET_VIDEO_QUERY = 'neet biology important topics learning video '; 

export async function GET() {
    try {
        const youtubeSearchUrl = `${YOUTUBE_API_BASE_URL}/search?part=snippet&q=${encodeURIComponent(NEET_VIDEO_QUERY)}&type=video&key=${YOUTUBE_API_KEY}`;

        const response = await fetch(youtubeSearchUrl);
        const data = await response.json();

        if (!response.ok) {
            console.error("YouTube API error:", data);
            return NextResponse.json(
                { error: data.error?.message || 'Failed to fetch videos from YouTube API' },
                { status: response.status }
            );
        }

        const videos = data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishTime: item.snippet.publishTime,
        }));

        return NextResponse.json({ videos });

    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return NextResponse.json(
            { error: 'An internal server error occurred while fetching YouTube videos.' },
            { status: 500 }
        );
    }
}