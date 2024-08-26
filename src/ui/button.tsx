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
    variant: 'contained'
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends TouchableOpacityProps, ButtonVariants {
  children: React.ReactNode;
}

const { root, text } = button();

function Root({ children, className, variant, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={root({ className, variant })}
      activeOpacity={0.7}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

interface TextProps extends RNTextProps, ButtonVariants {
  children: React.ReactNode;
}

function Text({ className, children, variant, ...props }: TextProps) {
  return (
    <RNText className={text({ className, variant })} {...props}>
      {children}
    </RNText>
  );
}

export default { Root, Text };
