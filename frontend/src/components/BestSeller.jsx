import React from "react";
import Title from "./Title";

const BestSeller = () => {
  // Array of YouTube video IDs
  // To add new videos:
  // 1. Get the video ID from the YouTube URL (e.g., from https://youtu.be/abc123xyz, the ID is 'abc123xyz')
  // 2. Add the ID to this array
  const youtubeVideos = [
    "pt8VpBKEBy4",
    "TKtmwRVeKaY",
    "KSdDifHfMwc",
    "C_6g2XZvDlQ",
  ];

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"OUR"} text2={"VIDEOS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-black">
          "Watch our products in action - demonstrations and reviews from our
          satisfied customers!" 🚜🌿
        </p>
      </div>

      {/* Horizontally scrollable video container */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max px-4">
          {youtubeVideos.map((videoId, index) => (
            <div key={index} className="w-[400px] sm:w-[500px] flex-shrink-0">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
