import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatNumber } from '@/constants/common';
import { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType<API.CommunityItem> = [
  {
    title: 'Community',
    dataIndex: 'community',
    key: 'community',
    width: '60%',
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
    title: 'Daily Chart',
    dataIndex: 'dailyChart',
    key: 'dailyChart',
    width: '10%',
  },
  {
    title: 'PDS',
    dataIndex: 'PDS',
    key: 'PDS',
    width: '10%',
    render: (_, original) => <div>{FormatNumber(original.PDS ?? 0)}</div>,
  },
  {
    title: 'Post',
    dataIndex: 'Post',
    key: 'Post',
    width: '10%',
    render: (_, original) => <div>{FormatNumber(original.post ?? 0)}</div>,
  },
  {
    title: 'Vote',
    dataIndex: 'Vote',
    key: 'Vote',
    width: '10%',
    render: (_, original) => <div>{FormatNumber(original.vote ?? 0)}</div>,
  },
];
