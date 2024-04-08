import React from 'react';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

type StatusLabelProps = {
  label: string;
  backgroundColor?: string;
  tooltip?: string;
  statusColor: 'success' | 'warning' | 'error';
};

const StatusLabel: React.FC<StatusLabelProps> = ({
  label,
  backgroundColor,
  tooltip,
  statusColor,
}) => {
  const theme = useTheme();

  const circleStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: theme.palette[statusColor].main,
    display: 'inline-block',
    marginRight: '8px',
  };

  const containerStyle = {
    backgroundColor: backgroundColor || 'transparent',
    padding: '5px 10px 5px 10px',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    color: backgroundColor
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
  };

  const statusLabel = (
    <div style={containerStyle}>
      <span style={circleStyle} />
      <span>{label}</span>
    </div>
  );

  return tooltip ? (
    <Tooltip title={tooltip}>{statusLabel}</Tooltip>
  ) : (
    statusLabel
  );
};

export default StatusLabel;
