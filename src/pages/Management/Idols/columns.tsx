import { deleteIdol } from '@/services/management/idols';
import { FormatBirthday } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Modal, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurIdol: (x: API.IdolItem) => void,
  curIdol: API.IdolItem,
  handleRender: () => void,
): ColumnsType<API.IdolItem> => {
  const handleClickEdit = (x: API.IdolItem) => {
    handleSetCurIdol(x);
    handleRender();
  };
  const intl = useIntl();
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: `${intl.formatMessage({
        id: 'pages.button.delete.title',
        defaultMessage: 'Delete this item',
      })}`,
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: `${intl.formatMessage({
        id: 'pages.button.delete.content',
        defaultMessage: 'Do you really want to delete this item? This process can not be undone.',
      })}`,
      okText: `${intl.formatMessage({
        id: 'pages.button.delete',
        defaultMessage: 'Delete',
      })}`,
      okType: 'danger',
      cancelText: `${intl.formatMessage({
        id: 'pages.button.cancel',
        defaultMessage: 'Cancel',
      })}`,
      onOk: async () => {
        try {
          await deleteIdol(curIdol?.id ?? '');
        } catch (error) {
          console.error('Lỗi xóa idol:', error);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleDeleteIdol = (x: API.IdolItem) => {
    curIdol = x;
    showDeleteConfirm();
  };

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
      dataIndex: 'anniversaryDay',
      key: 'anniversaryDay',
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
      dataIndex: 'members',
      key: 'members',
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
      dataIndex: 'idolType',
      key: 'idolType',
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
          <Button
            style={{ padding: '2px 6px', border: 'none' }}
            onClick={() => handleDeleteIdol(original)}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];
};
