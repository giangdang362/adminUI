import { FormatDateTime } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
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
  const intl = useIntl();
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: `${intl.formatMessage({
        id: 'pages.settings.notification.delete',
        defaultMessage: 'Delete this Notification vote',
      })}`,
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: `${intl.formatMessage({
        id: 'pages.settings.notification.deleteContent',
        defaultMessage: 'Do you really want to delete this item? This process can not be undone.',
      })}`,
      okText: `${intl.formatMessage({
        id: 'pages.button.delete',
        defaultMessage: 'Delete',
      })}`,
      okType: 'danger',
      cancelText: `${intl.formatMessage({
        id: 'pages.button.cancel',
        defaultMessage: 'Cancel',
      })}`,
      onOk() {
        console.log('Deleted');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const FooterDrawerNoti = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
            border: '1px solid white',
          }}
          onClick={(e) => {
            e.stopPropagation();
            showDeleteConfirm();
          }}
        >
          <DeleteOutlined style={{ color: 'red' }} />
          <span style={{ color: 'red' }}>
            {intl.formatMessage({
              id: 'pages.button.delete',
              defaultMessage: 'Delete',
            })}
          </span>
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
          <span>
            {intl.formatMessage({
              id: 'pages.button.edit',
              defaultMessage: 'Edit',
            })}
          </span>
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
        title={
          <div style={{ fontSize: '22px' }}>
            {intl.formatMessage({
              id: 'pages.settings.notification.titleDetail',
              defaultMessage: 'Notification Detail',
            })}
          </div>
        }
        placement="right"
        onClose={() => setOpenNotiDetail(false)}
        open={openNotiDetail}
        width={500}
        footer={<FooterDrawerNoti />}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>
              {intl.formatMessage({
                id: 'pages.settings.notification.form.title',
                defaultMessage: 'Title',
              })}
            </div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.title}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>
              {intl.formatMessage({
                id: 'pages.settings.notification.updateOn',
                defaultMessage: 'Update on',
              })}
            </div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {FormatDateTime(curNotifi?.updatedDate ?? '')}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>
              {intl.formatMessage({
                id: 'pages.settings.notification.desc',
                defaultMessage: 'Description',
              })}
            </div>
            <div style={{ fontSize: '15px', color: '#242424', maxWidth: '332px' }}>
              {curNotifi?.description}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '100px' }}>
              {intl.formatMessage({
                id: 'pages.settings.notification.form.important',
                defaultMessage: 'Important',
              })}
            </div>
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
