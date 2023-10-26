import { ArrowLeftOutlined } from '@ant-design/icons';
import { useIntl, useNavigate } from '@umijs/max';
import { Button, Tabs } from 'antd';
import FundingVoteDetail from './FundingVote';
import RequestOpenVoteDetail from './RequestOpenVote';

const CommunityDetail = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const listTabs = [
    {
      id: 1,
      label: `${intl.formatMessage({
        id: 'pages.community.fundingVote.title',
        defaultMessage: 'Funding Vote',
      })}`,
      children: <FundingVoteDetail />,
    },
    {
      id: 2,
      label: `${intl.formatMessage({
        id: 'pages.community.request.title',
        defaultMessage: 'Request Open Vote',
      })}`,
      children: <RequestOpenVoteDetail />,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '4px',
          height: '24px',
          alignItems: 'center',
          marginBottom: '4px',
        }}
      >
        <Button
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'unset',
          }}
          onClick={() => navigate('/management/community')}
        >
          <ArrowLeftOutlined />
        </Button>
        <div
          style={{
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '24px',
          }}
        >
          {intl.formatMessage({
            id: 'pages.community.titale',
            defaultMessage: 'BlackPink',
          })}
        </div>
      </div>
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

export default CommunityDetail;
