import { FormatDateTime } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurNotifi: (x: API.NotificationItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.NotificationItem> => {
  const handleClickEdit = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    x: API.NotificationItem,
  ) => {
    e.stopPropagation();
    handleSetCurNotifi(x);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    showDeleteConfirm();
  };

  const intl = useIntl();

  return [
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.updatedDate',
        defaultMessage: 'Updated Date',
      })}`,
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      width: '15%',
      render: (_, original) => {
        return <div>{FormatDateTime(original.updatedDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.title',
        defaultMessage: 'Title',
      })}`,
      dataIndex: 'title',
      key: 'title',
      width: '61%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.important',
        defaultMessage: 'Important',
      })}`,
      dataIndex: 'important',
      key: 'important',
      width: '15%',
      render: (_, original) => {
        return <div>{original.important === 1 ? 'Yes' : 'No'}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.action',
        defaultMessage: 'Action',
      })}`,
      dataIndex: 'action',
      key: 'action',
      width: '9%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            gap: '6px',
          }}
        >
          <Button
            style={{ padding: '2px 6px', border: 'none' }}
            onClick={(e) => handleClickEdit(e, original)}
          >
            <EditOutlined />
          </Button>
          <Button style={{ padding: '2px 6px', border: 'none' }} onClick={(e) => handleDelete(e)}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];
};
