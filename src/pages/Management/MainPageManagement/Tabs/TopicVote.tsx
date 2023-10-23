import ButtonForm from '@/pages/components/ButtonForm/ButtonForm';
import { ProForm, ProFormSelect } from '@ant-design/pro-components';

type SelectType = {
  label: string;
  value: string;
};

const TopicVote = () => {
  const [form] = ProForm.useForm();

  // laasy gt onchange kih goi ham
  form.getFieldValue('topic1');
  return (
    <div>
      <ProForm
        submitter={false}
        onFinish={async (values) => {
          console.log('values', values);
        }}
      >
        <ProFormSelect
          name={'topic1'}
          label="Topic 1"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        <ProFormSelect
          label="Topic 2"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        <ProFormSelect
          label="Topic 3"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        <ProFormSelect
          label="Topic 4"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        <ProFormSelect
          label="Topic 5"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        <div style={{ maxWidth: '800px' }}>
          <ButtonForm onCancel={() => form.resetFields()} onSubmit={() => form.submit()} />
        </div>
      </ProForm>
    </div>
  );
};

export default TopicVote;

const listSelect: SelectType[] = [
  { label: 'Fandom', value: 'All' },
  { label: 'Fandom', value: 'Open' },
  { label: 'Fandom', value: 'Closed' },
  { label: 'Fandom', value: 'Processing' },
];
