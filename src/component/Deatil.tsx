import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../feature/movieSlice";
import { RootState } from "../redux/store";

const Deatil: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const [videos, setVideos] = useState<any[]>([]);

  const getVideo = async () => {
    const movieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7dae8ce276ab4d0aecdf916905899340`
    )
      .then((res) => res.json())
      .then((json) => setVideos(json.results));
  };

  useEffect(() => {
    getVideo();
    dispatch(getDetails(Number(id)));
  }, [dispatch, id]);

  const movieDetails   = useSelector((state: RootState) => state.movies.deatils );

  return (
    <div className="p-4 mt-16 bg text-slate-300 shadow-lg ">
      {movieDetails && (
        <div>
          <div className="flex flex-col items-center mb-4 ">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
              className="w-64 h-auto mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{movieDetails?.title}</h1>
            <p className="text-lg text-gray-600 mb-2">
              Rating: {movieDetails?.vote_average}
            </p>
            <div className="flex flex-wrap justify-center mb-4">
              {movieDetails?.genres?.map((genre:any) => (
                <span
                  key={genre?.id}
                  className="px-2 py-1 m-1 bg-gray-200 rounded-full text-sm text-gray-700"
                >
                  {genre?.name}
                </span>
              ))}
            </div>
            <p className="text-slate-300 mb-4 w-[900px]">{movieDetails?.overview}</p>
          </div>
          <div className="flex  items-center">
            {videos[0] && (
              <div className="mb-4 w-[500px] h-[500px]">
                <YouTube videoId={videos[0].key} />
              </div>
            )}
            {videos[1] && (
              <div className="w-[500px] h-[500px] ml-[150px] mb-4">
                <YouTube videoId={videos[1].key} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Deatil;
