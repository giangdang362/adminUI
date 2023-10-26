import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';

type SelectType = {
  label: string;
  value: string;
};

const TopicVote = () => {
  const [form] = ProForm.useForm();
  const intl = useIntl();
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
          label={`${intl.formatMessage({
            id: 'pages.mainPage.topicVote.topic1',
            defaultMessage: 'Topic 1',
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
            id: 'pages.mainPage.topicVote.topic2',
            defaultMessage: 'Topic 2',
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
            id: 'pages.mainPage.topicVote.topic3',
            defaultMessage: 'Topic 3',
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
            id: 'pages.mainPage.topicVote.topic4',
            defaultMessage: 'Topic 4',
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
            id: 'pages.mainPage.topicVote.topic5',
            defaultMessage: 'Topic 5',
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

export default TopicVote;

const listSelect: SelectType[] = [
  { label: 'Fandom', value: 'All' },
  { label: 'Fandom', value: 'Open' },
  { label: 'Fandom', value: 'Closed' },
  { label: 'Fandom', value: 'Processing' },
];
