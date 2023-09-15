import { BaseComponent } from '@/theme/BaseComponent';
import * as icons from './svgs/_index';
import { StyleSheet } from '@/theme/StyleSheet';

const iconsSizes = {
  xs: '12px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '36px'
} as const;

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconsSizes;
}

const Icon = ({ size, name, ...props }: IconProps) => {
  const CurrentIcon = icons[name];

  if (!CurrentIcon) return `"${name}" is not a valid <icon/>!`;

  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: iconsSizes[size],
        height: iconsSizes[size]
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  );
};

Icon.defaultProps = {
  name: icons.default_icon,
  size: 'md'
};

export default Icon;
