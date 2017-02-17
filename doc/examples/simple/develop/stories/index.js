/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { muiTheme } from 'storybook-addon-material-ui';
import { WithNotes } from '@kadira/storybook-addon-notes';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs';

//import decorator from '../../src/store/decorator';
import { addonDecorator, globalDecorator } from '../../setup/';

import '../App.css';
import Button from '../button';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */

globalDecorator('Global decorator');
// addDecorator(globalDecorator('Global decorator'))

storiesOf('No decorator', module)
    .add('Example1', () => (
        <div className="example-component">
            <Button title="no decor 1" />
        </div>
    ))
    .add('Example2', () => (
        <div className="example-component">
            <Button title="no decor 2" />
        </div>
    ))

storiesOf('Podda App1', module)
    .addDecorator(addonDecorator('Decor111'))
    .add('Example1', () => (
        <div className="example-component">
            <Button title="Example 1" />
        </div>
    ))
    .add('Example2', () => (
        <div className="example-component">
            <Button title="Example 2" />
        </div>
    ));

storiesOf('Podda App2', module)
    .addDecorator(addonDecorator('Decor222'))
    .add('Example3', () => (
        <div className="example-component">
            <Button title="Example 3" />
        </div>
    ))

    .add('Example4', () => (
        <div className="example-component">
            <Button title="Example 4" />
        </div>
    ));

storiesOf('Knobs1', module)
    .addDecorator(withKnobs)
    .add('Knob1', () => (
        <header>
            <p>{text('Title1', 'Knob1.Title')}!!!</p>
            <p>{text('Subtitle1', 'Knob1.SubTitle')}</p>
        </header>
    ))
    .add('Knob2', () => (
        <header>
            <p>{text('Title2', 'Knob2.Title')}</p>
            <p>{text('Subtitle2', 'Knob2.SubTitle')}</p>
        </header>
    ));


storiesOf('Knobs2', module)
    .addDecorator(withKnobs)
    .add('Knob3', () => (
        <header>
            <p>{text('Title3', 'Knob1.Title')}</p>
            <p>{text('Subtitle3', 'Knob1.SubTitle')}</p>
        </header>
    ))
    .add('Knob4', () => (
        <header>
            <p>{text('Title4', 'Knob2.Title')}</p>
            <p>{text('Subtitle4', 'Knob2.SubTitle')}</p>
        </header>
    ));



function withNote(note, child) {
    return (
      <WithNotes notes={note}>{child || null}</WithNotes>
    );
}