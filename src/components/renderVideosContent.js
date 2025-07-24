'use client';

import { useState, useEffect, useCallback } from 'react'; // Import useCallback

export default function RenderVideosContent() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Wrap fetchVideos in useCallback
    const fetchVideos = useCallback(async () => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`/api/youtube`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch videos');
            }
            setVideos(data.videos);
        } catch (err) {
            console.error('Error fetching videos:', err);
            setError(true);
            setVideos([]);
        } finally {
            setLoading(false);
        }
    }, []); // Empty dependency array means fetchVideos is created only once

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]); // Now, fetchVideos's identity is stable, so useEffect runs only once

    // ... rest of your component (render logic) remains the same ...
    if (loading) {
        return (
            <p className="text-muted-foreground p-4 text-center text-xs">
                <span className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm space-y-3 sm:space-y-5">
                    Loading video recommendations...
                </span>
            </p>
        );
    }
    if (error) {
        return (
            <p className="text-red-500 p-4 text-center text-xs">
                <span className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm space-y-3 sm:space-y-5">
                    Failed to load recommendations. Please try again.
                </span>
            </p>
        );
    }
    if (videos.length === 0) {
        return (
            <p className="text-muted-foreground p-4 text-center text-xs">
                <span className="flex flex-col items-center justify-center space-x-0 sm:space-x-5 bg-white rounded py-6 sm:py-10 px-3 text-sm space-y-3 sm:space-y-5">
                    No video recommendations found at the moment.
                </span>
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {videos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full aspect-video">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={video.title}
                        ></iframe>
                    </div>
                    <div className="p-3">
                        <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
                        <p className="text-xs text-gray-600 line-clamp-1">{video.channelTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}