import { SearchOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import { useState } from 'react';
import DataUserTable from './DataTable';
import UpdateForm from './UpdateForm';

const { Title } = Typography;

const UserManagement = () => {
  const [curUser, setCurUser] = useState<API.UserItem>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleSetCurUser = (x: API.UserItem) => {
    setCurUser(x);
    setShowModal(true);
  };
  return (
    <div>
      <Title level={3}>User Management</Title>
      <Input
        style={{
          width: '20%',
          borderRadius: '4px',
          color: '#D9D9D9',
        }}
        placeholder="Search by name"
        prefix={<SearchOutlined />}
      />
      <DataUserTable handleSetCurUser={handleSetCurUser} />
      <UpdateForm showModal={showModal} setShowModal={setShowModal} curItem={curUser} />
    </div>
  );
};

export default UserManagement;
