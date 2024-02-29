import { Button } from '@/components/Button'
import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { Image, ScrollView, Text, View } from 'react-native'

export default function Home() {
  const mealsList = [
    {
      date: '12.08.24',
      meals: [
        {
          description: 'X-tudo',
          isDiet: false,
          hour: '20:00',
        },
        {
          description: 'Whey protein com leite',
          isDiet: true,
          hour: '16:00',
        },
        {
          description: 'Salada cesar com frango grelhado',
          isDiet: true,
          hour: '12:00',
        },
        {
          description: 'Vitamina de banana com abacate',
          isDiet: true,
          hour: '08:00',
        },
      ],
    },
    {
      date: '11.08.24',
      meals: [
        {
          description: 'X-tudo',
          isDiet: false,
          hour: '20:00',
        },
        {
          description: 'Whey protein com leite',
          isDiet: true,
          hour: '16:00',
        },
        {
          description: 'Salada cesar com frango grelhado',
          isDiet: true,
          hour: '12:00',
        },
        {
          description: 'Vitamina de banana com abacate',
          isDiet: true,
          hour: '08:00',
        },
      ],
    },
    {
      date: '10.08.24',
      meals: [
        {
          description: 'X-tudo',
          isDiet: false,
          hour: '20:00',
        },
        {
          description: 'Whey protein com leite',
          isDiet: true,
          hour: '16:00',
        },
        {
          description: 'Salada cesar com frango grelhado',
          isDiet: true,
          hour: '12:00',
        },
        {
          description: 'Vitamina de banana com abacate',
          isDiet: true,
          hour: '08:00',
        },
      ],
    },
  ]

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View className="flex-row w-full justify-between">
        <Image
          source={require('../assets/placeholders/logo.png')}
          alt="App Logo"
        />

        <Image
          source={require('../assets/placeholders/gojo.jpg')}
          alt="User image"
          className="w-[40px] h-[40px] rounded-full overflow"
          width={40}
          height={40}
          style={{ borderColor: '#000', borderWidth: 2 }}
        />
      </View>

      <View className="bg-greenLight w-full px-4 py-5 rounded-lg mt-8 items-center relative">
        <View className="absolute right-3.5 top-3.5">
          <ArrowUpRight color="#639339" size={24} weight="bold" />
        </View>
        <Text className="font-nunitoBold text-[32px] text-gray1">90,86%</Text>
        <Text className="font-nunitoRegular text-gray2 text-sm mt-0.5">
          das refeições dentro da dieta
        </Text>
      </View>

      <View className="mt-10">
        <Text className="font-nunitoRegular text-base leading-[130%]">
          Refeições
        </Text>
        <Button className="mt-2">
          <Button.Icon>
            <Plus color="#FFFFFF" size={16} weight="bold" />
          </Button.Icon>
          <Button.Text>Nova Refeição</Button.Text>
        </Button>
      </View>

      <View>
        {mealsList.map(({ date, meals }) => {
          return (
            <View key={date}>
              <Text>{date}</Text>
              {meals.map(({ description, hour, isDiet }) => {
                return (
                  <View key={hour}>
                    <Text>{hour}</Text>
                    <Text>{description}</Text>
                    <View />
                  </View>
                )
              })}
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}
