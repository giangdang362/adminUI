import banner from '@/../public/images/bannerVote.png';
import idolAvatar from '@/../public/images/idol-avatar.png';
import pointLogo from '@/../public/images/point-logo.png';
import { VOTE_TYPE } from '@/constants/voteType';
import { deleteVote, getVote } from '@/services/management/vote';
import { FormatNumber } from '@/utils/common';
import { FormatBirthday } from '@/utils/datetime';
import { DeleteOutlined, EditOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Drawer, Image, Modal, Progress, Table, Tag, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { configColumns } from './columns';

interface DataFundingVoteTableProps {
  curFundingVote?: API.VoteItem;
  setCurFundingVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>;
  setShowModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  currentStatus?: string;
  reload?: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataFundingVoteTable: FC<DataFundingVoteTableProps> = ({
  curFundingVote,
  setCurFundingVote,
  setShowModalForm,
  showDrawer,
  setShowDrawer,
  currentStatus,
  reload,
  setReload,
}) => {
  const { Title } = Typography;
  const intl = useIntl();

  const [fundingVote, setFundingVote] = useState<API.VoteItem[]>([]);

  const handleReload = () => {
    setReload((pre) => !pre);
  };
  const { confirm } = Modal;
  const showDeleteConfirm = (id: number) => {
    confirm({
      title: `${intl.formatMessage({
        id: 'pages.vote.fundingVote.delete',
        defaultMessage: 'Delete this Funding vote',
      })}`,
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: `${intl.formatMessage({
        id: 'pages.vote.fundingVote.deleteContent',
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
          await deleteVote(id);
          handleReload();
          setShowDrawer(false);
        } catch (error) {
          console.error('Lỗi xóa idol:', error);
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const handleClickRow = (x: API.VoteItem) => {
    setCurFundingVote(x);
    setShowDrawer(true);
  };

  const handleGetFundingVote = async () => {
    const res = await getVote({ voteType: VOTE_TYPE.FUNDING_TYPE });
    if (!currentStatus) {
      setFundingVote(res);
    } else {
      const newRes = res.filter((item) => item.status === currentStatus);
      if (newRes) {
        setFundingVote(newRes);
        return;
      }
    }
  };

  useEffect(() => {
    handleGetFundingVote();
  }, [curFundingVote, currentStatus, reload]);

  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(showDeleteConfirm, setShowModalForm, setCurFundingVote)}
        dataSource={fundingVote}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: fundingVote.length,
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
                showDeleteConfirm(curFundingVote?.voteId ?? -1);
              }}
            >
              <DeleteOutlined style={{ color: 'red' }} />
              <span style={{ color: 'red' }}>Delete</span>
            </Button>
            <Button type="primary" onClick={() => setShowModalForm(true)}>
              <EditOutlined />
              <span>
                {intl.formatMessage({
                  id: 'pages.button.edit',
                  defaultMessage: 'Edit',
                })}
              </span>
            </Button>
          </div>
        }
      >
        <Image src={banner} alt="Banner" />
        <Title
          level={4}
          style={{ padding: '16px 0', borderBottom: '1px dash #E0E0E0', textAlign: 'center' }}
        >
          {curFundingVote?.voteName}
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
                color: `
                  ${curFundingVote?.status === 'Ongoing' ? '#5DC983' : ''}
                  ${curFundingVote?.status === 'Booking' ? '#E9B558' : ''}
                  ${curFundingVote?.status === 'Closed' ? '#848484' : ''}
                `,
                backgroundColor: `
                  ${curFundingVote?.status === 'Ongoing' ? '#E7F7EC' : ''}
                  ${curFundingVote?.status === 'Booking' ? '#FDF3E4' : ''}
                  ${curFundingVote?.status === 'Closed' ? '#F0F0F0' : ''}
                `,
                fontSize: '13px',
              }}
            >
              {curFundingVote?.status}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.user.form.startDate',
                defaultMessage: 'Start Date',
              })}
            </div>
            <div>{FormatBirthday(curFundingVote?.startDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.endDate',
                defaultMessage: 'End Date',
              })}
            </div>
            <div>{FormatBirthday(curFundingVote?.endDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.form.reward',
                defaultMessage: 'Reward',
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
              {curFundingVote?.reward}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.goal',
                defaultMessage: 'Goal',
              })}
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
              <span>{FormatNumber(curFundingVote?.goalPoint ?? 0)}</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.form.idolVote',
                defaultMessage: 'Idol Vote',
              })}
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
                <span>{curFundingVote?.idolVote}</span>
              </Tag>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.vote',
                defaultMessage: 'Vote',
              })}
            </div>
            <Progress style={{ width: '200px' }} percent={curFundingVote?.vote} />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.form.content',
                defaultMessage: 'Content',
              })}
            </div>
            <div style={{ maxWidth: '332px' }}>{curFundingVote?.voteContent}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DataFundingVoteTable;

// const topicVoteData: API.FundingVoteItem[] = [
//   {
//     voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
//     startDate: '2023-02-02T21:03:16.044967+07:00',
//     endDate: '2023-10-02T21:03:16.044967+07:00',
//     reward: 'Outdoor Advertising',
//     vote: 20,
//     idolVote: 'Lisa',
//     status: 'Ongoing',
//     goal: 200000,
//     content: 'Outdoor Advertising',
//   },
// ];
