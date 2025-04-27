import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { images } from '@/constants/images'

export class search extends Component {
  render() {
    return (
      <View className='flex-1 bg-primary'>
        <Image source={images.bg} className="flex-1 absolute"/>
      </View>
    )
  }
}

export default search