import { Table } from 'antd';
import '../../../styles/styleTable.css';
import FooterTable from '../FooterTable';
import { columns } from './columns';

const DataSoloTable = () => {
  return (
    <div className="wrapp-table">
      <Table
        columns={columns}
        dataSource={soloData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: soloData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
      />
    </div>
  );
};

const soloData: API.SoloType[] = [
  {
    id: '001',
    soloName: 'Rose',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    soloName: 'Lisa',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    soloName: 'Jiso',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    soloName: 'Jenny',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    soloName: 'JK',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    soloName: 'AEY',
    vote: '3,456',
    percent: '',
  },
  {
    id: '001',
    soloName: 'Rose',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    soloName: 'Lisa',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    soloName: 'Jiso',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    soloName: 'Jenny',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    soloName: 'JK',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    soloName: 'AEY',
    vote: '3,456',
    percent: '',
  },
  {
    id: '001',
    soloName: 'Rose',
    vote: '2,234',
    percent: '50.25',
  },
  {
    id: '002',
    soloName: 'Lisa',
    vote: '1,234',
    percent: '10.5',
  },
  {
    id: '003',
    soloName: 'Jiso',
    vote: '123',
    percent: '10.5',
  },
  {
    id: '004',
    soloName: 'Jenny',
    vote: '3,456',
    percent: '20.55',
  },
  {
    id: '005',
    soloName: 'JK',
    vote: '123',
    percent: '',
  },
  {
    id: '006',
    soloName: 'AEY',
    vote: '3,456',
    percent: '',
  },
];

export default DataSoloTable;
