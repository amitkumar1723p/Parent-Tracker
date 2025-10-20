import React from 'react';
import { Text, TextInput } from 'react-native';

// Disable system font scaling globally
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

// Store original
const OriginalText = Text;
const OriginalTextInput = TextInput;

// Patch Text
Text.render = function (...args) {
  const origin = OriginalText.render ? OriginalText.render.call(this, ...args) : null;
  if (!origin) return React.createElement(OriginalText, args[0]);
  return React.cloneElement(origin, {
    style: [{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#000' }, origin.props.style],
  });
};

// Patch TextInput
TextInput.render = function (...args) {
  const origin = OriginalTextInput.render ? OriginalTextInput.render.call(this, ...args) : null;
  if (!origin) return React.createElement(OriginalTextInput, args[0]);
  return React.cloneElement(origin, {
    style: [{ fontFamily: 'Roboto-Regular', fontSize: 14, color: '#000' }, origin.props.style],
  });
};
