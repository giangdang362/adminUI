import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import DataTopicVoteTable from './DataTable';

const TopicVote = () => {
  const [curTopicVote, setCurTopicVote] = useState<API.TopicVoteItem>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentStatus, setCurrentStatus] = useState<SelectStatus>();

  const handleSetCurTopicVote = (x: API.TopicVoteItem) => {
    setCurTopicVote(x);
    setShowModal(true);
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
            placeholder="Select status"
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
          onClick={() => setShowModal(true)}
        >
          <PlusOutlined />
          <span>Add</span>
        </Button>
      </div>
      <DataTopicVoteTable handleSetCurTopicVote={handleSetCurTopicVote} />
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
