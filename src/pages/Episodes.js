import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCards from '../components/EpisodeCards';
import SearchEpisodes from '../components/SearchEpisodes';

export default function Episodes() {
  const [query, setQuery] = useState('');
  const [episodeInfos, setEpisodeInfos] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/episode/?name=${query}`
      );
      const episodes = result.data.results.map((episode) => ({
        id: episode.id,
        name: episode.name,
        air_date: episode.air_date,
        created: episode.created,
      }));
      console.log(result.data.results);
      setEpisodeInfos(episodes);
    };
    fetchItems();
  }, [query]);

  return (
    <div>
      <SearchEpisodes getQuery={(q) => setQuery(q)} />
      {episodeInfos.map(({ id, name, air_date, created }) => (
        <EpisodeCards
          key={id}
          number={id}
          name={name}
          air_date={air_date}
          created={created}
        />
      ))}
    </div>
  );
}
