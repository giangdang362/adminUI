import { FormatBirthday } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const configColumns = (
  showDeleteConfirm: (id: number) => void,
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>,
  setCurTopicVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>,
): ColumnsType<API.VoteItem> => {
  const handleClickEdit = (x: API.VoteItem) => {
    setCurTopicVote(x);
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
        id: 'pages.table.columns.topicName',
        defaultMessage: 'Topic Name',
      })}`,
      dataIndex: 'voteName',
      key: 'voteName',
      width: '30%',
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.startDate',
        defaultMessage: 'Start Date',
      })}`,
      dataIndex: 'startDate',
      key: 'startDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.startDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.endDate',
        defaultMessage: 'End Date',
      })}`,
      dataIndex: 'endDate',
      key: 'endDate',
      width: '10%',
      render: (_, original) => {
        return <div>{FormatBirthday(original.endDate ?? '')}</div>;
      },
    },
    {
      title: `${intl.formatMessage({
        id: 'pages.table.columns.idolsName',
        defaultMessage: 'Idol Vote',
      })}`,
      dataIndex: 'idolsName',
      key: 'idolsName',
      width: '30%',
      render: (_, original) => (
        <div
          style={{
            display: 'flex',
            gap: '2px',
            flexWrap: 'wrap',
          }}
        >
          {!original.idolsName?.length && ' - '}
          {original.idolsName?.map((item, indexI) => {
            return <>{indexI <= 4 && <Tag style={{ fontSize: '13px' }}>{item}</Tag>}</>;
          })}
          {original.idolsName && original.idolsName?.length > 5 && (
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
                  {original.idolsName?.map((item, indexI) => {
                    return <>{indexI > 4 && <Tag style={{ fontSize: '13px' }}>{item}</Tag>}</>;
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
      title: `${intl.formatMessage({
        id: 'pages.table.columns.status',
        defaultMessage: 'Status',
      })}`,
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
