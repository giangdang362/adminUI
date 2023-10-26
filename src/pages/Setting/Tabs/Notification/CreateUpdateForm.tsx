import { formItemRule } from '@/utils/ruleForm';
import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Checkbox, Form, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface CreateUpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.NotificationItem;
}

const CreateUpdateForm: FC<CreateUpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.NotificationItem) => {};

  useEffect(() => {
    form.setFieldValue('updatedDate', curItem?.updatedDate);
    form.setFieldValue('title', curItem?.title);
    form.setFieldValue('important', curItem?.important);
    form.setFieldValue('description', curItem?.description);
  }, [curItem]);

  return (
    <Modal
      title={
        !curItem
          ? `${intl.formatMessage({
              id: 'pages.settings.notification.form.titleAdd',
              defaultMessage: 'Create Notification',
            })}`
          : `${intl.formatMessage({
              id: 'pages.settings.notification.form.titleEdit',
              defaultMessage: 'Edit Notification',
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
          padding: '12px 0px',
        }}
      >
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.settings.notification.form.title',
            defaultMessage: 'Title',
          })}`}
          name={'title'}
          placeholder={''}
          rules={[formItemRule.required()]}
        />
        <ProFormTextArea
          label={`${intl.formatMessage({
            id: 'pages.settings.notification.form.description',
            defaultMessage: 'Description',
          })}`}
          name="description"
          rules={[formItemRule.required()]}
        />
        <Checkbox checked={curItem?.important === 1}>
          {intl.formatMessage({
            id: 'pages.settings.notification.form.important',
            defaultMessage: 'Important',
          })}
        </Checkbox>
      </Form>
    </Modal>
  );
};
export default CreateUpdateForm;
