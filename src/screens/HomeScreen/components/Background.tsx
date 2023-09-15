import Box from '@/components/Box';

const Background = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1644938297138-fde22c59b32c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80';

  return (
    <Box
      tag="main"
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    />
  );
};

export default Background;
