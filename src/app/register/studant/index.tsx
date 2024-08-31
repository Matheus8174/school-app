import { View } from 'react-native';

import { z } from 'zod';
import CheckBox from 'expo-checkbox';
import { useNavigation } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import Text from '@/ui/text';
import { ControllerInputText } from '@/ui/text-input';
import Button from '@/ui/button';

import colors from '@/styles/colors';

import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView
} from 'react-native-keyboard-controller';

const schema = z
  .object({
    name: z
      .string()
      .min(6, 'o nome precisa ter ao menos 6 caracteres')
      .default(''),
    email: z
      .string({
        required_error: 'digite o seu e-mail'
      })
      .email('formato de e-mail invalido'),
    password: z
      .string({
        required_error: 'digite sua senha'
      })
      .min(6, 'a senha precisa ter ao menos 6 caracteres'),
    confirmPassword: z.string({
      required_error: 'confirme a senha'
    }),
    terms: z
      .boolean()
      .default(false)
      .refine((data) => data, 'você precisa aceitar os termos primeiro')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'as senhas não combinam',
    path: ['confirmPassword']
  });

type FormType = z.infer<typeof schema>;

function CreateStudant() {
  const { handleSubmit, control, watch } = useForm<FormType>({
    resolver: zodResolver(schema)
  });

  const { navigate } = useNavigation();

  const isTermsAccepted = watch('terms');

  function handleFormSubmit(data: FormType) {
    navigate('second');
  }

  function handleFormError(event: unknown) {
    console.log('Error: ');
  }

  return (
    <View className="px-9 py-10 gap-14 min-h-full ">
      <Text variant="h3">Me fala mais sobre você:</Text>
      <KeyboardAwareScrollView>
        <View className="gap-14">
          <ControllerInputText
            name="name"
            control={control}
            placeholder="Nome completo:"
          />

          <ControllerInputText
            name="password"
            control={control}
            testID="password-input"
            placeholder="Digite sua senha:"
            password
          />

          <ControllerInputText
            name="confirmPassword"
            testID="password-confirm-input"
            control={control}
            placeholder="Digite sua senha novamente:"
            password
          />

          <ControllerInputText
            name="email"
            control={control}
            placeholder="Seu e-mail:"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
      </KeyboardAwareScrollView>

      <Button.Root
        disable={!isTermsAccepted}
        testID="register-button"
        className="mt-auto"
        onPress={
          // handleSubmit(handleFormSubmit, handleFormError)
          () => {
            navigate('second');
          }
        }
      >
        <Button.Text>Criar conta</Button.Text>
      </Button.Root>

      <View className="flex-row gap-4 self-center justify-center items-center">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <CheckBox
              testID="terms-checkbox"
              value={field.value}
              color={colors['light-blue'][100]}
              onValueChange={field.onChange}
            />
          )}
        />

        <Text className="text-grey">Eu aceito os termos de serviço</Text>
      </View>
    </View>
  );
}

export default CreateStudant;
