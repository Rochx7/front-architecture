import { ThemeTypographyVariant } from '@/theme';
import { BaseComponent } from '@/theme/BaseComponent';
import { useTheme } from '@/theme/ThemeProvider';
import { forwardRef } from 'react';
import StyleSheet from 'styled-components/dist/sheet/Sheet';

interface TextProps {
  variant?: ThemeTypographyVariant;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h3' | 'span' | 'a' | 'string';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  as?: string;
  ref?: any;
}

// eslint-disable-next-line react/display-name
const Text = forwardRef(
  ({ styleSheet, variant, tag, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        ref={ref}
        as={tag}
        styleSheet={{ ...textVariant, ...styleSheet }}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};
export default Text;
