import { SearchOutlined } from '@ant-design/icons';
import { ProForm } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Input, Select } from 'antd';
import { useState } from 'react';
import DataGroupTable from './DataGroupTable';

type SelectType = {
  label: string;
  value: string;
};

const GroupChartTopIdol = () => {
  const intl = useIntl();
  const [currentSelect, setCurrentSelect] = useState<SelectType>(listSelect[0]);

  const handleProvinceChange = (value: SelectType) => {
    setCurrentSelect(value);
  };
  return (
    <div>
      <ProForm submitter={false}>
        <div
          style={{
            width: '50%',
            display: 'flex',
            gap: '12px',
            marginBottom: '12px',
          }}
        >
          <Input
            style={{
              width: '50%',
            }}
            placeholder={`${intl.formatMessage({
              id: 'pages.chartTopIdol.solo.placeholderSearch',
              defaultMessage: 'Search by name',
            })}`}
            prefix={<SearchOutlined />}
          />
          <Select
            style={{
              width: '50%',
            }}
            options={listSelect.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleProvinceChange}
            defaultValue={currentSelect}
          />
        </div>
        <DataGroupTable />
      </ProForm>
    </div>
  );
};

const listSelect: SelectType[] = [
  { label: 'All', value: 'All' },
  { label: 'Daily Chart', value: 'Daily Chart' },
  { label: 'Weekly Chart', value: 'Weekly Chart' },
  { label: 'Monthly Chart', value: 'Monthly Chart' },
];

export default GroupChartTopIdol;
