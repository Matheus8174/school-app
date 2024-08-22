import { PropsWithChildren } from 'react';

import { Link as ExpoLink, LinkProps as ExpoLinkProps } from 'expo-router';

import { VariantProps, tv } from 'tailwind-variants';

type LinkVariants = VariantProps<typeof link>;

interface LinkProps extends LinkVariants, ExpoLinkProps<string> {
  className?: string;
}

const link = tv({
  base: 'dark:text-white text-black-200 underline focus:text-[#80B3FF]',
  variants: {
    size: {
      sm: 'text-sm ',
      base: 'text-base'
    }
  }
});

function Link({
  className,
  size,
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  const styles = link({ size, className });

  return (
    <ExpoLink className={styles} {...props}>
      {children}
    </ExpoLink>
  );
}

export default Link;
