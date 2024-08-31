import React from 'react';

import ExpoCheckbox from 'expo-checkbox';

import colors from '@/styles/colors';

function Checkbox() {
  const [isChecked, setChecked] = React.useState(false);

  return (
    <ExpoCheckbox
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? colors.blue : undefined}
    />
  );
}

export default Checkbox;
