import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation, Link as ExpoLink } from 'expo-router';

import Link from '@/ui/link';
import Text from '@/ui/text';
import Button from '@/ui/button';
import TextInput from '@/ui/text-input';

function Login() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-black-100 px-9 py-10">
        <Text variant="h3" className="font-normal max-w-96">
          Faça Login para aproveitar a melhor plataforma de aprendizado:
        </Text>

        <View className="gap-14 my-40">
          <TextInput.Root
            placeholder="Seu e-mail:"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput.Root
            placeholder="Sua senha:"
            variant="outlined"
            password
            autoCapitalize="none"
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
          className="rounded-full"
          variant="outlined"
          onPress={() => navigate('(register)')}
        >
          <Button.Text className="text-white">Criar uma nova conta</Button.Text>
        </Button.Root>
        {/* </ExpoLink> */}
      </View>
    </SafeAreaView>
  );
}

export default Login;

// 4
// 5
// 8
// 9
