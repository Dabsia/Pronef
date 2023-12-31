import React, { useState } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { COLORS, } from '../../constants/theme'
import { NFTData } from '../../constants/dummy'
import NFTCard from '../../components/NFTCard'
import HomeHeader from '../../components/HomeHeader'
import FocusedStatusBar from '../../components/FocusedStatusBar'


const Home = () => {

    const [nftData, setNftData] = useState(NFTData)

    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData)

        const filteredData = NFTData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))

        if (filteredData.length) {
            setNftData(filteredData)
        }
        else {
            setNftData(NFTData)
        }
    }

    return (


        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar background={COLORS.primary} />
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }} >
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
                    />
                </View>

                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1

                }} >
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />

                </View>
            </View>
        </SafeAreaView>




    )
}

export default Home


//     < FlatList
// data = { NFTData }
// renderItem = {
//                             ({ item }) => {
//     <Text>{item.name}</Text>
// }
//                         }
// />
