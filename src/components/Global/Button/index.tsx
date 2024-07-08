import { styled } from '@/styles';
import { ButtonHTMLAttributes, FC, forwardRef, ForwardedRef, ReactNode } from 'react';

const ButtonElement = styled('button', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  gap: '1.4rem',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  border: 'none', 

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },

  transition: 'background-color 0.3s ease, color 0.3s ease, border 0.3s ease',

  variants: {
    variant: {
      primary: {
        color:'$white',
        backgroundColor:'$primaryBlue',

        '&:hover': {
          backgroundColor:'$hoverBlue',
          color: '$white', 
        },
      },

      outline: {
        border:'1px solid $primaryBlue',
        backgroundColor:'$white',
        color:'$primaryBlue',

        '&:hover': {
          backgroundColor:'$primaryBlue',
          color:'$white',
        }
      },

      close:{
        backgroundColor:'$primaryRed',
        color: '$white', 

        '&:hover': {
          backgroundColor:'$hoverRed',
        },
      }, 

      success:{
        backgroundColor:'$green',
        color: '$white', 

        '&:hover': {
          backgroundColor:'$hoverGreen',
        },
      }
    },

    size:{
      sm: {
        maxWidth:'200px'
      },
      md: {
        maxWidth:'400px'
      }

    },

    
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
  
});

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isValidated?: boolean;
  variant?: "primary" | "outline" | "close" | "success"
  align?: "left" | "center" | "right"
  size?: "sm" | "md" 
  children?: ReactNode
  classname?: string
}

const Button = forwardRef(
  (
    { variant, size, value, disabled, isValidated, children, className, ...props }: GlobalButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <ButtonElement
        ref={ref}
        {...props}
        variant={variant}
        disabled={disabled}
        size={size}
        className={className}
      >
        {value} {children}
      </ButtonElement>
    );
  }
);

export default Button;
