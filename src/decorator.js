import React from 'react';
import withChannel from './withChannel';

import { getConfig } from './config';

export const createDecorator = (Component, { isGlobal } = {}) => initData => (getStory, context) => {
  const {
    ADDON_ID,
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    PARAM_Key,
  } = getConfig();

  const parameters = context.parameters && context.parameters[PARAM_Key];
  const storyId = isGlobal ? null : context.id;

  const WithChannel = withChannel({
    EVENT_ID_INIT,
    EVENT_ID_DATA,
    EVENT_ID_BACK,
    ADDON_ID,
    initData,
    panel: false,
    parameters,
    storyId,
  })(Component);

  return <WithChannel getStory={getStory} context={context} />;
};

export const setParameters = () => {
  const { PARAM_Key } = getConfig();
  return params => ({
    [PARAM_Key]: params,
  });
};