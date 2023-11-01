import { postIdol, putIdol } from '@/services/management/idols';
import { formItemRule } from '@/utils/ruleForm';
import {
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Modal, message } from 'antd';
import { FC, useEffect, useState } from 'react';
import { typeSelect } from '.';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.IdolItem;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  setCurIdol: React.Dispatch<React.SetStateAction<API.IdolItem>>;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({
  showModal,
  setShowModal,
  curItem,
  setReload,
  setCurIdol,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setCurIdol({});
    setReload((pre) => !pre);
  };

  console.log('curIdol', curItem);

  const handleSave = async (formItem: API.IdolItem) => {
    console.log('formItem.idolType', formItem.idolType);

    setLoading(true);
    const payload: API.IdolPayload = {
      idolTypeId: formItem.idolType === 'Solo' ? 1 : 2,
      avatarFileName: formItem.avatarUrl ?? '',
      bannerFileName: formItem.bannerUrl ?? '',
      idolName: formItem.idolName,
      anniversaryDay: formItem.anniversaryDay,
    };
    if (!curItem?.id) {
      postIdol(payload)
        .then(() => {
          message.success('Create success');
        })
        .then(() => {
          handleCloseModal();
        });
    } else {
      putIdol({ ...payload, id: curItem.id })
        .then(() => {
          message.success('Update success');
        })
        .then(() => {
          handleCloseModal();
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    form.setFieldValue('idolType', curItem?.idolType);
    form.setFieldValue('idolName', curItem?.idolName);
    form.setFieldValue('anniversaryDay', curItem?.anniversaryDay);
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
      confirmLoading={loading}
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
        <ProFormSelect
          allowClear
          label={`${intl.formatMessage({
            id: 'pages.idols.form.type',
            defaultMessage: 'Type',
          })}`}
          name={'idolType'}
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
          name={'avatarFileName'}
          // rules={[formItemRule.required()]}
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
          name={'bannerFileName'}
          // rules={[formItemRule.required()]}
        />
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.idols.form.idolName',
            defaultMessage: 'Idol Name',
          })}`}
          placeholder={''}
          name={'idolName'}
          // rules={[formItemRule.required()]}
        />
        <ProFormDatePicker
          name={'anniversaryDay'}
          placeholder={`${intl.formatMessage({
            id: 'pages.idols.form.placeholderBirth',
            defaultMessage: 'Select date',
          })}`}
          label={`${intl.formatMessage({
            id: 'pages.idols.form.birthday',
            defaultMessage: 'Birthday/Estalisday',
          })}`}
          // rules={[formItemRule.required()]}
        />
        {curItem && (
          <ProFormSelect
            label="Members"
            name={'members'}
            placeholder={'Select member'}
            options={typeSelect}
            // rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
      </Form>
    </Modal>
  );
};

export default CreateUpdateForm;
