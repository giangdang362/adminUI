import { FormatBirthday } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurFundingVote: (x: API.VoteItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.VoteItem> => {
  const handleClickEdit = (x: API.VoteItem) => {
    handleSetCurFundingVote(x);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    showDeleteConfirm();
  };

  const intl = useIntl();

  return [
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.voteTitle',
        defaultMessage: 'Vote Title',
      })}`,
      dataIndex: 'voteName',
      key: 'voteName',
      width: '35%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.startDate',
        defaultMessage: 'Start Date',
      })}`,
      dataIndex: 'startDate',
      key: 'startDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.startDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.endDate',
        defaultMessage: 'End Date',
      })}`,
      dataIndex: 'endDate',
      key: 'endDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.endDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.reward',
        defaultMessage: 'Reward',
      })}`,
      dataIndex: 'reward',
      key: 'reward',
      width: '15%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.idolVote',
        defaultMessage: 'Idol Vote',
      })}`,
      dataIndex: 'idolVote',
      key: 'idolVote',
      width: '10%',
      render: (_, original) => <Tag style={{ fontSize: '13px' }}>{original.idolVote}</Tag>,
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.status',
        defaultMessage: 'Status',
      })}`,
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            fontWeight: 600,
            width: 'fit-content',
            padding: '4px 12px',
            borderRadius: '30px',
            color: `
              ${original.status === 'Ongoing' ? '#5DC983' : ''}
              ${original.status === 'Booking' ? '#E9B558' : ''}
              ${original.status === 'Closed' ? '#848484' : ''}
            `,
            backgroundColor: `
              ${original.status === 'Ongoing' ? '#E7F7EC' : ''}
              ${original.status === 'Booking' ? '#FDF3E4' : ''}
              ${original.status === 'Closed' ? '#F0F0F0' : ''}
            `,
            fontSize: '13px',
          }}
        >
          {original.status}
        </div>
      ),
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.action',
        defaultMessage: 'Action',
      })}`,
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            gap: '6px',
          }}
        >
          <Button
            style={{ padding: '2px 6px', border: 'none' }}
            onClick={(e) => {
              e.stopPropagation();
              handleClickEdit(original);
            }}
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
