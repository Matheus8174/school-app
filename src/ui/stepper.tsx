import { View } from 'react-native';
import Text from './text';

function Stepper() {
  return (
    <View className="flex-row justify-center items-center">
      <View className="bg-blue size-8 rounded-full justify-center items-center">
        <Text variant="h4">2</Text>
      </View>
      <View className="h-[2px] w-8 bg-blue" />
      <View className="bg-blue size-8 rounded-full" />
      <View className="h-[2px] w-8 bg-blue" />
      <View className="bg-blue size-8 rounded-full" />
    </View>
  );
}

export default Stepper;
