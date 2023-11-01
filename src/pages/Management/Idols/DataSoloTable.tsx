import { IDOL_TYPE } from '@/constants/idolType';
import { getIdols } from '@/services/management/idols';
import { Table } from 'antd';
import { FC, useEffect, useState } from 'react';
import FooterTable from '../ChartTopIdol/Tabs/FooterTable';
import '../styles/styleTable.css';
import { configColumns } from './columns';

interface DataIdolsTableProps {
  handleSetCurIdol: (x: API.IdolItem) => void;
  currentType?: number;
  curIdol: API.IdolItem;
  reload?: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataIdolsTable: FC<DataIdolsTableProps> = ({
  handleSetCurIdol,
  currentType,
  curIdol,
  reload: reload,
  setReload: setReload,
}) => {
  const [idolData, setIdolData] = useState<API.IdolItem[]>([]);

  console.log('idolData', idolData);

  const handleReload = () => {
    setReload((pre) => !pre);
  };

  const handleGetIdols = async () => {
    const res =
      currentType === 1
        ? await getIdols({ idolType: IDOL_TYPE.GROUP_TYPE })
        : currentType === 2
        ? await getIdols({ idolType: IDOL_TYPE.SOLO_TYPE })
        : await getIdols({ idolType: null });
    setIdolData(res);
  };

  useEffect(() => {
    handleGetIdols();
  }, [currentType, reload]);

  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurIdol, curIdol, handleReload)}
        dataSource={idolData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: idolData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
      />
    </div>
  );
};

export default DataIdolsTable;

// const idolsData: API.IdolItem[] = [
//   {
//     id: '001',
//     idolName: 'Black Pink',
//     birthday: '2023-10-02T21:03:16.044967+07:00',
//     members: [
//       {
//         id: 1,
//         name: 'Jiso',
//       },
//       {
//         id: 2,
//         name: 'Jenny',
//       },
//       {
//         id: 1,
//         name: 'Lisa',
//       },
//       {
//         id: 2,
//         name: 'Rose',
//       },
//     ],
//     type: 1,
//   },
// ];
