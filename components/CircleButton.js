import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants/theme'


const CircleButton = (props) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            right: 5,
            ...SHADOWS.light,
            ...props
        }} onPress={props.handlePress} >
            <Image source={props.imgUrl} resizeMode='contain' style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
    )
}

export default CircleButton