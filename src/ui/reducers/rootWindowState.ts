import { Reducer } from 'redux';

import { APP_SETTINGS_LOADED } from '../../app/actions';
import { ActionOf } from '../../store/actions';
import { ROOT_WINDOW_STATE_CHANGED, SIDE_BAR_DARKMODE_BUTTON_CLICKED } from '../actions';
import { WindowState } from '../common';

type RootWindowStateAction =
  | ActionOf<typeof ROOT_WINDOW_STATE_CHANGED>
  | ActionOf<typeof APP_SETTINGS_LOADED>
  | ActionOf<typeof SIDE_BAR_DARKMODE_BUTTON_CLICKED>;

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
    isDarkmode: false,
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

    case SIDE_BAR_DARKMODE_BUTTON_CLICKED:
      return state = {...state, isDarkmode: action.payload}

    default:
      return state;
  }
};
