import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurIdol: (x: API.IdolItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.IdolItem> => {
  const handleClickEdit = (x: API.IdolItem) => {
    handleSetCurIdol(x);
  };
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
        id: 'pages.table.columns.idolName',
        defaultMessage: 'Idol Name',
      })}`,
      dataIndex: 'idolName',
      key: 'idolName',
      width: '15%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.birthday',
        defaultMessage: 'Birthday/Estalisday',
      })}`,
      dataIndex: 'birthday',
      key: 'birthday',
      render: (_, original) => {
        return <div>{FormatBirthday(original.anniversaryDay ?? '')}</div>;
      },
      width: '10%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.member',
        defaultMessage: 'Member',
      })}`,
      dataIndex: 'member',
      key: 'member',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            gap: '2px',
            flexWrap: 'wrap',
          }}
        >
          {!original.members?.length && ' - '}
          {original.members?.map((member, indexM) => {
            return <>{indexM <= 4 && <Tag style={{ fontSize: '13px' }}>{member.idolName}</Tag>}</>;
          })}
          {original.members && original.members?.length > 5 && (
            <Tooltip
              color="#FFF"
              placement="bottom"
              title={
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    rowGap: '6px',
                    backgroundColor: '#FFF',
                  }}
                >
                  {original.members?.map((member, indexM) => {
                    return (
                      <>{indexM > 4 && <Tag style={{ fontSize: '13px' }}>{member.idolName}</Tag>}</>
                    );
                  })}
                </div>
              }
            >
              <Tag style={{ cursor: 'pointer' }}>...</Tag>
            </Tooltip>
          )}
        </div>
      ),
      width: '45%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.type',
        defaultMessage: 'Type',
      })}`,
      dataIndex: 'type',
      key: 'type',
      render: (_, original) => {
        if (original.idolType === 'Solo')
          return (
            <Tag style={{ borderColor: '#6940DA', color: '#6940DA', backgroundColor: '#E9E2F9' }}>
              {intl.formatMessage({
                id: 'pages.table.columns.solo',
                defaultMessage: 'Solo',
              })}
            </Tag>
          );
        return (
          <Tag style={{ borderColor: '#945723', color: '#945723', backgroundColor: '#EFE6DE' }}>
            {intl.formatMessage({
              id: 'pages.table.columns.group',
              defaultMessage: 'Group',
            })}
          </Tag>
        );
      },
      width: '10%',
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
            onClick={() => handleClickEdit(original)}
          >
            <EditOutlined />
          </Button>
          <Button style={{ padding: '2px 6px', border: 'none' }} onClick={showDeleteConfirm}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];
};
