import { useNavigate } from '@umijs/max';
import { Table } from 'antd';
import '../styles/styleTable.css';
import { columns } from './columns';

const DataCommunityTable = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapp-table">
      <Table
        columns={columns()}
        dataSource={soloData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: soloData.length,
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate('detail');
            },
          };
        }}
      />
    </div>
  );
};

const soloData: API.CommunityItem[] = [
  {
    community: 'Blackpink',
    dailyChart: 1,
    PDS: 12345,
    post: 120,
    vote: 120,
  },
  {
    community: 'Lisa',
    dailyChart: 2,
    PDS: 45567,
    post: 22,
    vote: 15420,
  },
  {
    community: 'Rose',
    dailyChart: 3,
    PDS: 14567,
    post: 120,
    vote: 120,
  },
  {
    community: 'Blackpink',
    dailyChart: 4,
    PDS: 226783,
    post: 120,
    vote: 120,
  },
  {
    community: 'Blackpink',
    dailyChart: 5,
    PDS: 87123,
    post: 120,
    vote: 35219,
  },
];

export default DataCommunityTable;
