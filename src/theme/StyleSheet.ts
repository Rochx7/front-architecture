import { Breakpoints } from '@skynexui/responsive_stylesheet';

type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  [key: string]: ResponsiveProperty<any> | any;
}
