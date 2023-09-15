import { BaseComponent } from '@/theme/BaseComponent';
import { StyleSheet } from '@/theme/StyleSheet';

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
}

const Image = ({ src, alt, ...props }: ImageProps) => {
  const tes = '';

  return (
    <BaseComponent as="img" src={src} alt={alt} {...props}></BaseComponent>
  );
};
export default Image;
