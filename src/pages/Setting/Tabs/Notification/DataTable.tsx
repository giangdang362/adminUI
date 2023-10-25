import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Drawer, Modal, Table } from 'antd';
import { FC, useState } from 'react';
import '../../../Management/styles/styleTable.css';
import { configColumns } from './columns';

interface DataNotifiTableProps {
  handleSetCurNotifi: (x: API.NotificationItem) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curNotifi?: API.NotificationItem;
  setCurNotifi: React.Dispatch<React.SetStateAction<API.NotificationItem | undefined>>;
}

const DataNotifiTable: FC<DataNotifiTableProps> = ({
  handleSetCurNotifi,
  setShowModal,
  setCurNotifi,
  curNotifi,
}) => {
  const [openNotiDetail, setOpenNotiDetail] = useState<boolean>(false);
  const handleClickRow = (x: API.NotificationItem) => {
    setCurNotifi(x);
    setOpenNotiDetail(true);
  };

  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Delete this idol?',
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: 'Do you really want to delete this notification? This process can not be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        console.log('Deleted');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const Footer = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
            border: '1px solid white',
          }}
          // onClick={() => setShowModal(true)}
        >
          <DeleteOutlined />
          <span>Delete</span>
        </Button>
        <Button
          type="primary"
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
          }}
          onClick={() => setShowModal(true)}
        >
          <EditOutlined />
          <span>Edit</span>
        </Button>
      </div>
    );
  };

  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurNotifi, showDeleteConfirm)}
        dataSource={notificationData}
        onRow={(record) => {
          return {
            onClick: () => {
              handleClickRow(record);
            },
          };
        }}
      />
      <Drawer
        title={<div style={{ fontSize: '22px' }}>Notification Detail</div>}
        placement="right"
        onClose={() => setOpenNotiDetail(false)}
        open={openNotiDetail}
        width={500}
        footer={<Footer />}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>Title</div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.title}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>Update on</div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.updatedDate}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>Description</div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.description}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>Important</div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.important === 1 ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DataNotifiTable;

const notificationData: API.NotificationItem[] = [
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 0,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
  {
    updatedDate: '2023-02-02T21:03:16.044967+07:00',
    title: '[NOTICE] Notice of changing the <SHOW! CHAMPION> pre voting',
    important: 1,
    description: 'abc',
  },
];
