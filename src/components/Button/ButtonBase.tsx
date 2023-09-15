import { ThemeTypographyVariant } from '@/theme';
import { StyleSheet } from '@/theme/StyleSheet';
import styled from 'styled-components';
import Text from '../Text';
import { useRouter } from 'next/navigation';

export interface ButtonBaseProps {
  children: React.ReactNode;
  href?: string;
  textVariant?: ThemeTypographyVariant;
  styleSheet?: StyleSheet;
}

const StyledButton = styled(Text)<any>`
  position: relative;
  overflow: hidden;
  transition: background 300ms;
  outline: 0;
  border: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const ButtonBase = ({
  // textVariant,
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) => {
  const isLink = Boolean(href);
  const tag = isLink ? 'a' : 'button';

  const router = useRouter();

  return (
    <StyledButton
      tag={tag}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(event);

        isLink && event?.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
      href={href}
      styleSheet={{
        backgroundColor: 'transparent',
        ...styleSheet
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonBase;
