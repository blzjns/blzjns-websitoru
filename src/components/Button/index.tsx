import React, { JSX } from 'react';

interface ButtonProps {
  onClick: Function;
  children?: JSX.Element | JSX.Element[] | unknown;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const Btn: any = 'button';
    return (
      <Btn
        ref={ref}
        className="border-solid border-2 border-b-indigo-700 rounded-md mb-2 mr-2 xl:mr-0 hover:animate-pulse hover:border-b-2 hover:border-b-green-300 hover:bg-indigo-950 hover:cursor-pointer"
        {...props}
      />
    );
  }
);
export default Button;
