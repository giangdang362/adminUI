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
  curItem?: API.FundingVoteItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.FundingVoteItem) => {};

  useEffect(() => {
    form.setFieldValue('voteTitle', curItem?.voteTitle);
    form.setFieldValue('startDate', curItem?.startDate);
    form.setFieldValue('endDate', curItem?.endDate);
    form.setFieldValue('reward', curItem?.reward);
    form.setFieldValue('goal', curItem?.goal);
    form.setFieldValue('idolVote', curItem?.idolVote);
    form.setFieldValue('vote', curItem?.vote);
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
        <ProFormDateRangePicker
          allowClear
          name={'rangeDate'}
          placeholder={['Start date', 'End date']}
          label="Start Date - End Date"
          rules={[formItemRule.required()]}
        />
        <ProFormText
          label="reward"
          name={'reward'}
          placeholder={'Reward'}
          rules={[formItemRule.required()]}
        />
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <ProFormSelect
            label={'Goal (point)'}
            name={'goal'}
            placeholder="Select Goal"
            options={listSelectPoint.map((op) => ({ label: op.label, value: op.value }))}
            rules={[formItemRule.required()]}
          />
          <ProFormSelect
            label={'Idol Vote'}
            name={'idolVote'}
            placeholder="Select Idol Vote"
            options={listSelectIdol.map((op) => ({ label: op.label, value: op.value }))}
            rules={[formItemRule.required()]}
          />
        </div>
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
