import banner from '@/../public/images/bannerVote.png';
import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatBirthday } from '@/constants/datetime';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
} from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Drawer, Image, Modal, Table, Tag, Typography } from 'antd';
import { FC } from 'react';
import RankingResultModal from './RankingResultModal';
import { configColumns } from './columns';

const contentDummy = `Special Vote OPEN!
ポップなダンス曲はもちろんのこと、エモいバラード曲まで歌えちゃうボーカルアイドル！ 
秋にふさわしい訴求力の高い音色を持つボーカルアイドルに投票してください！ 
優勝アーティストには日本・東京最大の韓流の聖地「新大久保」駅のメイン通りを飾る機会が与えられます💖 

⭐優勝アーティストの広告は日本・東京最大のコリアンタウン「JR新大久保駅」のビジョンで7日間上映される予定です。 
⭐広告の上映スケジュールは変動する可能性があります。 

----------------------------------------------------------------- 
신나는 댄스곡은 물론, 감성젖은 목소리로 소울풀 발라드까지 섭렵 가능한 보컬 아이돌! 
가을에 걸맞는 호소력 짙은 음색을 가진 보컬 아이돌에게 투표해 주세요! 
투표 1위 아티스트에게는 일본 도쿄 최대의 한류 중심지, 「신오쿠보」역 메인 거리의 비젼 광고 리워드가 주어집니다!💖 

⭐우승 아티스트 광고는 일본 도쿄 최대의 코리안타운 "JR신오쿠보역" 비젼에서 7일간 게재됩니다. 
⭐광고 게재 일정은 변동될 수 있습니다. 

----------------------------------------------------------------- 
We've chosen the list of the idols who are famous of their talented vocal! 
Please vote to the most soulful vocalist idol who goes well with autumn season! 
The winner of the vote will be promoted on the main street's digital vision in "Shin-Okubo", which is one of the hottest town for K-POP fans in Tokyo, Japanry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

interface DataTopicVoteTableProps {
  handleSetCurTopicVote: (x: API.TopicVoteItem) => void;
  curTopicVote?: API.TopicVoteItem;
  setCurTopicVote: React.Dispatch<React.SetStateAction<API.TopicVoteItem | undefined>>;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  showRankingResult: boolean;
  setShowRankingResult: React.Dispatch<React.SetStateAction<boolean>>;
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
}) => {
  const { Title } = Typography;
  const intl = useIntl();
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
  const handleClickRow = (x: API.TopicVoteItem) => {
    setCurTopicVote(x);
    setShowDrawer(true);
  };
  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurTopicVote, showDeleteConfirm)}
        dataSource={topicVoteData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: topicVoteData.length,
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
          {curTopicVote?.topicName}
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
              {curTopicVote?.idolVote?.map((item, index) => (
                <Tag key={index} style={{ display: 'flex', gap: '4px', padding: '4px 10px' }}>
                  <img src={idolAvatar} alt="idolAvatar" width={20} height={20} />
                  <div>{item.name}</div>
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
            <div style={{ maxWidth: '332px' }}>{curTopicVote?.content}</div>
          </div>
        </div>
      </Drawer>
      <RankingResultModal showModal={showRankingResult} setShowModal={setShowRankingResult} />
    </div>
  );
};

export default DataTopicVoteTable;

const topicVoteData: API.TopicVoteItem[] = [
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    content: contentDummy,
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'DBSK',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: 'Chi Pu',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
  {
    topicName: 'US-UK K-STAR MVA BEST',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 1,
        name: 'Jiso',
      },
      {
        id: 2,
        name: 'Jenny',
      },
      {
        id: 1,
        name: 'Lisa',
      },
      {
        id: 2,
        name: 'Rose',
      },
    ],
    status: 1,
  },
  {
    topicName: '[MVA 2023] K-STAR MVA BEST ARTIST (Women)',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    idolVote: [
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
      {
        id: 100,
        name: 'AWC',
      },
      {
        id: 100,
        name: 'UAT',
      },
      {
        id: 100,
        name: 'HCA',
      },
      {
        id: 100,
        name: 'UYT',
      },
      {
        id: 100,
        name: 'THS',
      },
      {
        id: 100,
        name: 'IAY',
      },
      {
        id: 100,
        name: 'HJS',
      },
      {
        id: 100,
        name: 'QTA',
      },
      {
        id: 100,
        name: 'LKA',
      },
      {
        id: 100,
        name: 'ISB',
      },
    ],
    status: 0,
  },
];
