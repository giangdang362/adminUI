import { SoloType } from '@/services/management/chart-top-idol/solo/index.typing';
import { Progress } from 'antd';
import { ColumnsType } from 'antd/es/table';
import styled from 'styled-components';

export const columns: ColumnsType<SoloType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
  },
  {
    title: 'Solo Name',
    dataIndex: 'soloName',
    key: 'soloName',
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

const StyledForm = styled(Progress)`
  .ant-progress-line {
    margin-bottom: 0px;
  }
`;
