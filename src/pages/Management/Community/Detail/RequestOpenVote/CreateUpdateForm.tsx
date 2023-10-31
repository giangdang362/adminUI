import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDatePicker,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.VoteItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.VoteItem) => {};

  useEffect(() => {
    form.setFieldValue('voteTitle', curItem?.voteTitle);
    form.setFieldValue('requestDate', curItem?.requestDate);
    form.setFieldValue('community', curItem?.community);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('content', curItem?.content);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem
          ? `${intl.formatMessage({
              id: 'pages.vote.request.form.titleAdd',
              defaultMessage: 'Add Request Open Vote',
            })}`
          : `${intl.formatMessage({
              id: 'pages.vote.request.form.titleEdit',
              defaultMessage: 'Edit Request Open Vote',
            })}`
      }
      open={showModal}
      onCancel={handleCloseModal}
      okText={`${intl.formatMessage({
        id: 'pages.button.save',
        defaultMessage: 'Save',
      })}`}
      cancelText={`${intl.formatMessage({
        id: 'pages.button.cancel',
        defaultMessage: 'Cancel',
      })}`}
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
          label={`${intl.formatMessage({
            id: 'pages.vote.fundingVote.form.voteTitle',
            defaultMessage: 'Vote Title',
          })}`}
          name={'voteTitle'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          label={`${intl.formatMessage({
            id: 'pages.vote.request.form.date',
            defaultMessage: 'RequestDate',
          })}`}
          name="requestDate"
          placeholder={`${intl.formatMessage({
            id: 'pages.idols.form.placeholderBirth',
            defaultMessage: 'Select date',
          })}`}
          rules={[formItemRule.required()]}
        />
        <ProFormUploadButton
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.banner',
            defaultMessage: 'Banner',
          })}`}
          title={`${intl.formatMessage({
            id: 'pages.button.upload',
            defaultMessage: 'Upload',
          })}`}
          name={'banner'}
          rules={[formItemRule.required()]}
        />
        <ProFormTextArea
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.content',
            defaultMessage: 'Content',
          })}`}
          name="content"
          placeholder={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.placeholderContent',
            defaultMessage: 'Note',
          })}`}
          rules={[formItemRule.required()]}
        />
      </Form>
    </Modal>
  );
};

export default CreateUpdateForm;
