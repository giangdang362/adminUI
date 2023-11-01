import { IDOL_TYPE } from '@/constants/idolType';
import { getIdols } from '@/services/management/idols';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import '../../../styles/styleTable.css';
import FooterTable from '../FooterTable';
import { columns } from './columns';

const DataSoloTable = () => {
  const [idolSoloData, setIdolSoloData] = useState<API.IdolItem[]>([]);
  const handleGetIdolsSolo = async () => {
    const res = await getIdols({ idolType: IDOL_TYPE.SOLO_TYPE });
    setIdolSoloData(res);
  };
  useEffect(() => {
    handleGetIdolsSolo();
  }, []);
  return (
    <div className="wrapp-table">
      <Table
        columns={columns()}
        dataSource={idolSoloData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: idolSoloData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
      />
    </div>
  );
};

// const soloData: API.SoloType[] = [
//   {
//     id: '001',
//     soloName: 'Rose',
//     vote: '2,234',
//     percent: '50.25',
//   },
// ];

export default DataSoloTable;
