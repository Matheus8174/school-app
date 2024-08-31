import { View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor
} from 'react-native-reanimated';

const size = 100;

function Second() {
  const gesture = Gesture.Pan();

  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const color = useSharedValue(0);

  gesture
    .onBegin(({ x, y, translationX }) => {
      // offset.value.x = withSpring(translationX);
    })
    .onChange(({ translationX, translationY }) => {
      offsetX.value = translationX;
      offsetY.value = translationY;
    })
    .onFinalize(({ translationX, translationY }) => {
      offsetX.value = withSpring(translationX);
      offsetY.value = withSpring(translationY);
      // offset.value =
    });

  const style = useAnimatedStyle(() => ({
    // backgroundColor: interpolateColor
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }]
  }));

  return (
    <GestureDetector gesture={gesture}>
      <View className="flex-1 items-center justify-center">
        <Animated.View
          className="size-24 rounded-md bg-blue absolute"
          style={style}
        />
      </View>
    </GestureDetector>
  );
}

export default Second;
