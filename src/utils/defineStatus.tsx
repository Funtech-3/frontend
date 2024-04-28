import { REGISTRATION_STATUSES } from './constants';
import StatusLabel from '../ui-kit/StatusLabel';

export default function defineStatus(
  status: keyof typeof REGISTRATION_STATUSES,
  transparent: boolean = false,
) {
  return (
    <StatusLabel
      label={REGISTRATION_STATUSES[status].label}
      statusColor={REGISTRATION_STATUSES[status].color}
      backgroundColor={transparent ? '' : 'hsla(0, 0%, 13%, 0.55)'}
    />
  );
}
