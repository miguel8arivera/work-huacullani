import type { To } from 'react-router';

type EaseType =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'circIn'
  | 'circOut'
  | 'circInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'anticipate'
  | number[];

export type VariantsType = {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: EaseType;
  easeOut?: EaseType;
};

export type TranHoverType = {
  duration?: number;
  ease?: EaseType;
};

export type TranEnterType = {
  durationIn?: number;
  easeIn?: EaseType;
};

export type TranExitType = {
  durationOut?: number;
  easeOut?: EaseType;
};

export type BackgroundType = {
  colors?: string[];
  duration?: number;
  ease?: EaseType;
};

export {
  UNSAFE_NavigationContext,
  UNSAFE_LocationContext,
  UNSAFE_RouteContext,
} from 'react-router';
export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

export declare function BrowserRouter({
  basename,
  children,
  window,
}: BrowserRouterProps): JSX.Element;
export interface HashRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

export declare function HashRouter({ basename, children, window }: HashRouterProps): JSX.Element;
export interface HistoryRouterProps {
  basename?: string;
  children?: React.ReactNode;
  history: History;
}

declare function HistoryRouter({ basename, children, history }: HistoryRouterProps): JSX.Element;
declare namespace HistoryRouter {
  var displayName: string;
}

export { HistoryRouter as unstable_HistoryRouter };
export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  to: To;
}

export declare const Link: React.ForwardRefExoticComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
>;
export interface NavLinkProps extends Omit<LinkProps, 'className' | 'style' | 'children'> {
  children?: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode);
  caseSensitive?: boolean;
  className?: string | ((props: { isActive: boolean }) => string | undefined);
  end?: boolean;
  style?: React.CSSProperties | ((props: { isActive: boolean }) => React.CSSProperties);
}

export declare const NavLink: React.ForwardRefExoticComponent<
  NavLinkProps & React.RefAttributes<HTMLAnchorElement>
>;
