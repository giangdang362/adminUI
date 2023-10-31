import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatNumber } from '@/utils/common';
import { useIntl } from '@umijs/max';
import { ColumnsType } from 'antd/es/table';

export const columns = (): ColumnsType<API.CommunityItem> => {
  const intl = useIntl();

  return [
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.community',
        defaultMessage: 'Community',
      })}`,
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
      title: `${intl.formatMessage({
        id: 'pages.table.columns.dailyChart',
        defaultMessage: 'Daily Chart',
      })}`,
      dataIndex: 'dailyChart',
      key: 'dailyChart',
      width: '10%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.pds',
        defaultMessage: 'PDS',
      })}`,
      dataIndex: 'PDS',
      key: 'PDS',
      width: '10%',
      render: (_, original) => <div>{FormatNumber(original.PDS ?? 0)}</div>,
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.post',
        defaultMessage: 'Post',
      })}`,
      dataIndex: 'Post',
      key: 'Post',
      width: '10%',
      render: (_, original) => <div>{FormatNumber(original.post ?? 0)}</div>,
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.vote',
        defaultMessage: 'Vote',
      })}`,
      dataIndex: 'Vote',
      key: 'Vote',
      width: '10%',
      render: (_, original) => <div>{FormatNumber(original.vote ?? 0)}</div>,
    },
  ];
};
