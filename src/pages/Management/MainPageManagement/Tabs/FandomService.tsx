import ButtonForm from '@/pages/components/ButtonForm/ButtonForm';
import { ProForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-components';

const FandomService = () => {
  const [form] = ProForm.useForm();
  return (
    <div>
      <ProForm submitter={false}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px' }}>
          <ProFormUploadButton title="Upload" label="Banner 1" name="Upload" action="upload.do" />
          <ProFormText
            placeholder={'https://www.fandomship.com'}
            name="text"
            label="Link URL"
            style={{
              width: '50%',
            }}
          />
        </div>
        <div style={{ maxWidth: '800px' }}>
          <ButtonForm onCancel={() => form.resetFields()} onSubmit={() => form.submit()} />
        </div>
      </ProForm>
    </div>
  );
};

export default FandomService;