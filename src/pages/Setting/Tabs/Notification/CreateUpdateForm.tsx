import { formItemRule } from '@/utils/ruleForm';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Checkbox, Form, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.NotificationItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.NotificationItem) => {};

  useEffect(() => {
    form.setFieldValue('updatedDate', curItem?.updatedDate);
    form.setFieldValue('title', curItem?.title);
    form.setFieldValue('important', curItem?.important);
    form.setFieldValue('description', curItem?.description);
  }, [curItem]);

  return (
    <Modal
      title={curItem?.title === undefined ? 'Create Notification' : 'Edit Notification'}
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
        style={{
          padding: '12px 0px',
        }}
      >
        <ProFormText
          label="Title"
          name={'title'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormTextArea label="Description" name="description" rules={[formItemRule.required()]} />
        <Checkbox checked={curItem?.important === 1}>Important</Checkbox>
      </Form>
    </Modal>
  );
};
export default CreateUpdateForm;
