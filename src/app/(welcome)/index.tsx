import { View } from 'react-native';

import { useNavigation } from 'expo-router';

import FloatAction from '@/ui/float-action';

import Text from '@/ui/text';

import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';

function First() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-black-200">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 items-center justify-between mx-4 my-10">
          <View className="gap-10">
            <Text variant="h1">Bem-vindo à [Nome da Plataforma].</Text>

            <Text variant="h3" className="font-normal">
              onde o aprendizado se adapta a você! Explore conteúdos
              personalizados, desenvolva suas habilidades e colabore com colegas
              e professores em tempo real.
            </Text>
          </View>

          <FloatAction
            className="bg-black-100"
            onPress={() => navigate('second')}
          >
            <Entypo name="chevron-right" size={30} color="#536eff" />
          </FloatAction>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default First;
