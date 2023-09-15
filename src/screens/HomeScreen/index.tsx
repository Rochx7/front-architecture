import Box from '@/components/Box';
import Background from './components/Background';
import Menu from './components/Menu';
import Feed from './components/Feed';
import Footer from './components/Footer';
import { useTheme } from '@/theme/ThemeProvider';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center'
      }}
    >
      <Background />
      <Menu />
      <Feed />
      <Footer />
    </Box>
  );
};

export default HomeScreen;
