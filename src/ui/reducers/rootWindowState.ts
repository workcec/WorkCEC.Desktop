import { Reducer } from 'redux';

import { APP_SETTINGS_LOADED } from '../../app/actions';
import { ActionOf } from '../../store/actions';
import {
  ROOT_WINDOW_STATE_CHANGED,
  SERVER_DARKMODE_CHANGED,
  SERVER_SELECTED_URL_CHANGED,
} from '../actions';
import { WindowState } from '../common';

type RootWindowStateAction =
  | ActionOf<typeof ROOT_WINDOW_STATE_CHANGED>
  | ActionOf<typeof APP_SETTINGS_LOADED>
  | ActionOf<typeof SERVER_DARKMODE_CHANGED>
  | ActionOf<typeof SERVER_SELECTED_URL_CHANGED>;

export const rootWindowState: Reducer<WindowState, RootWindowStateAction> = (
  state = {
    focused: true,
    visible: true,
    maximized: false,
    minimized: false,
    fullscreen: false,
    normal: true,
    bounds: {
      x: undefined,
      y: undefined,
      width: 1000,
      height: 600,
    },
    isDarkMode: false,
    selectedUrl: '',
  },
  action
) => {
  switch (action.type) {
    case ROOT_WINDOW_STATE_CHANGED:
      return action.payload;

    case APP_SETTINGS_LOADED: {
      const { rootWindowState = state } = action.payload;
      return rootWindowState;
    }
    case SERVER_DARKMODE_CHANGED:
      const hostname = action.payload?.hostname;
      const darkmode = action.payload?.darkmode;

      if (
        (state.selectedUrl?.startsWith('http://' + hostname) ||
          state.selectedUrl?.startsWith('https://' + hostname)) &&
        darkmode != state.isDarkMode
      ) {
        console.log('SERVER_DARKMODE_CHANGED:', darkmode);
        return (state = { ...state, isDarkMode: darkmode });
      }
      return (state = { ...state });

    case SERVER_SELECTED_URL_CHANGED:
      console.log('SERVER_SELECTED_URL_CHANGED:');
      console.log('Payload', JSON.stringify(action.payload));
      return (state = { ...state, selectedUrl: action.payload });

    default:
      return state;
  }
};
