import React, { forwardRef } from 'react';

type TCustomeInputProps = {
    className: string;
}

const CustomInput = forwardRef<HTMLInputElement,TCustomeInputProps>(({className},inputRef) => {
    return (
      <input
        ref={inputRef}
        className={className}
        type="text"
        name="name"
        id="name"
      />
    );
});

export default CustomInput;