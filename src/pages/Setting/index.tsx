import ButtonForm from '@/pages/components/ButtonForm/ButtonForm';
import TitleCurrentPage from '@/pages/components/TitleCurrentPage';
import { ProForm } from '@ant-design/pro-components';
import { Button, Tabs, Typography } from 'antd';
import { useState } from 'react';
import Notification from './Tabs/Notification';
import CreateUpdateForm from './Tabs/Notification/CreateUpdateForm';
import Point from './Tabs/Point';

const { Title } = Typography;
const Setting = () => {
  const [form] = ProForm.useForm();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [curNotifi, setCurNotifi] = useState<API.NotificationItem>();

  const listTabsSetting = [
    {
      id: 1,
      label: 'Point',
      children: <Point />,
    },
    {
      id: 2,
      label: 'Notification',
      children: (
        <Notification
          setShowModal={setShowModal}
          curNotifi={curNotifi}
          setCurNotifi={setCurNotifi}
        />
      ),
    },
  ];
  return (
    <div>
      <Title level={3}>Settings</Title>
      <Tabs
        tabPosition="left"
        items={listTabsSetting.map((item, index) => {
          const id = String(index + 1);
          return {
            label: item.label,
            key: id,
            children: (
              <>
                <TitleCurrentPage
                  header={
                    item.label === 'Point' ? (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: '#C8467C', fontWeight: '600' }}>Point Setting</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <ButtonForm
                            onCancel={() => form.resetFields()}
                            onSubmit={() => form.submit()}
                          />
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ color: '#C8467C', fontWeight: '600' }}>Notification</p>
                        <Button
                          type="primary"
                          style={{
                            display: 'flex',
                            gap: '2px',
                            alignItems: 'center',
                          }}
                          onClick={() => setShowModal(true)}
                        >
                          <span>Create</span>
                        </Button>
                      </div>
                    )
                  }
                />
                <div style={{ marginTop: '16px' }}>{item.children}</div>
              </>
            ),
          };
        })}
      />
      <CreateUpdateForm showModal={showModal} setShowModal={setShowModal} curItem={curNotifi} />
    </div>
  );
};

export default Setting;
