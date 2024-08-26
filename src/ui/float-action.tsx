import React from 'react';

import { useNavigation } from 'expo-router';

import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import { twMerge } from 'tailwind-merge';

interface FloatActionProps extends TouchableOpacityProps {
  children: React.ReactNode;
  // size: number;
}

const config = {
  duration: 500,
  easing: Easing.exp,
  reduceMotion: ReduceMotion.System
};

const animationTo = 50;

function FloatAction({
  children,
  className,
  onPress,
  ...props
}: FloatActionProps) {
  const size = useSharedValue(1);

  const opacity = useSharedValue(1);

  const { addListener } = useNavigation();

  const iconStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: size.value }]
  }));

  React.useEffect(() => {
    const unsub = addListener('focus', () => {
      if (size.value === animationTo) {
        size.value = withTiming(1, {
          duration: 600,
          easing: Easing.out(Easing.quad),
          reduceMotion: ReduceMotion.System
        });

        opacity.value = withTiming(1, { ...config, duration: 300 });
      }
    });

    return unsub;
  }, [addListener, size, opacity]);

  function handleAnimationCallback() {
    //@ts-expect-error there is no easy way to provide the event
    if (onPress) onPress();
  }

  function hanldeTouch() {
    size.value = withTiming(animationTo, config, () =>
      runOnJS(handleAnimationCallback)()
    );

    opacity.value = withTiming(0, { ...config, duration: 300 });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="justify-center items-center relative"
      onPress={hanldeTouch}
    >
      <Animated.View style={animatedStyle}>
        <View
          activeOpacity={0.7}
          className={twMerge(
            'p-4 w-20 h-20 rounded-full bg-black-200',
            className
          )}
          {...props}
        />
      </Animated.View>
      <Animated.View style={iconStyle} className="absolute">
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
}

export default FloatAction;
