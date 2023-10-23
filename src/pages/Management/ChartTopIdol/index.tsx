import { Tabs, Typography } from 'antd';
import GroupChartTopIdol from './Tabs/Group';
import SoloChartTopIdol from './Tabs/Solo';

const { Title } = Typography;

const ChartTopIdol = () => {
  return (
    <div>
      <Title level={3}>Chart Top Idol</Title>
      <Tabs
        tabPosition="top"
        items={listTabs.map((item, index) => {
          const id = String(index + 1);
          return {
            label: item.label,
            key: id,
            children: item.children,
          };
        })}
      />
    </div>
  );
};

export default ChartTopIdol;

const listTabs = [
  {
    id: 1,
    label: 'Solo',
    children: <SoloChartTopIdol />,
  },
  {
    id: 2,
    label: 'Group',
    children: <GroupChartTopIdol />,
  },
];
