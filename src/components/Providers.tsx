'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from '@/theme/ThemeProvider';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
