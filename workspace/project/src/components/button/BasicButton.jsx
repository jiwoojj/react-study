import React from 'react';
import Button from './style';

const BasicButton = ({children, variant, shape, size, border, color, font , ...rest}) => {
  return (
    <Button variant={variant} shape={shape} size={size} border={border} color={color} font={font} {...rest}>
      {children}
    </Button>
  );
};

export default BasicButton;