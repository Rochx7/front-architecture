import Box from '@/components/Box';
import Button from '@/components/Button';
import Image from '@/components/Image';
import Text from '@/components/Text';
import { useTheme } from 'styled-components';

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px'
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%'
          }}
          src="https://github.com/Rochx7.png"
          alt="Imagem perfil do Guilherme"
        />
        <Box
          styleSheet={{
            flex: 1,
            color: theme.colors.neutral.x000,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignContent: 'flex-end'
          }}
        >
          <Button
            fullWidth
            colorVariant="primary"
            size="xl"
            href="/"
            styleSheet={{
              maxWidth: '200px'
            }}
          >
            Newsletter
          </Button>
          <Button
            fullWidth
            colorVariant="neutral"
            size="xl"
            styleSheet={{
              maxWidth: '200px'
            }}
          >
            Buy me a coffe!
          </Button>
        </Box>
      </Box>

      <Text variant="heading4" tag="h1">
        Guilherme Rocha
      </Text>

      <Text tag="h1" variant="heading2">
        Últimas Atualizações
      </Text>
    </Box>
  );
};

export default Header;
