import { IDOL_TYPE } from '@/constants/idolType';
import { getIdols } from '@/services/management/idols';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import '../../../styles/styleTable.css';
import FooterTable from '../FooterTable';
import { columns } from './columns';

const DataGroupTable = () => {
  const [idolGroupData, setIdolGroupData] = useState<API.IdolItem[]>([]);
  const handleGetIdolsSolo = async () => {
    const res = await getIdols({ idolType: IDOL_TYPE.GROUP_TYPE });
    setIdolGroupData(res);
  };
  useEffect(() => {
    handleGetIdolsSolo();
  }, []);
  return (
    <div className="wrapp-table">
      <Table
        columns={columns()}
        dataSource={idolGroupData}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
          total: idolGroupData.length,
        }}
        footer={() => <FooterTable dateValue="2023-10-02T21:03:16.044967+07:00" />}
        rowClassName={'row-customize'}
      />
    </div>
  );
};

// const groupData: API.GroupType[] = [
//   {
//     id: '001',
//     groupName: 'Black Pink',
//     vote: '2,234',
//     percent: '50.25',
//   },
// ];

export default DataGroupTable;
