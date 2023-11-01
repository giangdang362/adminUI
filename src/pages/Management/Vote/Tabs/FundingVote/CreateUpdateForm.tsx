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
  setCurFundingVote: React.Dispatch<React.SetStateAction<API.VoteItem | undefined>>;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({
  showModal,
  curItem,
  setShowModal,
  setReload,
  setCurFundingVote,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setCurFundingVote({});
    setReload((pre) => !pre);
  };
  const handleSave = (formItem: API.VoteItem) => {
    const payload: API.VotePayload = {
      voteName: formItem.voteName,
      voteTypeId: VOTE_TYPE.FUNDING_TYPE,
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
    form.setFieldValue('startDate', curItem?.startDate);
    form.setFieldValue('endDate', curItem?.endDate);
    form.setFieldValue('reward', curItem?.reward);
    form.setFieldValue('goalPoint', curItem?.goalPoint);
    form.setFieldValue('idolVote', curItem?.idolVote);
    form.setFieldValue('vote', curItem?.vote);
    form.setFieldValue('status', curItem?.status);
    form.setFieldValue('voteContent', curItem?.voteContent);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem?.voteId
          ? `${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.titleAdd',
              defaultMessage: 'Add Funding Vote',
            })}`
          : `${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.titleEdit',
              defaultMessage: 'Edit Funding Vote',
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
        <ProFormDateRangePicker
          allowClear
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
            id: 'pages.vote.fundingVote.form.date',
            defaultMessage: 'Start Date - End Date',
          })}`}
          // rules={[formItemRule.required()]}
        />
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.vote.fundingVote.form.reward',
            defaultMessage: 'Reward',
          })}`}
          name={'reward'}
          placeholder={`${intl.formatMessage({
            id: 'pages.vote.fundingVote.form.reward',
            defaultMessage: 'Reward',
          })}`}
          // rules={[formItemRule.required()]}
        />
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <ProFormSelect
            label={`${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.goal',
              defaultMessage: 'Goal (point)',
            })}`}
            name={'goalPoint'}
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.placeholderGoal',
              defaultMessage: 'Select Goal',
            })}`}
            options={listSelectPoint.map((op) => ({ label: op.label, value: op.value }))}
            // rules={[formItemRule.required()]}
          />
          <ProFormSelect
            label={`${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.idolVote',
              defaultMessage: 'Idol Vote',
            })}`}
            name={'idolVote'}
            placeholder={`${intl.formatMessage({
              id: 'pages.vote.fundingVote.form.placeholderIdolVote',
              defaultMessage: 'Select Idol Vote',
            })}`}
            options={listSelectIdol.map((op) => ({ label: op.label, value: op.value }))}
            // rules={[formItemRule.required()]}
          />
        </div>
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

type SelectType = {
  label: string;
  value: string;
};

export const listSelectPoint: SelectType[] = [
  { label: '100.000', value: '100.000' },
  { label: '200.000', value: '200.000' },
  { label: '300.000', value: '300.000' },
];

export const listSelectIdol: SelectType[] = [
  { label: 'Lisa', value: 'Lisa' },
  { label: 'Rose', value: 'Rose' },
  { label: 'Jenny', value: 'Jenny' },
];
