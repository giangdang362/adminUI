import { useIntl } from '@umijs/max';

const Dasboard = () => {
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({
        id: 'menu.dashboard',
        defaultMessage: 'Dashboard',
      })}
    </div>
  );
};

export default Dasboard;
