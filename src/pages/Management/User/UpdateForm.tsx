import { putUser } from '@/services/management/user';
import { formItemRule } from '@/utils/ruleForm';
import { ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, Input, Modal, message } from 'antd';
import { FC, useEffect } from 'react';

interface UpdateFormProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  curItem?: API.User;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateForm: FC<UpdateFormProps> = ({ showModal, curItem, setShowModal, setReload }) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const handleCloseModal = () => {
    setShowModal(false);
    form?.resetFields();
    setReload((pre) => !pre);
  };

  const handleSave = async (formItem: API.User) => {
    const payload: API.UserPayload = {
      email: formItem.userEmail,
      password: formItem.password,
    };
    await putUser(curItem?.id ?? -1, payload)
      .then(() => {
        message.success('Update Success');
      })
      .then(() => {
        handleCloseModal();
      });
  };

  useEffect(() => {
    form.setFieldValue('id', curItem?.id);
    form.setFieldValue('userName', curItem?.userName);
    form.setFieldValue('lastLoginDate', curItem?.lastLoginDate);
    form.setFieldValue('point', curItem?.honeyPoint);
    form.setFieldValue('idolFollow', curItem?.idolFollows);
    form.setFieldValue('status', curItem?.isActive ? 'Actived' : 'Not Activated');
    form.setFieldValue('userEmail', curItem?.userEmail);
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
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        layout="vertical"
        name="roleForm"
        onFinish={handleSave}
        style={{ padding: '12px 0px' }}
      >
        <ProFormText
          label={`${intl.formatMessage({
            id: 'pages.user.form.userName',
            defaultMessage: 'User Name',
          })}`}
          placeholder=""
          name="userEmail"
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
          name="userEmail"
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
            options={curItem.idolFollows?.map((item) => item.idolName ?? '')}
            // rules={[formItemRule.required()]}
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
