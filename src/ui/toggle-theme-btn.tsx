import { Text, TouchableOpacity } from 'react-native';

import { useSelectedTheme } from '@/hooks/use-selected-theme';

function ToggleThemeButton() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light');
      }}
      className="w-40 dark:bg-gray-300 bg-black-50 px-2 py-4 rounded-md"
    >
      <Text className="dark:text-black-50 text-white text-center">
        Change theme
      </Text>
    </TouchableOpacity>
  );
}

export default ToggleThemeButton;
