import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import { FC } from 'react';
import { configColumns } from './columns';

interface DataTopicVoteTableProps {
  handleSetCurTopicVote: (x: API.TopicVoteItem) => void;
}

const DataTopicVoteTable: FC<DataTopicVoteTableProps> = ({ handleSetCurTopicVote }) => {
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Delete this Topic vote?',
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: 'Do you really want to delete this Topic vote? This process can not be undone.',
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
  return (
    <div>
      <Table
        columns={configColumns(handleSetCurTopicVote, showDeleteConfirm)}
        dataSource={topicVoteData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: topicVoteData.length,
        }}
      />
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
