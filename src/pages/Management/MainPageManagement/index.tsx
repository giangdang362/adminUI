import ButtonForm from '@/pages/components/ButtonForm/ButtonForm';
import TitleCurrentPage from '@/pages/components/TitleCurrentPage';
import { ProForm } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Tabs, Typography } from 'antd';
import Banner from './Tabs/Banner';
import FandomService from './Tabs/FandomService';
import FundingVote from './Tabs/FundingVote';
import TopicVote from './Tabs/TopicVote';

const { Title } = Typography;

const MainPageManagement = () => {
  const intl = useIntl();
  const [form] = ProForm.useForm();
  const listTabsManagement = [
    {
      id: 1,
      label: `${intl.formatMessage({
        id: 'pages.mainPage.banner.title',
        defaultMessage: 'Banner',
      })}`,
      children: <Banner />,
    },
    {
      id: 2,
      label: `${intl.formatMessage({
        id: 'pages.mainPage.topicVote.title',
        defaultMessage: 'Topic Vote',
      })}`,
      children: <TopicVote />,
    },
    {
      id: 3,
      label: `${intl.formatMessage({
        id: 'pages.mainPage.fundingVote.title',
        defaultMessage: 'Funding Vote',
      })}`,
      children: <FundingVote />,
    },
    {
      id: 4,
      label: `${intl.formatMessage({
        id: 'pages.mainPage.fandomService.title',
        defaultMessage: 'Fandom service',
      })}`,
      children: <FandomService />,
    },
  ];
  return (
    <div>
      <Title level={3}>
        {intl.formatMessage({
          id: 'pages.mainPage.title',
          defaultMessage: 'Main Page Management',
        })}
      </Title>
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
