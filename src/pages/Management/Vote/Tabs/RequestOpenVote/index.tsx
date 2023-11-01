import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataRequestOpenVoteTable from './DataTable';

const RequestOpenVote = () => {
  const intl = useIntl();
  const [curRequestOpenVote, setCurRequestOpenVote] = useState<API.VoteItem>();
  const [reload, setReload] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);

  const [currentStatus, setCurrentStatus] = useState<string>();
  const [currentCommunity, setCurrentCommunity] = useState<SelectType>();

  const handleStatusChange = (x: string) => {
    setCurrentStatus(x);
  };

  const handleCommunityChange = (value: SelectType) => {
    setCurrentCommunity(value);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '12px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Input
            style={{
              width: '20%',
            }}
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.request.placeholderSearch',
              defaultMessage: 'Search by vote title',
            })}`}
            prefix={<SearchOutlined />}
          />
          <Select
            allowClear
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.request.placeholderCommunity',
              defaultMessage: 'Search community',
            })}`}
            style={{
              width: '20%',
            }}
            options={listIdol.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleCommunityChange}
            value={currentCommunity}
          />
          <Select
            allowClear
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.topicVote.placeholderSelect',
              defaultMessage: 'Select status',
            })}`}
            style={{
              width: '20%',
            }}
            options={listSelectStatus.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleStatusChange}
          />
        </div>
        <Button
          type="primary"
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
          }}
          onClick={() => setShowModalForm(true)}
        >
          <PlusOutlined />
          <span>
            {intl.formatMessage({
              id: 'pages.button.add',
              defaultMessage: 'Add',
            })}
          </span>
        </Button>
      </div>
      <DataRequestOpenVoteTable
        curRequestOpenVote={curRequestOpenVote}
        setCurRequestOpenVote={setCurRequestOpenVote}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        setShowModalForm={setShowModalForm}
        showRejectModal={showRejectModal}
        setShowRejectModal={setShowRejectModal}
        currentStatus={currentStatus}
        reload={reload}
        setReload={setReload}
      />
      <CreateUpdateForm
        showModal={showModalForm}
        setShowModal={setShowModalForm}
        curItem={curRequestOpenVote}
      />
    </div>
  );
};

export default RequestOpenVote;

type SelectType = {
  label: string;
  value: string;
};

export const listSelectStatus: SelectType[] = [
  { label: 'Approved', value: 'Approved' },
  { label: 'Waiting Approve', value: 'WaitingApprove' },
  { label: 'Rejected', value: 'Rejected' },
];

export const listIdol: SelectType[] = [
  { label: 'Lisa', value: 'Lisa' },
  { label: 'Jenny', value: 'Jenny' },
  { label: 'Rose', value: 'Rose' },
  { label: 'Jiso', value: 'Jiso' },
];
