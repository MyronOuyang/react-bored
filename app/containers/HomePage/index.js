/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Tile from 'components/Tile';
import messages from './messages';

export default function HomePage() {
  return (
    <h1>
      <Tile />
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
