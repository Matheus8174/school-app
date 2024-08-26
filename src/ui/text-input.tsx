import React from 'react';

import {
  TextInputProps as RNTextInputProps,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tv, VariantProps } from 'tailwind-variants';

import { useTheme } from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import Text from '@/ui/text';

const textInput = tv({
  slots: {
    root: 'rounded-md text-white px-4 py-4',
    toggleVisibleIcon:
      'text-white absolute self-end -translate-x-4 size-9 justify-center items-center'
  },
  variants: {
    password: {
      true: {
        toggleVisibleIcon: 'hidden'
      }
    },
    variant: {
      contained: {
        root: 'bg-black-50'
      },
      outlined: {
        root: 'bg-transparent border-[1px] border-white'
      }
    }
  },
  defaultVariants: {
    variant: 'contained'
  }
});

const { root, toggleVisibleIcon } = textInput();

type TextInputVariants = VariantProps<typeof textInput>;

interface TextInputProps extends TextInputVariants, RNTextInputProps {}

const toValue = -45;

function Root(props: TextInputProps) {
  const { colors } = useTheme();

  const [showPassword, setShowPassword] = React.useState(false);

  const { className, variant, password, placeholder, onChangeText, ...rest } =
    props;

  const translateY = useSharedValue(0);

  const animation = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }));

  function handleTextChange(text: string) {
    if (text.length === 0) translateY.value = withSpring(0);

    if (text.length >= 1) translateY.value = withSpring(toValue);

    if (onChangeText) onChangeText(text);
  }

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const styles = root({ className, variant });

  const visibiliteIcon = toggleVisibleIcon({ className, variant });

  return (
    <View className="relative justify-center">
      <TextInput
        className={styles}
        onChangeText={handleTextChange}
        secureTextEntry={showPassword}
        {...rest}
      />

      {placeholder && (
        <Animated.View style={animation} className="px-4 absolute">
          <Text>{placeholder}</Text>
        </Animated.View>
      )}

      {password && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={toggleShowPassword}
          className={visibiliteIcon}
        >
          <MaterialCommunityIcons
            size={25}
            name={showPassword ? 'eye-off' : 'eye'}
            color={colors.text}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default { Root };
