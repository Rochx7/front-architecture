import Box from '@/components/Box';
import Text from '@/components/Text';
import Header from './Header';
import Posts from './Posts';
import { useTheme } from '@/theme/ThemeProvider';

const Feed = () => {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        width: '100%',
        maxWidth: '683px',
        marginTop: '-228px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px',
        backgroundColor: theme.colors.neutral.x000
      }}
    >
      <Header />
      <Posts />
    </Box>
  );
};
export default Feed;
