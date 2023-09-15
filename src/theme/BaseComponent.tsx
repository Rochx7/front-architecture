import React from 'react';
import styled from 'styled-components';
import { StyleSheet } from './StyleSheet';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';
import { forwardRef } from 'react';

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref?: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any;
}

// eslint-disable-next-line react/display-name
export const BaseComponent = forwardRef<unknown, BaseComponentProps>(
  (props: any, ref) => {
    return <StyledBaseComponent {...props} ref={ref} />;
  }
);

BaseComponent.defaultProps = {
  styleSheet: {}
};
