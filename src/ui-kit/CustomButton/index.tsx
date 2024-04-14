import Button, { ButtonProps } from '@mui/material/Button';

const CustomButton: React.FC<ButtonProps> = props => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: '40px',
        textTransform: 'none',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        ...props.sx,
      }}
    />
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  size: 'large',
  variant: 'contained',
  color: 'secondary',
};
