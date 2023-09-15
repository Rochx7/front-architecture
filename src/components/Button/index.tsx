import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import { ButtonSize, buttonSize } from './buttonSize';
import { ColorVariant, Variant, colorVariantBy } from './colorVariantBy';
import { useTheme } from '@/theme/ThemeProvider';

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

const Button = ({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        //[Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        //[Size]
        ...buttonSize[size],
        //[fullWidth]
        ...(fullWidth && {
          alignSelf: 'initial'
        }),
        ...styleSheet
      }}
    >
      {children}
    </ButtonBase>
  );
};

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary'
};

Button.Base = ButtonBase;

export default Button;
