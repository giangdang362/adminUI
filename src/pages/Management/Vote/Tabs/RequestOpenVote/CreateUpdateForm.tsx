import { VOTE_TYPE } from '@/constants/voteType';
import { postVote, putVote } from '@/services/management/vote';
import {
  ProFormDatePicker,
  ProFormText,
  ProFormTextArea,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Modal, message } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.VoteItem;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  setCurRequestOpenVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({
  showModal,
  curItem,
  setShowModal,
  setReload,
  setCurRequestOpenVote,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setCurRequestOpenVote({});
    setReload((pre) => !pre);
  };
  const handleSave = (formItem: API.VoteItem) => {
    const payload: API.VotePayload = {
      voteName: formItem.voteName,
      voteTypeId: VOTE_TYPE.REQUEST_OPEN_TYPE,
      startDate: formItem.startDate ?? '2023-11-01T07:44:06.776Z',
      endDate: formItem.endDate ?? '2023-11-01T07:44:06.776Z',
      bannerFileName: formItem.bannerUrl ?? '',
      voteContent: formItem.voteContent ?? '',
      goalPoint: formItem.goalPoint ?? 0,
      reward: formItem.reward ?? '',
      idolIds: formItem.idolIds ?? [],
    };
    if (!curItem?.voteId) {
      postVote(payload)
        .then(() => {
          message.success('Create success');
        })
        .then(() => {
          handleCloseModal();
        });
    } else {
      putVote({ ...payload, voteId: curItem.voteId })
        .then(() => {
          message.success('Update success');
        })
        .then(() => {
          handleCloseModal();
        });
    }
  };

  useEffect(() => {
    form.setFieldValue('voteName', curItem?.voteName);
    form.setFieldValue('requsetDate', curItem?.requsetDate);
    form.setFieldValue('community', curItem?.community);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('voteContent', curItem?.voteContent);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem?.voteId
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
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        layout="vertical"
        name="roleForm"
        onFinish={handleSave}
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
          name={'voteName'}
          placeholder={''}
          // rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          label={`${intl.formatMessage({
            id: 'pages.vote.request.form.date',
            defaultMessage: 'requsetDate',
          })}`}
          name="requsetDate"
          placeholder={`${intl.formatMessage({
            id: 'pages.idols.form.placeholderBirth',
            defaultMessage: 'Select date',
          })}`}
          // rules={[formItemRule.required()]}
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
          // rules={[formItemRule.required()]}
        />
        <ProFormTextArea
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.content',
            defaultMessage: 'Content',
          })}`}
          name="voteContent"
          placeholder={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.placeholderContent',
            defaultMessage: 'Note',
          })}`}
          // rules={[formItemRule.required()]}
        />
      </Form>
    </Modal>
  );
};

export default CreateUpdateForm;
