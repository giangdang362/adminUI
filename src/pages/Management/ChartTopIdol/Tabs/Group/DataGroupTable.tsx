import { GroupType } from '@/services/management/chart-top-idol/group/index.typing';
import { Table } from 'antd';
import '../../../styles/styleTable.css';
import FooterTable from '../FooterTable';
import { columns } from './columns';

const DataGroupTable = () => {
  return (
    <div className="wrapp-table">
      <Table
        columns={columns}
        dataSource={groupData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: groupData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
        rowClassName={'row-customize'}
      />
    </div>
  );
};

const groupData: GroupType[] = [
  {
    id: '001',
    groupName: 'Black Pink',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    groupName: 'SS501',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    groupName: 'AYE',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    groupName: 'Big Bang',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    groupName: 'JK-UAS',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    groupName: 'HIHI',
    vote: '3,456',
    percent: '',
  },
  {
    id: '001',
    groupName: 'Black Pink',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    groupName: 'SS501',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    groupName: 'AYE',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    groupName: 'Big Bang',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    groupName: 'JK-UAS',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    groupName: 'HIHI',
    vote: '3,456',
    percent: '',
  },
  {
    id: '001',
    groupName: 'Black Pink',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    groupName: 'SS501',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    groupName: 'AYE',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    groupName: 'Big Bang',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    groupName: 'JK-UAS',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    groupName: 'HIHI',
    vote: '3,456',
    percent: '',
  },
];

export default DataGroupTable;
