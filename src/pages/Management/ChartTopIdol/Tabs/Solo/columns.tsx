import idolAvatar from '@/../public/images/idol-avatar.png';
import { useIntl } from '@umijs/max';
import { Progress } from 'antd';
import { ColumnsType } from 'antd/es/table';
import styled from 'styled-components';

export const columns = (): ColumnsType<API.IdolItem> => {
  const intl = useIntl();
  return [
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.id',
        defaultMessage: 'ID',
      })}`,
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.soloName',
        defaultMessage: 'Solo Name',
      })}`,
      dataIndex: 'soloName',
      key: 'soloName',
      width: '50%',
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
          <span>{original.idolName}</span>
        </div>
      ),
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.vote',
        defaultMessage: 'Vote',
      })}`,
      dataIndex: 'vote',
      key: 'vote',
      width: '20%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.percent',
        defaultMessage: 'Percent',
      })}`,
      dataIndex: 'percent',
      key: 'percent',
      render: (_, original) => (
        <div>{original.percent ? <Progress percent={Number(original.percent)} /> : ' - '}</div>
      ),
      width: '20%',
    },
  ];
};

const StyledForm = styled(Progress)`
  .ant-progress-line {
    margin-bottom: 0px;
  }
`;
