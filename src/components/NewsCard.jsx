import React from "react";
import { AiOutlineEye, AiOutlineStar } from "react-icons/ai";

const NewsCard = ({ data }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={data.thumbnail_url}
          alt="Thumbnail"
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{data.title}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img
            src={data.author.img}
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <span>{data.author.name || "Unknown Author"}</span>
          <span>|</span>
          <span>{data.author.published_date}</span>
        </div>
        <p className="text-sm text-gray-700">{data.details.slice(0, 100)}...</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <AiOutlineStar />
            <span>{data.rating.number} ({data.rating.badge})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <AiOutlineEye />
            <span>{data.total_view || "N/A"} views</span>
          </div>
        </div>
        {data.others_info.is_trending && (
          <span className="badge badge-accent">Trending</span>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
