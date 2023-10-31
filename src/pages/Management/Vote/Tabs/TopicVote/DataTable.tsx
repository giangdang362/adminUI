import banner from '@/../public/images/bannerVote.png';
import idolAvatar from '@/../public/images/idol-avatar.png';
import { VOTE_TYPE } from '@/constants/voteType';
import { getVote } from '@/services/management/vote';
import { FormatBirthday } from '@/utils/datetime';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
} from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Drawer, Image, Modal, Table, Tag, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import RankingResultModal from './RankingResultModal';
import { configColumns } from './columns';

interface DataTopicVoteTableProps {
  handleSetCurTopicVote: (x: API.VoteItem) => void;
  curTopicVote?: API.VoteItem;
  setCurTopicVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  showRankingResult: boolean;
  setShowRankingResult: React.Dispatch<React.SetStateAction<boolean>>;
  currentStatus?: string;
}

const DataTopicVoteTable: FC<DataTopicVoteTableProps> = ({
  handleSetCurTopicVote,
  showDrawer,
  setShowDrawer,
  setShowModalForm,
  curTopicVote,
  setCurTopicVote,
  showRankingResult,
  setShowRankingResult,
  currentStatus,
}) => {
  const { Title } = Typography;
  const intl = useIntl();

  const [topicVote, setTopicVote] = useState<API.VoteItem[]>([]);
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: `${intl.formatMessage({
        id: 'pages.vote.topicVote.delete',
        defaultMessage: 'Delete this Topic vote',
      })}`,
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: `${intl.formatMessage({
        id: 'pages.vote.topicVote.deleteContent',
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
      onOk() {
        console.log('Deleted');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const handleClickRow = (x: API.VoteItem) => {
    setCurTopicVote(x);
    setShowDrawer(true);
  };

  const handleGetTopicVote = async () => {
    const res = await getVote({ voteType: VOTE_TYPE.TOPIC_TYPE });
    if (!currentStatus) {
      setTopicVote(res);
    } else {
      const newRes = res.filter((item) => item.status === currentStatus);
      if (newRes) {
        setTopicVote(newRes);
        return;
      }
    }
  };
  useEffect(() => {
    handleGetTopicVote();
  }, [curTopicVote, currentStatus]);

  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurTopicVote, showDeleteConfirm)}
        dataSource={topicVote}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: topicVote.length,
        }}
        onRow={(record) => {
          return {
            onClick: () => handleClickRow(record),
          };
        }}
      />
      <Drawer
        placement="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        width={500}
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="default"
              onClick={(e) => {
                e.stopPropagation();
                showDeleteConfirm();
              }}
            >
              <DeleteOutlined style={{ color: 'red' }} />
              <span style={{ color: 'red' }}>
                {intl.formatMessage({
                  id: 'pages.button.delete',
                  defaultMessage: 'Delete',
                })}
              </span>
            </Button>
            <>
              {curTopicVote?.status ? (
                <Button type="primary" onClick={() => setShowModalForm(true)}>
                  <EditOutlined />
                  <span>
                    {intl.formatMessage({
                      id: 'pages.button.edit',
                      defaultMessage: 'Edit',
                    })}
                  </span>
                </Button>
              ) : (
                <Button type="primary" onClick={() => setShowRankingResult(true)}>
                  <EyeOutlined />
                  <span>
                    {intl.formatMessage({
                      id: 'pages.button.view',
                      defaultMessage: 'View Result',
                    })}
                  </span>
                </Button>
              )}
            </>
          </div>
        }
      >
        <Image src={banner} alt="Banner" />
        <Title
          level={4}
          style={{ padding: '16px 0', borderBottom: '1px dash #E0E0E0', textAlign: 'center' }}
        >
          {curTopicVote?.voteName}
        </Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <div
              style={{
                width: '108px',
                fontSize: '14px',
                fontWeight: 400,
                color: '#616161',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {intl.formatMessage({
                id: 'pages.user.form.status',
                defaultMessage: 'Status',
              })}
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 600,
                width: 'fit-content',
                padding: '8px 12px',
                borderRadius: '30px',
                color: `${curTopicVote?.status ? '#5DC983' : '#848484'}`,
                backgroundColor: `${curTopicVote?.status ? '#E7F7EC' : '#F0F0F0'}`,
                fontSize: '13px',
              }}
            >
              {curTopicVote?.status ? 'Ongoing' : 'Closed'}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.user.form.startDate',
                defaultMessage: 'Start Date',
              })}
            </div>
            <div>{FormatBirthday(curTopicVote?.startDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.endDate',
                defaultMessage: 'End Date',
              })}
            </div>
            <div>{FormatBirthday(curTopicVote?.endDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.form.idolVote',
                defaultMessage: 'Idol vote',
              })}
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: '6px',
                columnGap: '6px',
                maxWidth: '332px',
              }}
            >
              {curTopicVote?.idolsName?.map((item, index) => (
                <Tag key={index} style={{ display: 'flex', gap: '4px', padding: '4px 10px' }}>
                  <img src={idolAvatar} alt="idolAvatar" width={20} height={20} />
                  <div>{item}</div>
                </Tag>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.form.content',
                defaultMessage: 'Content',
              })}
            </div>
            <div style={{ maxWidth: '332px' }}>{curTopicVote?.voteContent}</div>
          </div>
        </div>
      </Drawer>
      <RankingResultModal showModal={showRankingResult} setShowModal={setShowRankingResult} />
    </div>
  );
};

export default DataTopicVoteTable;

// const topicVoteData: API.TopicVoteItem[] = [
//   {
//     topicName: 'SEOL MUSIC AWARDS x FANDOM',
//     startDate: '2023-02-02T21:03:16.044967+07:00',
//     endDate: '2023-10-02T21:03:16.044967+07:00',
//     idolVote: [
//       {
//         id: 1,
//         idolName: 'Jiso',
//       },
//       {
//         id: 2,
//         idolName: 'Jenny',
//       },
//       {
//         id: 1,
//         idolName: 'Lisa',
//       },
//       {
//         id: 2,
//         idolName: 'Rose',
//       },
//     ],
//     content: contentDummy,
//     status: 1,
//   }
// ];
