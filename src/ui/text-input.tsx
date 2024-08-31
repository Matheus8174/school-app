import React, { forwardRef } from 'react';

import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {
  useController,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions
} from 'react-hook-form';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tv, VariantProps } from 'tailwind-variants';

import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import colors from '@/styles/colors';

import Text from '@/ui/text';

const textInput = tv({
  slots: {
    errorText:
      'dark:text-red-100 text-red-100 absolute bottom-0 translate-y-full',
    root: 'rounded-md text-white p-4 placeholder:text-grey',
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
    password: false,
    error: false,
    variant: 'contained'
  }
});

const { root, toggleVisibleIcon, errorText } = textInput();

type TextInputVariants = VariantProps<typeof textInput>;

interface TextInputProps
  extends Omit<TextInputVariants, 'error'>,
    RNTextInputProps {
  error?: string;
  placeholderAnimation?: boolean;
}

const toValue = -45;

const AnimatedText = Animated.createAnimatedComponent(Text);

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (props, fowardedRef) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const {
      className,
      variant,
      password,
      error,
      placeholder,
      onChangeText,
      placeholderAnimation = false,
      ...rest
    } = props;

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
        <RNTextInput
          className={styles}
          onChangeText={handleTextChange}
          secureTextEntry={showPassword}
          {...{ placeholder: !placeholderAnimation ? placeholder : undefined }}
          ref={fowardedRef}
          {...rest}
        />

        {error && (
          <AnimatedText
            className={errorText()}
            entering={FadeIn}
            exiting={FadeOut}
          >
            {error}
          </AnimatedText>
        )}

        {placeholder && placeholderAnimation && (
          <AnimatedText
            className="dark:text-grey text-grey px-4 absolute"
            style={animation}
          >
            {placeholder}
          </AnimatedText>
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
              color={colors.grey}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
);

type TRule<T extends FieldValues> =
  | Omit<
      RegisterOptions<T>,
      'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >
  | undefined;

export type RuleType<T extends FieldValues> = { [name in keyof T]: TRule<T> };

export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps,
    InputControllerType<T> {}

export function ControllerInputText<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });

  return (
    <TextInput
      ref={field.ref}
      onChangeText={field.onChange}
      value={(field.value as string) || ''}
      error={fieldState.error?.message}
      {...inputProps}
    />
  );
}

export default TextInput;
