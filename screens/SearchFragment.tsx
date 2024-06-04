import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import {XMarkIcon} from "react-native-heroicons/outline"
import Loading from "../components/Loading";

const {width, height} = Dimensions.get("window")
export default function SearchFragment(){
    const [results, setResults] = useState([2,3])
    const [loading, setLoading] = useState(false)
    let navigation = useNavigation()
    let movieName = "Antman and the wasp quantumania"
    let onMovieClick=(item:any)=>{
        navigation.push("Movie",item)
    }
    return(
        <SafeAreaView className={"bg-neutral-800 flex-1"}>
        <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
            <TextInput 
            placeholder="Search Movie"
            placeholderTextColor={"lightgray"}
            className="pb-1 pl-4 flex-1 text-base font-semibold text-white tracking-wider"
            />
            <TouchableOpacity className="rounded-full p-3 m-1 bg-neutral-500" onPress={()=>{navigation.goBack()}}>
<XMarkIcon size={25} color={"white"}/>
            </TouchableOpacity>
        </View>
       


        {/** Results */}

        {
            loading?<Loading />:
            results.length>0?
            <ScrollView
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={{paddingHorizontal:15}}
            className="space-y-3">
                <Text className="text-white font-semibold ml-1">Results {results.length}</Text>
                <View className="flex-row justify-between flex-wrap">
                    {
                        results.map((item:any,index:number)=>{

                            return(
                                <TouchableWithoutFeedback key={index} onPress={()=>{onMovieClick(item)}}>
                                    <View className="space-y-1 mr-8">
                                        <Image 
                                        source={require("../assets/movie_poster.png")}
                                        style={{
                                            width : width*0.37,
                                            height : height*0.25
                                        }}
                                        className="rounded-3xl"
                                        />
                                        <Text className="text-neutral-300 ml-1">{movieName.length>14?movieName.slice(0,14)+"...":movieName}</Text>
                                    </View>
                    
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>

            </ScrollView>
            : <View className="justify-center">
                                <Text className="text-white font-bold mt-5 ml-5 text-xl ">No Results Found</Text>
                <Image source={require("../assets/movie_poster.png")}
                className="w-96 h-96 mt-5"/>
            </View>
        }
        
    </SafeAreaView>
    )
}