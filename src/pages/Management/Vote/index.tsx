import { Tabs, Typography } from 'antd';
import FundingVote from './Tabs/FundingVote';
import RequestOpenVote from './Tabs/RequestOpenVote';
import TopicVote from './Tabs/TopicVote';

const { Title } = Typography;

const VoteManagement = () => {
  const listTabs = [
    {
      id: 1,
      label: 'Topic Vote',
      children: <TopicVote />,
    },
    {
      id: 2,
      label: 'Funding Vote',
      children: <FundingVote />,
    },
    {
      id: 3,
      label: 'Request Open Vote',
      children: <RequestOpenVote />,
    },
  ];
  return (
    <div>
      <Title level={3}>Vote Management</Title>
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

export default VoteManagement;
