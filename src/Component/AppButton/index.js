import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export class AppButton extends Component {
  render() {
    const {title, wrapperStyle, titleStyle, disabled, ...rest} = this.props;
    return (
 
      <TouchableOpacity
        {...rest}
        disabled={disabled}
        style={[
          styles.wrapper,
          wrapperStyle,
          disabled ? styles.disabled : null,
        ]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
