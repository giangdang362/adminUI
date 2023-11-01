import { VOTE_TYPE } from '@/constants/voteType';
import { postVote, putVote } from '@/services/management/vote';
import {
  ProFormDateRangePicker,
  ProFormSelect,
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
  setCurTopicVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({
  showModal,
  curItem,
  setShowModal,
  setReload,
  setCurTopicVote,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setCurTopicVote({});
    setReload((pre) => !pre);
  };

  const handleSave = (formItem: API.VoteItem) => {
    const payload: API.VotePayload = {
      voteName: formItem.voteName,
      voteTypeId: VOTE_TYPE.TOPIC_TYPE,
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
    form.setFieldValue('startDate', curItem?.startDate ?? '');
    form.setFieldValue('endDate', curItem?.endDate ?? '');
    form.setFieldValue('idolVote', curItem?.idolVote);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('voteContent', curItem?.voteContent);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem?.voteId
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
          label={`${intl.formatMessage({
            id: 'pages.vote.topicVote.form.topicName',
            defaultMessage: 'Topic Name',
          })}`}
          name={'voteName'}
          placeholder={''}
          // rules={[formItemRule.required()]}
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
          // rules={[formItemRule.required()]}
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
            // rules={[formItemRule.required()]}
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
