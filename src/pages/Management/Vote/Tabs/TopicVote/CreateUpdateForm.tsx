import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDateRangePicker,
  ProFormSelect,
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
    form.setFieldValue('topicName', curItem?.voteName);
    form.setFieldValue('startDate', curItem?.startDate);
    form.setFieldValue('endDate', curItem?.endDate);
    form.setFieldValue('idolVote', curItem?.idolVote);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('content', curItem?.voteContent);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem
          ? `${intl.formatMessage({
              id: 'pages.vote.topicVote.form.titleAdd',
              defaultMessage: 'Add Topic Vote',
            })}`
          : `${intl.formatMessage({
              id: 'pages.vote.topicVote.form.titleEdit',
              defaultMessage: 'Edit Topic Vote',
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
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.topicName',
            defaultMessage: 'Topic Name',
          })}`}
          name={'topicName'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormDateRangePicker
          name={'rangeDate'}
          placeholder={[
            `${intl.formatMessage({
              id: 'pages.vote.topicVote.form.placeholderStartDate',
              defaultMessage: 'Start Date',
            })}`,
            `${intl.formatMessage({
              id: 'pages.vote.topicVote.form.placeholderEndDate',
              defaultMessage: 'End Date',
            })}`,
          ]}
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.date',
            defaultMessage: 'Start Date/ End Date',
          })}`}
          rules={[formItemRule.required()]}
        />
        {curItem && (
          <ProFormSelect
            label={`${intl.formatMessage({
              id: 'pages.vote.topicVote.form.idolVote',
              defaultMessage: 'Idol vote',
            })}`}
            name={'idolVote'}
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.topicVote.form.placeholderSelectIdol',
              defaultMessage: 'Select idol',
            })}`}
            options={curItem?.idolsName}
            rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
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
