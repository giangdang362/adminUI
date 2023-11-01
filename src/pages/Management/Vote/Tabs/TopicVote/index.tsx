import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataTopicVoteTable from './DataTable';

export type SelectStatus = {
  label: string;
  value: string;
};

export const listSelectStatus: SelectStatus[] = [
  { label: 'On going', value: 'Ongoing' },
  { label: 'Closed', value: 'Closed' },
];

const TopicVote = () => {
  const intl = useIntl();
  const [curTopicVote, setCurTopicVote] = useState<API.VoteItem>();
  const [reload, setReload] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showRankingResult, setShowRankingResult] = useState<boolean>(false);

  const [currentStatus, setCurrentStatus] = useState<string>();

  const handleStatusChange = (x: string) => {
    setCurrentStatus(x);
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
              id: 'pages.vote.topicVote.placeholderSearch',
              defaultMessage: 'Search by topic vote',
            })}`}
            prefix={<SearchOutlined />}
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
      <DataTopicVoteTable
        curTopicVote={curTopicVote}
        setCurTopicVote={setCurTopicVote}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        setShowModalForm={setShowModalForm}
        showRankingResult={showRankingResult}
        setShowRankingResult={setShowRankingResult}
        currentStatus={currentStatus}
        reload={reload}
        setReload={setReload}
      />
      <CreateUpdateForm
        showModal={showModalForm}
        setShowModal={setShowModalForm}
        curItem={curTopicVote}
        setReload={setReload}
        setCurTopicVote={setCurTopicVote}
      />
    </div>
  );
};

export default TopicVote;
