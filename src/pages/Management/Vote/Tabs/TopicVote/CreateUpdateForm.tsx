import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.TopicVoteItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.TopicVoteItem) => {};

  useEffect(() => {
    form.setFieldValue('topicName', curItem?.topicName);
    form.setFieldValue('startDate', curItem?.startDate);
    form.setFieldValue('endDate', curItem?.endDate);
    form.setFieldValue('idolVote', curItem?.idolVote);
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
          label="Topic Name"
          name={'topicName'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormDateRangePicker
          name={'rangeDate'}
          placeholder={['Start date', 'End date']}
          label="Start Date/ End Date"
          rules={[formItemRule.required()]}
        />
        {curItem && (
          <ProFormSelect
            label="Idol vote"
            name={'idolVote'}
            placeholder={'Select idol'}
            options={curItem?.idolVote}
            rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
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