import { GroupType } from '@/services/management/chart-top-idol/group/index.typing';
import {} from '@/services/management/chart-top-idol/solo/index.typing';
import { Progress } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType<GroupType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: 'Group Name',
    dataIndex: 'groupName',
    key: 'groupName',
    width: '50%',
  },
  {
    title: 'Vote',
    dataIndex: 'vote',
    key: 'vote',
    width: '20%',
  },
  {
    title: 'Percent',
    dataIndex: 'percent',
    key: 'percent',
    render: (_, original) => (
      <div>
        {original.percent?.length ? <Progress percent={Number(original.percent)} /> : ' - '}
      </div>
    ),
    width: '20%',
  },
];
