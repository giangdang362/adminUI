import banner from '@/../public/images/bannerVote.png';
import idolAvatar from '@/../public/images/idol-avatar.png';
import pointLogo from '@/../public/images/point-logo.png';
import { FormatNumber } from '@/constants/common';
import { FormatBirthday } from '@/constants/datetime';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Drawer, Image, Modal, Progress, Table, Tag, Typography } from 'antd';
import { FC } from 'react';
import { configColumns } from './columns';

interface DataFundingVoteTableProps {
  curFundingVote: API.FundingVoteItem;
  setCurFundingVote: React.Dispatch<React.SetStateAction<API.FundingVoteItem>>;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetCurFundingVote: (x: API.FundingVoteItem) => void;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataFundingVoteTable: FC<DataFundingVoteTableProps> = ({
  curFundingVote,
  setCurFundingVote,
  setShowModalForm,
  handleSetCurFundingVote,
  showDrawer,
  setShowDrawer,
}) => {
  const { Title } = Typography;

  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Delete this Topic vote?',
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: 'Do you really want to delete this item? This process can not be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        console.log('Deleted');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const handleClickRow = (x: API.FundingVoteItem) => {
    setCurFundingVote(x);
    setShowDrawer(true);
  };
  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurFundingVote, showDeleteConfirm)}
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
              <span style={{ color: 'red' }}>Delete</span>
            </Button>
            <Button type="primary" onClick={() => setShowModalForm(true)}>
              <EditOutlined />
              <span>Edit</span>
            </Button>
          </div>
        }
      >
        <Image src={banner} alt="Banner" />
        <Title
          level={4}
          style={{ padding: '16px 0', borderBottom: '1px dash #E0E0E0', textAlign: 'center' }}
        >
          {curFundingVote?.voteTitle}
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
              Status
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 600,
                width: 'fit-content',
                padding: '8px 12px',
                borderRadius: '30px',
                color: `
                  ${curFundingVote.status === 'Ongoing' ? '#5DC983' : ''}
                  ${curFundingVote.status === 'Booking' ? '#E9B558' : ''}
                  ${curFundingVote.status === 'Closed' ? '#848484' : ''}
                `,
                backgroundColor: `
                  ${curFundingVote.status === 'Ongoing' ? '#E7F7EC' : ''}
                  ${curFundingVote.status === 'Booking' ? '#FDF3E4' : ''}
                  ${curFundingVote.status === 'Closed' ? '#F0F0F0' : ''}
                `,
                fontSize: '13px',
              }}
            >
              {curFundingVote.status}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Start Date
            </div>
            <div>{FormatBirthday(curFundingVote?.startDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              End Date
            </div>
            <div>{FormatBirthday(curFundingVote?.endDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Reward
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
              {curFundingVote.reward}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Goal
            </div>
            <div
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <img
                src={pointLogo}
                alt="point"
                style={{
                  height: '16px',
                }}
              />
              <span>{FormatNumber(curFundingVote.goal ?? 0)}</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Idol Vote
            </div>
            <div>
              <Tag
                style={{
                  fontSize: '13px',
                  display: 'flex',
                  gap: '4px',
                  padding: '4px 8px',
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
                <span>{curFundingVote.idolVote}</span>
              </Tag>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Vote
            </div>
            <Progress style={{ width: '200px' }} percent={curFundingVote.vote} />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              Content
            </div>
            <div style={{ maxWidth: '332px' }}>{curFundingVote?.content}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DataFundingVoteTable;

const topicVoteData: API.FundingVoteItem[] = [
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    reward: 'Outdoor Advertising',
    vote: 20,
    idolVote: 'Lisa',
    status: 'Ongoing',
    goal: 200000,
    content: 'Outdoor Advertising',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    reward: 'Outdoor Advertising',
    vote: 35,
    idolVote: 'Jenny',
    status: 'Booking',
    goal: 200000,
    content: 'Outdoor Advertising',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    reward: 'Outdoor Advertising',
    vote: 45,
    idolVote: 'Jiso',
    status: 'Closed',
    goal: 200000,
    content: 'Outdoor Advertising',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    reward: 'Outdoor Advertising',
    vote: 56,
    idolVote: 'Rose',
    status: 'Ongoing',
    goal: 200000,
    content: 'Outdoor Advertising',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    startDate: '2023-02-02T21:03:16.044967+07:00',
    endDate: '2023-10-02T21:03:16.044967+07:00',
    reward: 'Outdoor Advertising',
    vote: 90,
    idolVote: 'Hihi',
    status: 'Ongoing',
    goal: 200000,
    content: 'Outdoor Advertising',
  },
];