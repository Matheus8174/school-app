import Button from '@/ui/button';
import FloatAction from '@/ui/float-action';
import Link from '@/ui/link';
import Text from '@/ui/text';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Third() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-black-50">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 items-center justify-between mx-4 my-10">
          <View className="gap-10">
            <Text variant="h1">Junte-se a nós hoje mesmo!</Text>

            <Text variant="h3" className="font-normal">
              Cadastre-se agora e comece sua jornada rumo a um aprendizado mais
              eficaz e personalizado.
            </Text>
          </View>

          <FloatAction
            className="bg-black-100"
            onPress={() => navigate('login')}
          >
            <Entypo name="check" size={30} color="#536eff" />
          </FloatAction>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Third;
