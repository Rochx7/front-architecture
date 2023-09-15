import Box from '@/components/Box';
import Text from '@/components/Text';
import { useTheme } from '@/theme/ThemeProvider';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '120px',
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Text variant="body2">Feito com ❤️ por Guilherme Rocha</Text>
    </Box>
  );
};

export default Footer;
