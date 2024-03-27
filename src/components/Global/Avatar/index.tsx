import { styled } from '@/styles';
import { ImgHTMLAttributes, FC } from 'react';
import loginImg from '@/assets/images/login.png';
import Image from 'next/image';

const AvatarContainer = styled('div', {
  width: '100px',
  height: '100px',
  borderRadius: '50%', 
  overflow: 'hidden', 
  border: '2px solid #fff', 

  variants: {
    variant: {
      sm: {},
      md: {},
      lg: {}
    }
  },

  defaultVariants: {
    variant: 'sm',
  }
});

const AvatarImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover', 
});

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'sm' | 'md' | 'lg';
  src: string | undefined 
}

const Avatar: FC<AvatarProps> = ({ variant, src, ...props }) => {

  
  return (
    <AvatarContainer variant={variant}>
      <AvatarImage src={ src ? src : loginImg.src} {...props}/>
    </AvatarContainer>
  );
};

export default Avatar;
