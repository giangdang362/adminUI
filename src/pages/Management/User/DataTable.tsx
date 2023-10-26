import { Table } from 'antd';
import { FC } from 'react';
import { configColumns } from './columns';

interface DataUserTableProps {
  handleSetCurUser: (x: API.UserItem) => void;
}

const DataUserTable: FC<DataUserTableProps> = ({ handleSetCurUser }) => {
  return (
    <div>
      <Table columns={configColumns(handleSetCurUser)} dataSource={userData} />
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
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 0,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
  {
    id: 'GR001',
    userName: 'Jung Seook',
    lastLoginDate: '2023-02-02T21:03:16.044967+07:00',
    point: 123,
    idolFollow: [
      { id: 1, idolName: 'Jennie' },
      { id: 2, idolName: 'Lisa' },
      { id: 3, idolName: 'Jisso' },
      { id: 4, idolName: 'Rose' },
      { id: 5, idolName: 'EXO' },
      { id: 6, idolName: 'BTS' },
      { id: 7, idolName: 'Winer' },
    ],
    status: 1,
  },
];

export default DataUserTable;
