import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurIdol: (x: API.IdolsItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.IdolsItem> => {
  const handleClickEdit = (x: API.IdolsItem) => {
    handleSetCurIdol(x);
  };

  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Idol Name',
      dataIndex: 'idolName',
      key: 'idolName',
      width: '15%',
    },
    {
      title: 'Birthday/Estalisday',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (_, original) => {
        return <div>{FormatBirthday(original.birthday ?? '')}</div>;
      },
      width: '10%',
    },
    {
      title: 'Member',
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
            return <>{indexM <= 4 && <Tag style={{ fontSize: '13px' }}>{member.name}</Tag>}</>;
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
                      <>{indexM > 4 && <Tag style={{ fontSize: '13px' }}>{member.name}</Tag>}</>
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, original) => {
        if (original.type === 0)
          return (
            <Tag style={{ borderColor: '#6940DA', color: '#6940DA', backgroundColor: '#E9E2F9' }}>
              Solo
            </Tag>
          );
        return (
          <Tag style={{ borderColor: '#945723', color: '#945723', backgroundColor: '#EFE6DE' }}>
            Group
          </Tag>
        );
      },
      width: '10%',
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
