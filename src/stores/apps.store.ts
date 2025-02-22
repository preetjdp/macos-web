import { atom } from 'jotai';
import { appsConfig } from '__/data/apps/apps-config';

export type TApp = keyof typeof appsConfig;

/** Which apps are currently open */
export const openAppsStore = atom<Record<TApp, boolean>>({
  finder: false,
  launchpad: false,
  safari: false,
  messages: false,
  mail: false,
  maps: false,
  photos: false,
  facetime: false,
  calendar: false,
  'system-preferences': false,

  'purus-twitter': true,
  'view-source': true,
});

/** Which app is currently focused */
export const activeAppStore = atom<TApp>('finder');

/** Maximum zIndex for the active app */
export const activeAppZIndexStore = atom(0);
