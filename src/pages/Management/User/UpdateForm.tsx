import { formItemRule } from '@/utils/ruleForm';
import { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Form, Input, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface UpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.UserItem;
}

const UpdateForm: FC<UpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.UserItem) => {};

  useEffect(() => {
    form.setFieldValue('id', curItem?.id);
    form.setFieldValue('userName', curItem?.userName);
    form.setFieldValue('lastLoginDate', curItem?.lastLoginDate);
    form.setFieldValue('point', curItem?.point);
    form.setFieldValue('idolFollow', curItem?.idolFollow);
    form.setFieldValue('status', curItem?.status === 1 ? 'Actived' : 'Not Activated');
    form.setFieldValue('email', curItem?.email);
    form.setFieldValue('password', curItem?.password);
  }, [curItem]);

  return (
    <Modal
      title="Edit Users"
      open={showModal}
      onCancel={handleCloseModal}
      okText="Save"
      cancelText="Cancel"
    >
      <Form
        form={form}
        layout="vertical"
        name="roleForm"
        onFinish={handleSubmit}
        style={{ padding: '12px 0px' }}
      >
        <ProFormText label="User Name" placeholder="" name="userName" />
        <div style={{ display: 'flex', gap: '15px' }}>
          <ProFormDatePicker label="Start Date" name="lastLoginDate" disabled />
          <ProFormDatePicker label="Last Login Date" name="lastLoginDate" disabled />
        </div>
        <ProFormText label="Email" placeholder="" name="email" disabled />
        <ProFormText.Password label="Password" placeholder="" name="password" />
        {curItem && (
          <ProFormSelect
            label="Idol Follow"
            name={'idolFollow'}
            placeholder={'Select type'}
            options={curItem?.idolFollow?.map((item) => item.name)}
            rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
        <div style={{ display: 'flex', gap: '15px' }}>
          <Form.Item label="Point" name="point">
            <Input suffix="Point" disabled style={{ height: '34px' }} />
          </Form.Item>
          <ProFormText
            label="Status"
            placeholder=""
            name="status"
            rules={[formItemRule.required()]}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
