import ButtonForm from '@/pages/components/ButtonForm/ButtonForm';
import TitleCurrentPage from '@/pages/components/TitleCurrentPage';
import { ProForm } from '@ant-design/pro-components';
import { Tabs, Typography } from 'antd';
import Banner from './Tabs/Banner';
import FandomService from './Tabs/FandomService';
import FundingVote from './Tabs/FundingVote';
import TopicVote from './Tabs/TopicVote';

const { Title } = Typography;

const MainPageManagement = () => {
  const [form] = ProForm.useForm();
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
                <TitleCurrentPage
                  header={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p style={{ color: '#C8467C', fontWeight: '600' }}>{item.label}</p>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <ButtonForm
                          onCancel={() => form.resetFields()}
                          onSubmit={() => form.submit()}
                        />
                      </div>
                    </div>
                  }
                />
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
