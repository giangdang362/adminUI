import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataTopicVoteTable from './DataTable';

const TopicVote = () => {
  const [curTopicVote, setCurTopicVote] = useState<API.TopicVoteItem>({});

  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showRankingResult, setShowRankingResult] = useState<boolean>(false);

  const [currentStatus, setCurrentStatus] = useState<SelectStatus>();

  const handleSetCurTopicVote = (x: API.TopicVoteItem) => {
    setCurTopicVote(x);
    setShowModalForm(true);
  };

  const handleStatusChange = (value: SelectStatus) => {
    setCurrentStatus(value);
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
            placeholder="Search by topic vote"
            prefix={<SearchOutlined />}
          />
          <Select
            allowClear
            placeholder="Select status"
            style={{
              width: '20%',
            }}
            options={listSelectStatus.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleStatusChange}
            value={currentStatus}
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
          <span>Add</span>
        </Button>
      </div>
      <DataTopicVoteTable
        handleSetCurTopicVote={handleSetCurTopicVote}
        curTopicVote={curTopicVote}
        setCurTopicVote={setCurTopicVote}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        setShowModalForm={setShowModalForm}
        showRankingResult={showRankingResult}
        setShowRankingResult={setShowRankingResult}
      />
      <CreateUpdateForm
        showModal={showModalForm}
        setShowModal={setShowModalForm}
        curItem={curTopicVote}
      />
    </div>
  );
};

export default TopicVote;

type SelectStatus = {
  label: string;
  value: string;
};

export const listSelectStatus: SelectStatus[] = [
  { label: 'On going', value: 'onGoing' },
  { label: 'Closed', value: 'closed' },
];
