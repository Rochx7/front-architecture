import Box from '@/components/Box';
import ButtonBase from '@/components/Button/ButtonBase';
import Icon from '@/components/Icon';
import Text from '@/components/Text';
import { useTheme } from '@/theme/ThemeProvider';

const Menu = () => {
  const theme = useTheme();
  const baseSize = '40px';
  return (
    <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        paddingVertical: '16px',
        paddingHorizontal: '20px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: theme.colors.neutral.x000
      }}
    >
      <ButtonBase
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: '100%',
          backgroundColor: theme.colors.primary.x500,
          alignItems: 'center',
          justifyContent: 'center',
          hove: {
            backgroundColor: theme.colors.primary.x400
          },
          focus: {
            backgroundColor: theme.colors.primary.x600
          }
        }}
      >
        <Text>G.R</Text>
      </ButtonBase>
      <ButtonBase
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: '100%',
          backgroundColor: theme.colors.neutral.x500,
          alignItems: 'center',
          justifyContent: 'center',
          hove: {
            backgroundColor: theme.colors.neutral.x400
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600
          }
        }}
      >
        <Icon name="menu" />
      </ButtonBase>
    </Box>
  );
};

export default Menu;
