import { SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Input, Typography } from 'antd';
import { useState } from 'react';
import DataUserTable from './DataTable';
import UpdateForm from './UpdateForm';

const { Title } = Typography;

const UserManagement = () => {
  const intl = useIntl();
  const [curUser, setCurUser] = useState<API.User>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleSetCurUser = (x: API.User) => {
    setCurUser(x);
    setShowModal(true);
  };
  return (
    <div>
      <Title level={3}>
        {intl.formatMessage({
          id: 'pages.user.title',
          defaultMessage: 'User Management',
        })}
      </Title>
      <Input
        style={{
          width: '20%',
          borderRadius: '4px',
          color: '#D9D9D9',
        }}
        placeholder={`${intl.formatMessage({
          id: 'pages.chartTopIdol.solo.placeholderSearch',
          defaultMessage: 'Search by name',
        })}`}
        prefix={<SearchOutlined />}
      />
      <DataUserTable handleSetCurUser={handleSetCurUser} />
      <UpdateForm showModal={showModal} setShowModal={setShowModal} curItem={curUser} />
    </div>
  );
};

export default UserManagement;
