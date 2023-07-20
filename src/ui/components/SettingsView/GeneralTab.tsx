import { Box, FieldGroup } from '@rocket.chat/fuselage';
import React, { FC } from 'react';

import { FlashFrame } from './features/FlashFrame';
import { HardwareAcceleration } from './features/HardwareAcceleration';
import { InternalVideoChatWindow } from './features/InternalVideoChatWindow';
import { MenuBar } from './features/MenuBar';
import { MinimizeOnClose } from './features/MinimizeOnClose';
import { ReportErrors } from './features/ReportErrors';
import { SideBar } from './features/SideBar';
import { TrayIcon } from './features/TrayIcon';

export interface Props {
  color: string
}

export const GeneralTab: FC<Props> = (props) => (
  <Box is='form' margin={24} maxWidth={960} flexGrow={1} flexShrink={1}>
    <FieldGroup >
      <ReportErrors color = {props.color}/>
      <FlashFrame color = {props.color}/>
      <HardwareAcceleration color = {props.color}/>
      <InternalVideoChatWindow color = {props.color}/>
      <TrayIcon color = {props.color}/>
      {process.platform === 'win32' && <MinimizeOnClose />}
      <SideBar color = {props.color}/>
      {process.platform !== 'darwin' && <MenuBar />}
    </FieldGroup>
  </Box>
);
