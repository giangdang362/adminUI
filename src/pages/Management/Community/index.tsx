import { SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Input, Typography } from 'antd';
import DataCommunityTable from './DataTable';

const { Title } = Typography;

const CommunityManagement = () => {
  const intl = useIntl();
  return (
    <div>
      <Title level={3}>
        {intl.formatMessage({
          id: 'pages.community.title',
          defaultMessage: 'Community Management',
        })}
      </Title>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '12px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Input
            style={{
              width: '20%',
            }}
            placeholder={`${intl.formatMessage({
              id: 'pages.chartTopIdol.solo.placeholderSearch',
              defaultMessage: 'Search by name',
            })}`}
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <DataCommunityTable />
    </div>
  );
};

export default CommunityManagement;
