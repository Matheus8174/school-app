import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from 'expo-router';

import Link from '@/ui/link';
import Text from '@/ui/text';
import Button from '@/ui/button';
import TextInput from '@/ui/text-input';

function Login() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-black-100 px-9 py-10 justify-around">
        <Text variant="h3" className="font-normal max-w-96">
          Faça Login para aproveitar a melhor plataforma de aprendizado:
        </Text>

        <View className="gap-14">
          <TextInput
            placeholder="Seu e-mail:"
            autoCapitalize="none"
            placeholderAnimation
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Sua senha:"
            autoCapitalize="none"
            placeholderAnimation
            variant="outlined"
            password
          />

          <View className="flex gap-12 w-full">
            <Button.Root>
              <Button.Text>Log in</Button.Text>
            </Button.Root>

            <Link href="/" className="self-center">
              <Text variant="paragraph">Esqueceu sua senha?</Text>
            </Link>
          </View>
        </View>

        {/* <ExpoLink href="/choose-role"> */}
        <Button.Root
          variant="outlined"
          className="rounded-full"
          onPress={() => navigate('register')}
        >
          <Button.Text className="text-white">Criar uma nova conta</Button.Text>
        </Button.Root>
        {/* </ExpoLink> */}
      </View>
    </SafeAreaView>
  );
}

export default Login;

// 4 -
// 5
// 6
// 8
// 9
// 10
// 13
