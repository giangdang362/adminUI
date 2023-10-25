import { FC } from 'react';
import DataNotifiTable from './DataTable';

interface NotificationProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curNotifi?: API.NotificationItem;
  setCurNotifi: React.Dispatch<React.SetStateAction<API.NotificationItem | undefined>>;
}

const Notification: FC<NotificationProps> = ({ setShowModal, setCurNotifi, curNotifi }) => {
  const handleSetCurNotifi = (x: API.NotificationItem) => {
    setCurNotifi(x);
    setShowModal(true);
  };
  return (
    <div>
      <DataNotifiTable
        handleSetCurNotifi={handleSetCurNotifi}
        setShowModal={setShowModal}
        curNotifi={curNotifi}
        setCurNotifi={setCurNotifi}
      />
    </div>
  );
};

export default Notification;
