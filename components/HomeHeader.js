
import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import logo from '../assets/images/logo.png'
import person01 from '../assets/images/person01.png'
import badge from '../assets/icons/badge.png'
import search from '../assets/icons/search.png'

export default function HomeHeader({ handleSearch }) {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font
        }}  >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} >
                <Image source={logo} resizeMode='contain' style={{
                    width: 90, height: 25
                }} />
                <View style={{
                    width: 45, height: 45
                }} >
                    <Image source={person01} resizeMode='contain' style={{
                        width: '100%',
                        height: '100%'
                    }} />
                    <Image source={badge} resizeMode='contain' style={{
                        position: 'absolute',
                        width: 20,
                        height: 20,
                        bottom: -5,
                        right: 0
                    }} />
                </View>

            </View>
            <View style={{ marginVertical: SIZES.font }} >
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    color: COLORS.white
                }} >Hello, Dabsia 👋</Text>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.large,
                    marginTop: SIZES.base / 2,
                    color: COLORS.white
                }} >Let's find a masterpiece</Text>
            </View>
            <View style={{ marginTop: SIZES.font }} >
                <View style={{
                    width: '100%',
                    borderRadius: SIZES.font,
                    backgroundColor: 'grey',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small / 2
                }} >
                    <Image source={search} style={{ width: 20, height: 20, marginRight: SIZES.base }} resizeMode='contain' />
                    <TextInput placeholder='Search NFTs' style={{ flex: 1, color: COLORS.white }} onChangeText={handleSearch} />
                </View>
            </View>

        </View>
    )
}