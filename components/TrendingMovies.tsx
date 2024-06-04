import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, TouchableWithoutFeedback, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

let {width} = Dimensions.get("window")

export function TrendingMovies(props:any){

    let navigation = useNavigation()
const onHandleClick=(item)=>{
    navigation.navigate("Movie",item)
}

    return(
        <View className="mb-8">
            <Text className="mb-5 mx-4 text-white text-xl">Trending Movies</Text>
            <Carousel 
            data ={props.data}
            renderItem={({item})=><MovieCard data={item} handleClick={onHandleClick}/>}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            sliderHeight={width*0.6}
            itemWidth={width}
            itemHeight={width*0.6}
            slideStyle={{display:"flex", alignItems:"center"}}
            />

        </View>
    )
}



const MovieCard=(props:any)=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{props.handleClick(props.item)}}>
        <Image 
        source={require("../assets/movie_poster.png")}
        style={{width:width*0.6, height:width*0.4}}
        className="rounded-3xl"
        />
        </TouchableWithoutFeedback>
    )
}