import idolAvatar from '@/../public/images/idol-avatar.png';
import banner from '@/../public/images/openVoteBanner.png';
import { FormatBirthday } from '@/constants/datetime';
import '@/pages/Management/styles/styleTable.css';
import { DeleteOutlined, ExclamationCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Drawer, Image, Modal, Popover, Table, Tag, Typography } from 'antd';
import { FC } from 'react';
import { configColumns } from './columns';

interface DataRequestOpenVoteTableProps {
  curRequestOpenVote?: API.RequestOpenVoteItem;
  setCurRequestOpenVote: React.Dispatch<React.SetStateAction<API.RequestOpenVoteItem | undefined>>;
  handleSetCurFundingVote: (x: API.RequestOpenVoteItem) => void;
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  showRejectModal: boolean;
  setShowRejectModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataRequestOpenVoteTable: FC<DataRequestOpenVoteTableProps> = ({
  curRequestOpenVote,
  setCurRequestOpenVote,
  handleSetCurFundingVote,
  showDrawer,
  setShowDrawer,
  showRejectModal,
  setShowRejectModal,
}) => {
  const { Title } = Typography;
  const intl = useIntl();
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: `${intl.formatMessage({
        id: 'pages.vote.request.delete',
        defaultMessage: 'Delete this Request vote',
      })}`,
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: `${intl.formatMessage({
        id: 'pages.vote.request.deleteContent',
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

  const handleClickRow = (x: API.FundingVoteItem) => {
    setCurRequestOpenVote(x);
    setShowDrawer(true);
  };

  const handleClickReject = () => {
    setShowRejectModal(true);
  };
  const handClickConfirmReject = () => {
    setShowRejectModal(false);
    setShowDrawer(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setShowRejectModal(newOpen);
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
              <span style={{ color: 'red' }}>
                {intl.formatMessage({
                  id: 'pages.button.delete',
                  defaultMessage: 'Delete',
                })}
              </span>
            </Button>
            {curRequestOpenVote?.status === 'Waiting Approve' && (
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <Popover
                  trigger="click"
                  open={showRejectModal}
                  onOpenChange={handleOpenChange}
                  content={() => (
                    <div
                      style={{
                        width: '270px',
                        padding: '4px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '12px',
                        }}
                      >
                        <InfoCircleOutlined style={{ color: '#FAAD14' }} />
                        <span>
                          {intl.formatMessage({
                            id: 'pages.vote.request.reject',
                            defaultMessage:
                              'Are you sure you want to reject this Open Vote Request ?',
                          })}
                        </span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          gap: '8px',
                        }}
                      >
                        <Button onClick={() => setShowRejectModal(false)}>
                          {intl.formatMessage({
                            id: 'pages.button.reject.no',
                            defaultMessage: 'No',
                          })}
                        </Button>
                        <Button type="primary" onClick={() => handClickConfirmReject}>
                          {intl.formatMessage({
                            id: 'pages.button.reject.yes',
                            defaultMessage: 'Yes',
                          })}
                        </Button>
                      </div>
                    </div>
                  )}
                >
                  <Button onClick={() => handleClickReject}>
                    {intl.formatMessage({
                      id: 'pages.button.reject',
                      defaultMessage: 'Reject',
                    })}
                  </Button>
                </Popover>
                <Button type="primary" onClick={() => setShowDrawer(false)}>
                  {intl.formatMessage({
                    id: 'pages.button.approve',
                    defaultMessage: 'Approve',
                  })}
                </Button>
              </div>
            )}
          </div>
        }
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image src={banner} alt="Banner" width={200} height={200} />
        </div>
        <Title
          level={4}
          style={{ padding: '16px 0', borderBottom: '1px dash #E0E0E0', textAlign: 'center' }}
        >
          {curRequestOpenVote?.voteTitle}
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
                  ${curRequestOpenVote?.status === 'Approved' ? '#5DC983' : ''}
                  ${curRequestOpenVote?.status === 'Waiting Approve' ? '#E9B558' : ''}
                  ${curRequestOpenVote?.status === 'Rejected' ? '#848484' : ''}
                `,
                backgroundColor: `
                  ${curRequestOpenVote?.status === 'Approved' ? '#E7F7EC' : ''}
                  ${curRequestOpenVote?.status === 'Waiting Approve' ? '#FDF3E4' : ''}
                  ${curRequestOpenVote?.status === 'Rejected' ? '#F0F0F0' : ''}
                `,
                fontSize: '13px',
              }}
            >
              {curRequestOpenVote?.status}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.fundingVote.form.idolVote',
                defaultMessage: 'Idol vote',
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
                <span>{curRequestOpenVote?.community}</span>
              </Tag>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.endDate',
                defaultMessage: 'End Date',
              })}
            </div>
            <div>{FormatBirthday(curRequestOpenVote?.requestDate ?? '')}</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '108px', fontSize: '14px', fontWeight: 400, color: '#616161' }}>
              {intl.formatMessage({
                id: 'pages.vote.topicVote.form.content',
                defaultMessage: 'Content',
              })}
            </div>
            <div style={{ maxWidth: '332px' }}>{curRequestOpenVote?.content}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DataRequestOpenVoteTable;

const topicVoteData: API.RequestOpenVoteItem[] = [
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    requestDate: '2023-02-02T21:03:16.044967+07:00',
    community: 'Lisa',
    status: 'Approved',
    content: 'Content SEOL MUSIC AWARDS x FANDOM',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    requestDate: '2023-02-02T21:03:16.044967+07:00',
    community: 'Jenny',
    status: 'Waiting Approve',
    content: 'Content SEOL MUSIC AWARDS x FANDOM',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    requestDate: '2023-02-02T21:03:16.044967+07:00',
    community: 'Jiso',
    status: 'Rejected',
    content: 'Content SEOL MUSIC AWARDS x FANDOM',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    requestDate: '2023-02-02T21:03:16.044967+07:00',
    community: 'Rose',
    status: 'Approved',
    content: 'Content SEOL MUSIC AWARDS x FANDOM',
  },
  {
    voteTitle: 'SEOL MUSIC AWARDS x FANDOM',
    requestDate: '2023-02-02T21:03:16.044967+07:00',
    community: 'Hihi',
    status: 'Approved',
    content: 'Content SEOL MUSIC AWARDS x FANDOM',
  },
];
