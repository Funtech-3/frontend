import { MenuItem, MenuItemProps } from '@mui/material';

const CustomMenuItem = ({
  children,
  value,
  ...props
}: {
  children?: React.ReactNode | string;
  value: string;
  props?: MenuItemProps;
}) => {
  return (
    <MenuItem
      {...props}
      value={value}
      sx={theme => ({
        '&:hover': {
          backgroundColor: theme.palette.secondary.main,
        },
      })}
    >
      {children}
    </MenuItem>
  );
};

export default CustomMenuItem;
