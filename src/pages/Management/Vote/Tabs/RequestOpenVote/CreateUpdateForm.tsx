import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDatePicker,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.RequestOpenVoteItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.RequestOpenVoteItem) => {};

  useEffect(() => {
    form.setFieldValue('voteTitle', curItem?.voteTitle);
    form.setFieldValue('requestDate', curItem?.requestDate);
    form.setFieldValue('community', curItem?.community);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('content', curItem?.content);
  }, [curItem]);

  return (
    <Modal
      title="Add Idol"
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
          padding: '12px 0',
        }}
      >
        <ProFormText
          allowClear
          label="Vote Title"
          name={'voteTitle'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          label="RequestDate"
          name="requestDate"
          placeholder="Select date"
          rules={[formItemRule.required()]}
        />
        <ProFormUploadButton
          label="Banner"
          title="Upload"
          name={'banner'}
          rules={[formItemRule.required()]}
        />
        <ProFormTextArea
          label="Content"
          name="content"
          placeholder="Note"
          rules={[formItemRule.required()]}
        />
      </Form>
    </Modal>
  );
};

export default CreateUpdateForm;
