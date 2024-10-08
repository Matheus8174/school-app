import FloatAction from '@/ui/float-action';
import Text from '@/ui/text';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Second() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-black-100">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 items-center justify-between mx-4 my-10">
          <View className="gap-10">
            <Text variant="h1">Aprenda no seu ritmo!</Text>

            <Text variant="h3" className="font-normal">
              Nossa plataforma usa inteligência artificial para adaptar o
              conteúdo e as atividades às suas necessidades e objetivos,
              garantindo uma jornada de aprendizado única.
            </Text>
          </View>

          <FloatAction
            className="bg-black-50"
            onPress={() => navigate('third')}
          >
            <Entypo name="chevron-right" size={30} color="#536eff" />
          </FloatAction>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Second;
