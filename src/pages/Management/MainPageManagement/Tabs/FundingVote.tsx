import { ProForm, ProFormSelect } from '@ant-design/pro-components';

type SelectType = {
  label: string;
  value: string;
};

const FundingVote = () => {
  const [form] = ProForm.useForm();
  return (
    <div>
      <ProForm submitter={false}>
        <ProFormSelect
          label="Funding vote 1"
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
          label="Funding vote 2"
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
          label="Funding vote 3"
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
          label="Funding vote 4"
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
          label="Funding vote 5"
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a status"
          rules={[{ required: true, message: 'Please select your status!' }]}
        />
        {/* <div style={{ maxWidth: '800px' }}>
          <ButtonForm onCancel={() => form.resetFields()} onSubmit={() => form.submit()} />
        </div> */}
      </ProForm>
    </div>
  );
};

export default FundingVote;

const listSelect: SelectType[] = [
  { label: 'Fandom', value: 'All' },
  { label: 'Fandom', value: 'Open' },
  { label: 'Fandom', value: 'Closed' },
  { label: 'Fandom', value: 'Processing' },
];
