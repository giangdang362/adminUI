import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';

const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    console.log('infoOnchange Banner', info);

    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadFile = () => {
  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
};

export default UploadFile;
