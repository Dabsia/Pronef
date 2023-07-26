import React, { Fragment } from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS } from '../../constants/theme'
import CircleButton from '../../components/CircleButton'
import RectButton from '../../components/RectButton'
import { SubInfo } from '../../components/SubInfo'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import DetailsBid from '../../components/DetailsBid'
import DetailsDesc from '../../components/DetailsDesc'
import left from '../../assets/icons/left.png'
import heart from '../../assets/icons/heart.png'


const DetailsHeader = ({ data, navigation }) => {
    return (
        <View style={{ width: '100%', height: 373 }} >
            <Image source={data.image} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
            <CircleButton left={10} top={StatusBar.currentHeight + 10} imgUrl={left} handlePress={() => navigation.goBack()} />
            <CircleButton right={15} top={StatusBar.currentHeight + 10} imgUrl={heart} />
        </View>
    )
}



const Details = ({ route, navigation }) => {
    const { data } = route.params





    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar
                barStyle='dark-content'
                backGroundColor='transparent'
                translucent={true}
            />
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                paddingVertical: SIZES.font,
                justifyContent: 'center',
                alignItems: 'center',
                backGroundColor: 'rgba(225,225,225,.5)',
                zIndex: 1

            }} >
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View style={{ padding: SIZES.font }}>
                            <DetailsDesc data={data} />
                        </View>
                        {
                            data.bids.length > 0 && (
                                <Text style={{
                                    fontSize: SIZES.font,
                                    fontFamily: FONTS.semiBold,
                                    color: COLORS.primary,
                                    paddingHorizontal: SIZES.base * 2
                                }} >Current Bids</Text>
                            )
                        }
                    </Fragment>
                )}

            />
        </SafeAreaView>
    )
}

export default Details
