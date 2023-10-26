import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';

type SelectType = {
  label: string;
  value: string;
};

const FundingVote = () => {
  const [form] = ProForm.useForm();
  const intl = useIntl();
  return (
    <div>
      <ProForm submitter={false}>
        <ProFormSelect
          label={`${intl.formatMessage({
            id: 'pages.mainPage.fundingVote.fundingVote1',
            defaultMessage: 'Funding Vote 1',
          })}`}
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.placholder',
            defaultMessage: 'Please select a status',
          })}`}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({
                id: 'pages.mainPage.topicVote.message',
                defaultMessage: 'Please select your status!',
              })}`,
            },
          ]}
        />
        <ProFormSelect
          label={`${intl.formatMessage({
            id: 'pages.mainPage.fundingVote.fundingVote2',
            defaultMessage: 'Funding Vote 2',
          })}`}
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.placholder',
            defaultMessage: 'Please select a status',
          })}`}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({
                id: 'pages.mainPage.topicVote.message',
                defaultMessage: 'Please select your status!',
              })}`,
            },
          ]}
        />
        <ProFormSelect
          label={`${intl.formatMessage({
            id: 'pages.mainPage.fundingVote.fundingVote3',
            defaultMessage: 'Funding Vote 3',
          })}`}
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.placholder',
            defaultMessage: 'Please select a status',
          })}`}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({
                id: 'pages.mainPage.topicVote.message',
                defaultMessage: 'Please select your status!',
              })}`,
            },
          ]}
        />
        <ProFormSelect
          label={`${intl.formatMessage({
            id: 'pages.mainPage.fundingVote.fundingVote4',
            defaultMessage: 'Funding Vote 4',
          })}`}
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.placholder',
            defaultMessage: 'Please select a status',
          })}`}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({
                id: 'pages.mainPage.topicVote.message',
                defaultMessage: 'Please select your status!',
              })}`,
            },
          ]}
        />
        <ProFormSelect
          label={`${intl.formatMessage({
            id: 'pages.mainPage.fundingVote.fundingVote5',
            defaultMessage: 'Funding Vote 5',
          })}`}
          options={listSelect}
          fieldProps={{
            optionItemRender(item: SelectType) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.placholder',
            defaultMessage: 'Please select a status',
          })}`}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({
                id: 'pages.mainPage.topicVote.message',
                defaultMessage: 'Please select your status!',
              })}`,
            },
          ]}
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
