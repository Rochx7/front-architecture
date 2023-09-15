import { BaseComponent } from '@/theme/BaseComponent';
import { StyleSheet } from '@/theme/StyleSheet';

interface BoxProps {
  styleSheet?: StyleSheet;
  tag?: 'main' | 'div' | 'article' | 'setion' | 'ul' | string;
  children?: React.ReactNode;
}

export default function Box({ styleSheet, tag, children, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
