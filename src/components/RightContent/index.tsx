import { BellOutlined } from '@ant-design/icons';
import { SelectLang as UmiSelectLang } from '@umijs/max';

export type SiderTheme = 'light' | 'dark';

export const SelectLang = () => {
  return (
    <UmiSelectLang
      style={{
        padding: 4,
      }}
    />
  );
};

export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        padding: 0,
      }}
    >
      <BellOutlined style={{ fontSize: '26px' }} />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '-5px',
          borderRadius: '9999px',
          backgroundColor: '#EA5455',
          width: '16px',
          height: '16px',
          color: '#FFF',
          fontSize: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        4
      </div>
    </div>
  );
};
