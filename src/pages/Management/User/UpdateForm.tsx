import { formItemRule } from '@/utils/ruleForm';
import { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Input, Modal } from 'antd';
import { FC, useEffect } from 'react';

interface UpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.UserItem;
}

const UpdateForm: FC<UpdateFormProps> = ({ showModal, curItem, setShowModal }) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
  };
  const handleSubmit = (formItem: API.UserItem) => {};

  useEffect(() => {
    form.setFieldValue('id', curItem?.id);
    form.setFieldValue('userName', curItem?.userName);
    form.setFieldValue('lastLoginDate', curItem?.lastLoginDate);
    form.setFieldValue('point', curItem?.point);
    form.setFieldValue('idolFollow', curItem?.idolFollow);
    form.setFieldValue('status', curItem?.status === 1 ? 'Actived' : 'Not Activated');
    form.setFieldValue('email', curItem?.email);
    form.setFieldValue('password', curItem?.password);
  }, [curItem]);

  return (
    <Modal
      title={`${intl.formatMessage({
        id: 'pages.user.form.title',
        defaultMessage: 'Edit Users',
      })}`}
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
        style={{ padding: '12px 0px' }}
      >
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.user.form.userName',
            defaultMessage: 'User Name',
          })}`}
          placeholder=""
          name="userName"
        />
        <div style={{ display: 'flex', gap: '15px' }}>
          <ProFormDatePicker
            label={`${intl.formatMessage({
              id: 'pages.user.form.startDate',
              defaultMessage: 'Start Date',
            })}`}
            name="lastLoginDate"
            disabled
          />
          <ProFormDatePicker
            label={`${intl.formatMessage({
              id: 'pages.user.form.lastDate',
              defaultMessage: 'Last Login Date',
            })}`}
            name="lastLoginDate"
            disabled
          />
        </div>
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.user.form.email',
            defaultMessage: 'Email',
          })}`}
          placeholder=""
          name="email"
          disabled
        />
        <ProFormText.Password
          label={`${intl.formatMessage({
            id: 'pages.user.form.password',
            defaultMessage: 'Password',
          })}`}
          placeholder=""
          name="password"
        />
        {curItem && (
          <ProFormSelect
            label={`${intl.formatMessage({
              id: 'pages.user.form.idolFollow',
              defaultMessage: 'Idol Follow',
            })}`}
            name={'idolFollow'}
            placeholder={`${intl.formatMessage({
              id: 'pages.idols.form.placeholderType',
              defaultMessage: 'Select type',
            })}`}
            options={curItem?.idolFollow?.map((item) => item.idolName)}
            rules={[formItemRule.required()]}
            mode="tags"
          />
        )}
        <div style={{ display: 'flex', gap: '15px' }}>
          <Form.Item
            label={`${intl.formatMessage({
              id: 'pages.user.form.point',
              defaultMessage: 'Point',
            })}`}
            name="point"
          >
            <Input
              suffix={`${intl.formatMessage({
                id: 'pages.user.form.point',
                defaultMessage: 'Point',
              })}`}
              disabled
              style={{ height: '34px' }}
            />
          </Form.Item>
          <ProFormText
            label={`${intl.formatMessage({
              id: 'pages.user.form.status',
              defaultMessage: 'Status',
            })}`}
            placeholder=""
            name="status"
            rules={[formItemRule.required()]}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
