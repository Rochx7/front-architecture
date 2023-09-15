import NextLink from 'next/link';
import Text from '../Text';
import { forwardRef } from 'react';
import { StyleSheet } from '@/theme/StyleSheet';
import { ThemeTypographyVariant } from '@/theme';
import { useTheme } from '@/theme/ThemeProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariant;
  colorVariant?:
    | 'primary'
    | 'accent'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'neutral';
  colorVariantEnabled?: boolean;
}

// eslint-disable-next-line react/display-name
const Link = forwardRef(
  (
    {
      href,
      children,
      colorVariant,
      colorVariantEnabled,
      styleSheet,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const isInternalLink = href.startsWith('http');

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400
      },
      focus: {
        color: theme.colors[colorVariant].x600
      }
    };

    const linkProps = {
      ref,
      href,
      tag: 'a',
      children,
      styleSheet: {
        textDecoration: 'none',
        ...styleSheet,
        ...(colorVariantEnabled && {
          color: currentColorSet.color
        }),
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color
          })
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            color: currentColorSet.focus.color
          })
        }
      },
      ...props
    };

    if (isInternalLink) return <Text {...{ target: '_blank', ...linkProps }} />;

    return (
      <NextLink href={href} legacyBehavior>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true
};

export default Link;
