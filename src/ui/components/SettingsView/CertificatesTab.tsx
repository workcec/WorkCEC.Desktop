import React, { FC } from 'react';

import { CertificatesManager } from '../CertificatesManager';

export interface Props {
    color: string
  }

export const CertificatesTab: FC<Props> = (props) => <CertificatesManager color = { props.color } />;
