import { Dimensions, Platform, ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline"
import { HeartIcon } from "react-native-heroicons/solid"
import { styles } from "../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "../components/MovieListScreen";
import Loading from "../components/Loading";


const { width, height } = Dimensions.get("window")
const ios = Platform.OS == "ios"
const topMargin = ios ? "" : "mt-3"
let movieName = "Antman and the wasp quantumania"
export default function MovieFragment() {

    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const [cast, setCast] = useState([1, 2, 3, 4, 5, 6])
    const [favourite, setFavourite] = useState(false)
    const { params } = useRoute()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => { }, [params])

    return (

        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className="flex-1 bg-neutral-900">
            {/** Back Button and Movie Poster */}
            {loading?<Loading />:<View><View className="w-full">
                <SafeAreaView className={"absolute z-10 w-full flex-row justify-between items-center px-4" + topMargin}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={goBack}>
                        <ChevronLeftIcon size={30} strokeWidth={2} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFavourite(!favourite)}>
                        <HeartIcon size={35} color={favourite ? styles.background.backgroundColor : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View >

                    <LinearGradient colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                        style={{ width: width, height: height * 0.4 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className={"absolute bottom-0 z-10"} />
                    <Image
                        source={require("../assets/movie_poster.png")}
                        style={{ width: width, height: height * 0.55 }} />
                </View>
            </View>

            
            <View className="space-y-3" style={{ marginTop: -(height * 0.09) }}>
                <Text className="text-white font-bold text-center text-center text-3xl">
                    {
                        movieName
                    }
                </Text>
                {/** status release runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released - 2020 - 170 min
                </Text>
                {/** genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">Action -</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Thrill -</Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">Comedy</Text>
                </View>
                {/** Description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">We wear the mask that grins and lies,
                    It hides our cheeks and shades our eyes,—
                    This debt we pay to human guile;
                    With torn and bleeding hearts we smile,
                    And mouth with myriad subtleties.

                    Why should the world be over-wise,
                    In counting all our tears and sighs?
                    Nay, let them only see us, while
                    We wear the mask.

                    We smile, but, O great Christ, our cries
                    To thee from tortured souls arise.
                    We sing, but oh the clay is vile
                    Beneath our feet, and long the mile;
                    But let the world dream otherwise,
                    We wear the mask!</Text>
            </View>
            {/** Cast */}
            <Cast cast={cast} navigation={navigation} />
            {/** Simillar movies */}
            <MovieList title={"Simillar Movies"} showSeeAll={false} data={similarMovies} /></View>}
            
        </ScrollView>
    )
}