import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, SHADOWS, FONTS } from '../constants/theme'
import person02 from '../assets/images/person02.png'
import person03 from '../assets/images/person03.png'
import person04 from '../assets/images/person04.png'
import eth from "../assets/icons/eth.png";


export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View  >
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }} >{title}</Text>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: subTitleSize, color: COLORS.primary }} >{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 3
        }} >
            <Image source={eth} resizeMode='contain' style={{ width: 20, height: 20, marginRight: 2 }} />
            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.primary
            }} >{price}</Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, id }) => {
    return (
        <Image source={imgUrl} resizeMode='contain' style={{
            width: 48,
            height: 48,
            marginLeft: id === 0 ? 0 : -SIZES.font
        }} />
    )
}

export const People = () => {
    return (
        <View style={{
            flexDirection: 'row'
        }} >
            {[person02, person03, person04].map((imgUrl, id) => {
                return (
                    <ImageCmp key={`People-${id}`} imgUrl={imgUrl} id={id} />
                )
            })}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'

        }} >
            <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }} >Ending in</Text>
            <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }} >12h 30m</Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'

        }} >
            <People />
            <EndDate />
        </View>
    )
}
