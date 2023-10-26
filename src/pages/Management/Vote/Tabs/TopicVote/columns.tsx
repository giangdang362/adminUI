import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  handleSetCurTopicVote: (x: API.TopicVoteItem) => void,
  showDeleteConfirm: () => void,
): ColumnsType<API.TopicVoteItem> => {
  const handleClickEdit = (x: API.TopicVoteItem) => {
    handleSetCurTopicVote(x);
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    showDeleteConfirm();
  };

  return [
    {
      title: 'Topic Name',
      dataIndex: 'topicName',
      key: 'topicName',
      width: '30%',
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
      title: 'Idol Vote',
      dataIndex: 'idolVote',
      key: 'idolVote',
      width: '30%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            gap: '2px',
            flexWrap: 'wrap',
          }}
        >
          {!original.idolVote?.length && ' - '}
          {original.idolVote?.map((item, indexI) => {
            return <>{indexI <= 4 && <Tag style={{ fontSize: '13px' }}>{item.idolName}</Tag>}</>;
          })}
          {original.idolVote && original.idolVote?.length > 5 && (
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
                  {original.idolVote?.map((item, indexI) => {
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
      width: '10%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            fontWeight: 600,
            width: 'fit-content',
            padding: '4px 12px',
            borderRadius: '30px',
            color: `${original.status ? '#5DC983' : '#848484'}`,
            backgroundColor: `${original.status ? '#E7F7EC' : '#F0F0F0'}`,
            fontSize: '13px',
          }}
        >
          {original.status ? 'Ongoing' : 'Closed'}
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
