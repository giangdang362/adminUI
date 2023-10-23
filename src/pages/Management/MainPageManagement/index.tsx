import TitleCurrentPage from '@/pages/components/TitleCurrentPage';
import { Tabs, Typography } from 'antd';
import Banner from './Tabs/Banner';
import FandomService from './Tabs/FandomService';
import FundingVote from './Tabs/FundingVote';
import TopicVote from './Tabs/TopicVote';

const { Title } = Typography;

const MainPageManagement = () => {
  return (
    <div>
      <Title level={3}>Main Page</Title>
      <Tabs
        tabPosition="left"
        items={listTabsManagement.map((item, index) => {
          const id = String(index + 1);
          return {
            label: item.label,
            key: id,
            children: (
              <>
                <TitleCurrentPage title={item.label} />
                <div style={{ marginTop: '16px' }}>{item.children}</div>
              </>
            ),
          };
        })}
      />
    </div>
  );
};

export default MainPageManagement;

const listTabsManagement = [
  {
    id: 1,
    label: 'Banner',
    children: <Banner />,
  },
  {
    id: 2,
    label: 'Topic Vote',
    children: <TopicVote />,
  },
  {
    id: 3,
    label: 'Funding Vote',
    children: <FundingVote />,
  },
  {
    id: 4,
    label: 'Fandom Service',
    children: <FandomService />,
  },
];
