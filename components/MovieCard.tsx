import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MovieCard = ({id, poster_path, title, vote_average,
    release_date}: Movie) => {
  return (
<Link href={`/movie/${id}`} asChild>
  <TouchableOpacity className='w-[30%]'>
    <Image
    source={{
        uri: poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://placehold.co/600*400/1a1a1a/ffffff.png'
    }}
    />
  </TouchableOpacity>
</Link>
  ) 
}

export default MovieCard