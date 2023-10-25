import { SearchOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import DataCommunityTable from './DataTable';

const { Title } = Typography;

const CommunityManagement = () => {
  return (
    <div>
      <Title level={3}>Community Management</Title>
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
            placeholder="Search by name"
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
      <DataCommunityTable />
    </div>
  );
};

export default CommunityManagement;
