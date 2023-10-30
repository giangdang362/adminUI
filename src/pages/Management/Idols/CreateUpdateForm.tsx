import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Modal } from 'antd';
import { FC, useEffect } from 'react';
import { typeSelect } from '.';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.IdolItem;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  setCurIdol: React.Dispatch<React.SetStateAction<API.IdolItem>>;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({
  showModal,
  setShowModal,
  curItem,
  setRender,
  setCurIdol,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setCurIdol({});
  };
  const handleSubmit = (formItem: API.IdolItem) => {};
  console.log('curIdol', curItem);

  const handleSave = async () => {
    !curItem
      ? (console.log('add'),
        // await postIdol(curItem ?? {})
        setShowModal(false))
      : (console.log('edit'),
        //  await putIdol(curItem.id ?? '')
        setShowModal(false));
    setRender((pre) => !pre);
  };

  useEffect(() => {
    form.setFieldValue('type', curItem?.idolType ? 'Group' : 'Solo');
    form.setFieldValue('idolName', curItem?.idolName);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem?.id
          ? `${intl.formatMessage({
              id: 'pages.idols.form.titleAdd',
              defaultMessage: 'Add Idol',
            })}`
          : `${intl.formatMessage({
              id: 'pages.idols.form.titleEdit',
              defaultMessage: 'Edit Idol',
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
      onOk={() => handleSave()}
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
          allowClear
          label={`${intl.formatMessage({
            id: 'pages.idols.form.type',
            defaultMessage: 'Type',
          })}`}
          name={'type'}
          placeholder={`${intl.formatMessage({
            id: 'pages.button.placeholderType',
            defaultMessage: 'Select type',
          })}`}
          options={typeSelect}
          rules={[formItemRule.required()]}
          mode="single"
        />
        <ProFormUploadButton
          label={`${intl.formatMessage({
            id: 'pages.idols.form.avatar',
            defaultMessage: 'Avatar',
          })}`}
          title={`${intl.formatMessage({
            id: 'pages.button.titleUpload',
            defaultMessage: 'Upload',
          })}`}
          name={'avatar'}
          rules={[formItemRule.required()]}
        />
        <ProFormUploadButton
          label={`${intl.formatMessage({
            id: 'pages.idols.form.banner',
            defaultMessage: 'Banner',
          })}`}
          title={`${intl.formatMessage({
            id: 'pages.button.titleUpload',
            defaultMessage: 'Upload',
          })}`}
          name={'banner'}
          rules={[formItemRule.required()]}
        />
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.idols.form.idolName',
            defaultMessage: 'Idol Name',
          })}`}
          placeholder={''}
          name={'idolName'}
          rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          name={'birthday'}
          placeholder={`${intl.formatMessage({
            id: 'pages.idols.form.placeholderBirth',
            defaultMessage: 'Select date',
          })}`}
          label={`${intl.formatMessage({
            id: 'pages.idols.form.birthday',
            defaultMessage: 'Birthday/Estalisday',
          })}`}
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
