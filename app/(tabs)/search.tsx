import { View, Text, FlatList } from 'react-native'
import {images} from "@/constants/images";
import MovieCard from '@/components/MovieCard';

const Search = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="flex-1 absolute w-full
     z-0" resizeMode="cover" />

     <FlatList data={movies}
      renderItem={{{ item}} => <MovieCard {...item}}  
      />}
     
    </View>
  )
}

export default Search