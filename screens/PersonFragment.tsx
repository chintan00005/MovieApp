import { useState } from "react";
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/MovieListScreen";
import Loading from "../components/Loading";
const {width,height} = Dimensions.get("window")
const ios = Platform.OS == "ios"
const topMargin = ios?"":"mt-3"
export default function PersonFragment(){
    const [movies,setMovies] = useState([1,2,3,4,5,6])
    const navigation = useNavigation()
    const [favourite,setFavourite] = useState(false)
    const [loading, setLoading] = useState(false)
    const goBack=()=>{
        navigation.goBack()
        }
    return (
        <ScrollView
        contentContainerStyle={{paddingBottom:20}}
        className="flex-1 bg-neutral-900">
            {/** Back Button and Movie Poster */}

    <SafeAreaView className={" w-full flex-row justify-between items-center px-4"+topMargin}>
        <TouchableOpacity  style={styles.background} className="rounded-xl p-1" onPress={goBack}>
            <ChevronLeftIcon size={30} strokeWidth={2} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setFavourite(!favourite)}>
            <HeartIcon size={35} color={favourite?"red":"white"}/>
        </TouchableOpacity>
    </SafeAreaView>
    {loading?<Loading />: <View>
        <View className="flex-row justify-center"
        style={{
            shadowColor:'gray',
            shadowRadius:40,
            shadowOpacity:1,
            shadowOffset:{width:0, height:5}
        }}>

            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">

<Image 
source={require("../assets/movie_poster.png")}
style={{height:height*0.43, width:width*0.74}}/>
            </View>

        </View>
        
        <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
                Keanu Reeves
            </Text>
            <Text className="text-base text-neutral-500 font-bold text-center">
                London, United Kingdom
            </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Gender</Text>
                <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">1963-06-08</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">Acting</Text>
            </View>
            <View className="px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">64.23</Text>
            </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
            <Text className="text-white test-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">We wear the mask that grins and lies,
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
    <MovieList title={"Movies"} showSeeAll = {false} data={movies}/>
    </View>}
    {/** Person Details */}

   
    </ScrollView>
    )
}