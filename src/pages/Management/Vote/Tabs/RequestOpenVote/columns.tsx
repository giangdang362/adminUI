import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurFundungVote: (x: API.RequestOpenVoteItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.RequestOpenVoteItem> => {
  const handleClickEdit = (x: API.RequestOpenVoteItem) => {
    handleSetCurFundungVote(x);
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
      dataIndex: 'voteTitle',
      key: 'voteTitle',
      width: '45%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.community',
        defaultMessage: 'Community',
      })}`,
      dataIndex: 'community',
      key: 'community',
      width: '20%',
      render: (_, original) => (
        <div
          style={{
            fontSize: '13px',
            display: 'flex',
            gap: '4px',
          }}
        >
          <img
            src={idolAvatar}
            alt="idolAvatar"
            style={{
              width: '20px',
              height: '20px',
            }}
          />
          <span>{original.community}</span>
        </div>
      ),
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.requestDate',
        defaultMessage: 'RequestDate',
      })}`,
      dataIndex: 'requestDate',
      key: 'requestDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.requestDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.status',
        defaultMessage: 'Status',
      })}`,
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            fontWeight: 600,
            width: 'fit-content',
            padding: '4px 12px',
            borderRadius: '30px',
            color: `
              ${original.status === 'Approved' ? '#5DC983' : ''}
              ${original.status === 'Waiting Approve' ? '#E9B558' : ''}
              ${original.status === 'Rejected' ? '#848484' : ''}
            `,
            backgroundColor: `
              ${original.status === 'Approved' ? '#E7F7EC' : ''}
              ${original.status === 'Waiting Approve' ? '#FDF3E4' : ''}
              ${original.status === 'Rejected' ? '#F0F0F0' : ''}
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
