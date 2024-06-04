import { Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

const {width, height} = Dimensions.get("window")

export default function MovieList(props:any){

    let movieName = "Antman and the wasp quantumania"
    let navigation = useNavigation()

    let onMovieClick=(item:any)=>{
        navigation.push("Movie",item)
    }

    return(
     <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-white text-xl">{props.title}</Text>
            <TouchableOpacity >
                {
                    props.showSeeAll?<Text style={styles.text} className="text-lg"> See All</Text>:<View/>
                }
            
               </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}>
{
    props.data.map((item:any,index:number)=>{

        return(
            <TouchableWithoutFeedback key={index} onPress={()=>{onMovieClick(item)}}>
                <View className="space-y-1 mr-8">
                    <Image 
                    source={require("../assets/movie_poster.png")}
                    style={{
                        width : width*0.33,
                        height : height*0.22
                    }}
                    className="rounded-3xl"
                    />
                    <Text className="text-neutral-300 ml-1">{movieName.length>14?movieName.slice(0,14)+"...":movieName}</Text>
                </View>

            </TouchableWithoutFeedback>
        )
    })
}
        </ScrollView>

     </View>
    );
}