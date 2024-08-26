import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { VariantProps, tv } from 'tailwind-variants';

const text = tv({
  base: 'dark:text-white text-black-200',
  variants: {
    variant: {
      h1: 'text-3xl font-bold ',
      h2: 'text-2xl font-bold',
      h3: 'text-xl font-bold',
      h4: 'text-base font-bold',
      paragraph: 'text-base',
      subtitle: 'text-sm'
    }
  },
  defaultVariants: {
    variant: 'paragraph'
  }
});

type TextVariants = VariantProps<typeof text>;

interface TextProps extends TextVariants, RNTextProps {
  children: React.ReactNode;
  className?: string;
}

function Text({ children, variant, className, ...props }: TextProps) {
  const styles = text({ variant, className });

  return (
    <RNText className={styles} {...props}>
      {children}
    </RNText>
  );
}

export default Text;
