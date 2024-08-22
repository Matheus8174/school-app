import Link from '@/ui/link';
import Text from '@/ui/text';
import ToggleThemeButton from '@/ui/toggle-theme-btn';
import { useTheme } from '@react-navigation/native';

import {
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

function First() {
  const { colors } = useTheme();

  return (
    <View className="py-14 pl-14">
      <Text className="font-bold" variant="h2">
        Hello
      </Text>

      <Link href="/(welcome)">link</Link>
      {/* <Text style={{ color: colors.text }}>Mark home work</Text>
      <TextInput placeholder="fuck" className="w-10 h-10 bg-slate-400" /> */}
    </View>
  );
}

export default First;
