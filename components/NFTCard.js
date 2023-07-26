import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS } from '../constants/theme'
import heart from '../assets/icons/heart.png'
import CircleButton from './CircleButton'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'
import RectButton from './RectButton'

const NFTCard = ({ data }) => {


    const navigation = useNavigation()

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }} >
            <View style={{ width: '100%', height: 250 }}>
                <Image source={data.image}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderBottomRightRadius: SIZES.font
                    }}
                />

                <CircleButton imgUrl={heart} right={10} top={10} />

            </View>
            <SubInfo />
            <View style={{ width: '100%', padding: SIZES.font }}>
                <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
            </View>
            <View style={{
                marginTop: SIZES.font,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10
            }} >
                <EthPrice price={data.price} />
                <RectButton
                    minWidth={120}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate('Details', { data })}
                />
            </View>
        </View>
    )
}


export default NFTCard