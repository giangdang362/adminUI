import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Input, Select } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataFundingVoteTable from './DataTable';

const FundingVote = () => {
  const intl = useIntl();
  const [curFundingVote, setCurFundingVote] = useState<API.VoteItem>();
  const [reload, setReload] = useState<boolean>(false);
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showRankingResult, setShowRankingResult] = useState<boolean>(false);

  const [currentStatus, setCurrentStatus] = useState<string>();
  const [currentIdol, setCurrentIdol] = useState<SelectStatus>();

  const handleStatusChange = (x: string) => {
    setCurrentStatus(x);
  };

  const handleIdolChange = (value: SelectStatus) => {
    setCurrentIdol(value);
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
            value={currentStatus}
          />
          <Select
            allowClear
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.fundingVote.placeholderSelect',
              defaultMessage: 'Select idol vote',
            })}`}
            style={{
              width: '20%',
            }}
            // options={listIdol.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleIdolChange}
            value={currentIdol}
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
      <DataFundingVoteTable
        curFundingVote={curFundingVote}
        setCurFundingVote={setCurFundingVote}
        setShowModalForm={setShowModalForm}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        currentStatus={currentStatus}
        reload={reload}
        setReload={setReload}
      />
      <CreateUpdateForm
        showModal={showModalForm}
        setShowModal={setShowModalForm}
        curItem={curFundingVote}
        setReload={setReload}
        setCurFundingVote={setCurFundingVote}
      />
    </div>
  );
};

export default FundingVote;

type SelectStatus = {
  label: string;
  value: string;
};

export const listSelectStatus: SelectStatus[] = [
  { label: 'On going', value: 'Ongoing' },
  { label: 'Booking', value: 'Booking' },
  { label: 'Closed', value: 'Closed' },
];

// export const listIdol: SelectStatus[] = [
//   { label: 'Lisa', value: 'Lisa' },
//   { label: 'Jenny', value: 'Jenny' },
//   { label: 'Rose', value: 'Rose' },
//   { label: 'Jiso', value: 'Jiso' },
// ];
