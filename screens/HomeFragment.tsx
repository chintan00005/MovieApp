import React, { useEffect, useState } from "react";
import { View, Text, Platform, StatusBar, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline"
import { styles } from "../theme"
import { TrendingMovies } from "../components/TrendingMovies";
import MovieList from "../components/MovieListScreen";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";
import { fetchTrendingMovies } from "../api/moviedb";

const ios = Platform.OS == "ios"

export default function HomeScreen() {

  const navigation = useNavigation()
  const [trending, setTrending] = useState([1, 2, 3])
  const [coming, setUpcoming] = useState([1, 2, 3])
  const [topRated, setTopRated] = useState([1, 2, 3])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTrendingMovies()
    return (() => {
     
    })
  }, [])

  const getTrendingMovies=async()=>{
    let data = await fetchTrendingMovies()
    console.log("Data ",data)
  }

  const goToSearchScreen = () => {
    navigation.navigate("Search")
  }
  return (
    <View className="flex-1 bg-neutral-800">
      {/* {"Search Bar and Logo"} */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar barStyle="light-content" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color={"white"} />
          <Text className="text-white text-3xl font-bold"><Text style={styles.text}>M</Text>ovies</Text>
          <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} onPress={goToSearchScreen} />
        </View>
      </SafeAreaView>
      {loading ? <Loading /> : <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>

        {/*Corousel for trending movies*/}
        <TrendingMovies data={trending} />
        {/*Top Rated Movie List*/}
        <MovieList title={"Upcoming"} data={coming} />
        <MovieList title={"Top-Rated"} data={topRated} />
      </ScrollView>}


    </View>
  )
}