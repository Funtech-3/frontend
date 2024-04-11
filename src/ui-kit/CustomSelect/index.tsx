import Select, { SelectProps } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomSelect: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <Select
      {...props}
      sx={{
        borderRadius: '40px',
        boxShadow: '0px 2px 8px rgba(0, 20, 51, 0.15)',
        border: 'none',
      }}
      IconComponent={KeyboardArrowDownIcon}
    >
      {children}
    </Select>
  );
};

export default CustomSelect;
