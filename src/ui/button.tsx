import { PropsWithChildren } from 'react';
import {
  TextProps as RNTextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  Text as RNText
} from 'react-native';

import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  slots: {
    root: 'px-8 py-3 rounded-md items-center',
    text: 'text-base font-bold'
  },
  variants: {
    disable: {
      true: {
        root: '!bg-gray-500'
      }
    },
    variant: {
      outlined: {
        root: 'bg-transparent border-[1px] border-white',
        text: 'dark:text-white text-black-200'
      },
      contained: {
        root: 'bg-light-blue-100'
      }
    }
  },
  defaultVariants: {
    disable: false,
    variant: 'contained'
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends TouchableOpacityProps, ButtonVariants {
  children: React.ReactNode;
}

const { root, text } = button();

function Root(props: ButtonProps) {
  const { children, className, variant, disable, ...rest } = props;

  return (
    <TouchableOpacity
      disabled={disable}
      className={root({ className, disable, variant })}
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

interface TextProps extends RNTextProps, ButtonVariants {
  children: React.ReactNode;
}

function Text({ className, children, variant, ...rest }: TextProps) {
  return (
    <RNText className={text({ className, variant })} {...rest}>
      {children}
    </RNText>
  );
}

export default { Root, Text };
