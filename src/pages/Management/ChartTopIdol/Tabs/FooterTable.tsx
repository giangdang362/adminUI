import { FormatDateTime } from '@/utils/datetime';
import { FC } from 'react';

interface FooterTableProps {
  dateValue: string;
}
const FooterTable: FC<FooterTableProps> = ({ dateValue }) => {
  return (
    <div style={{ color: '#616161' }}>
      {`Update later `}
      {FormatDateTime(dateValue)}
    </div>
  );
};

export default FooterTable;
