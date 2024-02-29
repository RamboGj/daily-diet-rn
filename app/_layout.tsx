/* eslint-disable camelcase */
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito'
import { Loading } from '@/components/Loading'

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  return (
    <SafeAreaView className="flex-1 bg-white pt-[66px] px-6">
      {fontsLoaded ? <Slot /> : <Loading />}
    </SafeAreaView>
  )
}
