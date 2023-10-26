import { ProForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';

const Banner = () => {
  const intl = useIntl();
  const [form] = ProForm.useForm();
  return (
    <div>
      <ProForm submitter={false}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton
            title={`${intl.formatMessage({
              id: 'pages.button.upload',
              defaultMessage: 'Upload',
            })}`}
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.banner1',
              defaultMessage: 'Banner 1',
            })}`}
            name="Upload"
            action="upload.do"
          />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.linkURL',
              defaultMessage: 'Link URL',
            })}`}
            style={{
              width: '50%',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton
            title={`${intl.formatMessage({
              id: 'pages.button.upload',
              defaultMessage: 'Upload',
            })}`}
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.banner2',
              defaultMessage: 'Banner 2',
            })}`}
            name="Upload"
            action="upload.do"
          />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.linkURL',
              defaultMessage: 'Link URL',
            })}`}
            style={{
              width: '50%',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton
            title={`${intl.formatMessage({
              id: 'pages.button.upload',
              defaultMessage: 'Upload',
            })}`}
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.banner3',
              defaultMessage: 'Banner 3',
            })}`}
            name="Upload"
            action="upload.do"
          />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.linkURL',
              defaultMessage: 'Link URL',
            })}`}
            style={{
              width: '50%',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton
            title={`${intl.formatMessage({
              id: 'pages.button.upload',
              defaultMessage: 'Upload',
            })}`}
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.banner4',
              defaultMessage: 'Banner 4',
            })}`}
            name="Upload"
            action="upload.do"
          />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.linkURL',
              defaultMessage: 'Link URL',
            })}`}
            style={{
              width: '50%',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton
            title={`${intl.formatMessage({
              id: 'pages.button.upload',
              defaultMessage: 'Upload',
            })}`}
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.banner5',
              defaultMessage: 'Banner 5',
            })}`}
            name="Upload"
            action="upload.do"
          />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label={`${intl.formatMessage({
              id: 'pages.mainPage.baner.linkURL',
              defaultMessage: 'Link URL',
            })}`}
            style={{
              width: '50%',
            }}
          />
        </div>
        {/* <div style={{ maxWidth: '800px' }}>
          <ButtonForm onCancel={() => form.resetFields()} onSubmit={() => form.submit()} />
        </div> */}
      </ProForm>
    </div>
  );
};

export default Banner;
