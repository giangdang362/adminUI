import { Table } from 'antd';
import { FC } from 'react';
import { configColumns } from './columns';

interface DataUserTableProps {
  handleSetCurUser: (x: API.UserItem) => void;
}

const DataUserTable: FC<DataUserTableProps> = ({ handleSetCurUser }) => {
  return (
    <div>
      <Table
        columns={configColumns(handleSetCurUser)} 
        dataSource={userData} 
       />
    </div>
  );
};

const userData: API.UserItem[] = [
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 0,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, name: 'Jennie' },
      { id: 2, name: 'Lisa' },
      { id: 3, name: 'Jisso' },
      { id: 4, name: 'Rose' },
      { id: 5, name: 'EXO' },
      { id: 6, name: 'BTS' },
      { id: 7, name: 'Winer' },
    ],
    status: 1,
  },
];

export default DataUserTable;
