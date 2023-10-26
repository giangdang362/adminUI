import { FormatBirthday } from '@/constants/datetime';
import { EditOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import pointIcon from '../../../../public/images/point-icon.png';

export const configColumns = (
  handleSetCurUser: (x: API.UserItem) => void,
): ColumnsType<API.UserItem> => {
  const handleClickEdit = (x: API.UserItem) => {
    handleSetCurUser(x);
  };
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
      width: '8%',
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      width: '21%',
      render: (_, original) => (
        <div style={{ display: 'flex', gap: '4px' }}>
          <img
            style={{ borderRadius: '99999px', width: '32px', height: '32px' }}
            src="https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-avatar-doi-cute-cho-nu.jpg"
          />
          <p>{original.userName}</p>
        </div>
      ),
    },
    {
      title: 'Last login Date',
      dataIndex: 'lastLoginDate',
      key: 'lastLoginDate',
      width: '12%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.lastLoginDate ?? '')}</div>;
      },
    },
    {
      title: (
        <div style={{ display: 'flex', gap: '4px' }}>
          <img src={pointIcon} style={{ width: '16px', height: '16px', marginTop: '3px' }} />
          <p style={{ margin: '0px' }}>Point</p>
        </div>
      ),
      dataIndex: 'point',
      key: 'point',
      width: '12%',
    },
    {
      title: 'Idol Follow',
      dataIndex: 'idolFollow',
      key: 'idolFollow',
      width: '24%',
      render: (_, original) => (
        <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
          {!original.idolFollow?.length && ' - '}
          {original.idolFollow?.map((item, indexI) => {
            return <>{indexI <= 4 && <Tag style={{ fontSize: '13px' }}>{item.idolName}</Tag>}</>;
          })}
          {original.idolFollow && original.idolFollow?.length > 5 && (
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
                  {original.idolFollow?.map((item, indexI) => {
                    return (
                      <>{indexI > 4 && <Tag style={{ fontSize: '13px' }}>{item.idolName}</Tag>}</>
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
    },
    {
      title: 'Status',
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
            color: `${original.status ? '#5DC983' : '#EB5769'}`,
            backgroundColor: `${original.status ? '#E7F7EC' : '#FCE6E9'}`,
            fontSize: '13px',
          }}
        >
          {original.status ? 'Actived' : 'Not Activated'}
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '8%',
      render: (_, original) => (
        <Button
          style={{ padding: '2px 6px', border: 'none' }}
          onClick={() => handleClickEdit(original)}
        >
          <EditOutlined />
        </Button>
      ),
    },
  ];
};
