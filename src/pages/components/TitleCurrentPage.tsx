import { theme } from 'antd';
import { FC } from 'react';

interface TitleCurrentPageProps {
  title: string;
}

const TitleCurrentPage: FC<TitleCurrentPageProps> = ({ title }) => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div
      style={{
        fontSize: '20px',
        color: token.colorTextHeading,
      }}
    >
      {title}
    </div>
  );
};

export default TitleCurrentPage;
