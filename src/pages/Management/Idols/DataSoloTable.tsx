import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import { FC } from 'react';
import FooterTable from '../ChartTopIdol/Tabs/FooterTable';
import '../styles/styleTable.css';
import { configColumns } from './columns';

interface DataIdolsTableProps {
  handleSetCurIdol: (x: API.IdolsItem) => void;
}

const DataIdolsTable: FC<DataIdolsTableProps> = ({ handleSetCurIdol }) => {
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Delete this idol?',
      icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
      content: 'Do you really want to delete this idol? This process can not be undone.',
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
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurIdol, showDeleteConfirm)}
        dataSource={idolsData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: idolsData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
      />
    </div>
  );
};

export default DataIdolsTable;

const idolsData: API.IdolsItem[] = [
  {
    id: '001',
    idolName: 'Black Pink',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    members: [
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
    type: 1,
  },
  {
    id: '002',
    idolName: 'CR7',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 0,
    members: [
      {
        id: 7,
        name: 'Cristiano Ronaldo',
      },
    ],
  },
  {
    id: '010',
    idolName: 'M10',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 0,
    members: [
      {
        id: 10,
        name: 'Lionel Messi',
      },
    ],
  },
  {
    id: '003',
    idolName: 'BigBang',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
    members: [
      {
        id: 123,
        name: 'JKK',
      },
      {
        id: 123,
        name: 'AXC',
      },
      {
        id: 123,
        name: 'MXA',
      },
      {
        id: 123,
        name: 'KKO',
      },
    ],
  },
  {
    id: '004',
    idolName: 'DBSK',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
    members: [
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
  },
  {
    id: '005',
    idolName: 'JK',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '006',
    idolName: 'AEY',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '001',
    idolName: 'Rose',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '002',
    idolName: 'Lisa',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '003',
    idolName: 'Jiso',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '004',
    idolName: 'Jenny',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '005',
    idolName: 'JK',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '006',
    idolName: 'AEY',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '001',
    idolName: 'Rose',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '002',
    idolName: 'Lisa',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '003',
    idolName: 'Jiso',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '004',
    idolName: 'Jenny',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '005',
    idolName: 'JK',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
  {
    id: '006',
    idolName: 'AEY',
    birthday: '2023-10-02T21:03:16.044967+07:00',
    type: 1,
  },
];
