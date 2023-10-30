import { IDOL_TYPE } from '@/constants/idolType';
import { getIdols } from '@/services/management/idols';
import { useIntl } from '@umijs/max';
import { Table } from 'antd';
import { FC, useEffect, useState } from 'react';
import FooterTable from '../ChartTopIdol/Tabs/FooterTable';
import '../styles/styleTable.css';
import { configColumns } from './columns';

interface DataIdolsTableProps {
  handleSetCurIdol: (x: API.IdolItem) => void;
  currentType?: number;
  curIdol: API.IdolItem;
  render?: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataIdolsTable: FC<DataIdolsTableProps> = ({
  handleSetCurIdol,
  currentType,
  curIdol,
  render,
  setRender,
}) => {
  const intl = useIntl();
  const [idolData, setIdolData] = useState<API.IdolItem[]>([]);

  const handleRender = () => {
    setRender((pre) => !pre);
  };
  // const Delete = async () => {
  //   await deleteIdol({idolId:""})

  // }

  // const { confirm } = Modal;
  // const showDeleteConfirm = () => {
  //   confirm({
  //     title: `${intl.formatMessage({
  //       id: 'pages.button.delete.title',
  //       defaultMessage: 'Delete this item',
  //     })}`,
  //     icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
  //     content: `${intl.formatMessage({
  //       id: 'pages.button.delete.content',
  //       defaultMessage: 'Do you really want to delete this item? This process can not be undone.',
  //     })}`,
  //     okText: `${intl.formatMessage({
  //       id: 'pages.button.delete',
  //       defaultMessage: 'Delete',
  //     })}`,
  //     okType: 'danger',
  //     cancelText: `${intl.formatMessage({
  //       id: 'pages.button.cancel',
  //       defaultMessage: 'Cancel',
  //     })}`,
  //     onOk: async () => {
  //       try {
  //         // await deleteIdol({idolId: curIdol?.id ?? ""});
  //         console.log("curIdol", curIdol?.id);

  //       } catch (error) {
  //         console.error('Lỗi xóa idol:', error);
  //       }
  //     },
  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  // };

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
  }, [currentType, render]);

  return (
    <div className="wrapp-table">
      <Table
        columns={configColumns(handleSetCurIdol, curIdol, handleRender)}
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
