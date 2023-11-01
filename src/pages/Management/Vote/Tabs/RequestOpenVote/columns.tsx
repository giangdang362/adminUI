import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatBirthday } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  showDeleteConfirm: (id: number) => void,
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>,
  setCurRequestOpenVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>,
): ColumnsType<API.VoteItem> => {
  const handleClickEdit = (x: API.VoteItem) => {
    setCurRequestOpenVote(x);
    setShowModalForm(true);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>, x: API.VoteItem) => {
    e.stopPropagation();
    showDeleteConfirm(x.voteId ?? -1);
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
          <span>
            community
            {/* {original.community} */}
          </span>
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
        return <div>{FormatBirthday(original.requsetDate ?? '')}</div>;
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
              ${original.status === 'WaitingApprove' ? '#E9B558' : ''}
              ${original.status === 'Rejected' ? '#848484' : ''}
            `,
            backgroundColor: `
              ${original.status === 'Approved' ? '#E7F7EC' : ''}
              ${original.status === 'WaitingApprove' ? '#FDF3E4' : ''}
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
          <Button
            style={{ padding: '2px 6px', border: 'none' }}
            onClick={(e) => handleDelete(e, original)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];
};
