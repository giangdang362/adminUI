import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurFundingVote: (x: API.FundingVoteItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.FundingVoteItem> => {
  const handleClickEdit = (x: API.FundingVoteItem) => {
    handleSetCurFundingVote(x);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    showDeleteConfirm();
  };

  return [
    {
      title: 'Vote Title',
      dataIndex: 'voteTitle',
      key: 'voteTitle',
      width: '35%',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.startDate ?? '')}</div>;
      },
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.endDate ?? '')}</div>;
      },
    },
    {
      title: 'Reward',
      dataIndex: 'reward',
      key: 'reward',
      width: '15%',
    },
    {
      title: 'Idol Vote',
      dataIndex: 'idolVote',
      key: 'idolVote',
      width: '10%',
      render: (_, original) => <Tag style={{ fontSize: '13px' }}>{original.idolVote}</Tag>,
    },
    {
      title: 'Status',
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
      title: 'Action',
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
