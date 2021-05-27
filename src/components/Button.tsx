import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Touchable } from 'react-native';
import { View } from 'react-native';

import colors from '../config/colors';

export interface ButtonProps {
  /**
   * Callback function to onpress button
   */
  onPress: () => void;

  /**
   * Children from button, text for example
   */
  children: string;

  /**
   * Type outline button
   */
  outline: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  outline,
}) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (outline) {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.secondaryLightBlue,
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
  textOutline: {
    color: colors.primaryLight,
  },
});
