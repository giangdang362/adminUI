import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { FC, useEffect } from 'react';
import { typeSelect } from '.';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.IdolsItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.IdolsItem) => {};

  useEffect(() => {
    form.setFieldValue('type', curItem?.type ? 'Group' : 'Solo');
    form.setFieldValue('idolName', curItem?.idolName);
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
        <ProFormSelect
          label="Type"
          name={'type'}
          placeholder={'Select type'}
          options={typeSelect}
          rules={[formItemRule.required()]}
          mode="single"
        />
        <ProFormUploadButton
          label="Avatar"
          title="Upload"
          name={'avatar'}
          rules={[formItemRule.required()]}
        />
        <ProFormUploadButton
          label="Banner"
          title="Upload"
          name={'banner'}
          rules={[formItemRule.required()]}
        />
        <ProFormText
          label="Idol Name"
          placeholder={''}
          name={'idolName'}
          rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          name={'birthday'}
          placeholder={'Select date'}
          label="Birthday/Estalisday"
          rules={[formItemRule.required()]}
        />
        {curItem && (
          <ProFormSelect
            label="Members"
            name={'members'}
            placeholder={'Select member'}
            options={typeSelect}
            rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
      </Form>
    </Modal>
  );
};

export default CreateUpdateForm;
