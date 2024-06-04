import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Cast(props:any){

    let castName = "Keanu Reeves"
    let characterName = "John Wick"

    return(
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal:15}}
            >
                {
                    props.cast && props.cast.map((item:any,index:number)=>{
                        return (
                                <TouchableOpacity key={index}
                                className="mr-4 items-center"
                                onPress={()=>{props.navigation.navigate("Person")}}>
                                    <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-meutral-500">
                                    <Image 
                                    source={require("../assets/movie_poster.png")}
                                    className="rounded-2xl w20 h-20"/>
                                    </View>
                                    <Text className="text-white text-xs mt-1">{castName.length>10?castName.slice(0,10)+"...":castName}</Text>
                                    <Text className="text-neutral-4000 text-xs mt-1">{characterName.length>10?characterName.slice(0,10)+"...":characterName}</Text>
                                </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
        </View>
    );

}