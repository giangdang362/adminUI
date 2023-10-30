import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button, Input, Select, Typography } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataIdolsTable from './DataSoloTable';

const { Title } = Typography;

const IdolsManagement = () => {
  const intl = useIntl();
  const [curIdol, setCurIdol] = useState<API.IdolItem>({});
  const [render, setRender] = useState<boolean>(false);
  const [currentEsalisday, setCurrentEsalisday] = useState<SelectType>();
  const [currentType, setCurrentType] = useState<number>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSetCurIdol = (x: API.IdolItem) => {
    setCurIdol(x);
    setShowModal(true);
  };

  const handleEsalisdayChange = (value: SelectType) => {
    setCurrentEsalisday(value);
  };

  const handleTypeChange = (x: number) => {
    setCurrentType(x);
  };

  return (
    <div>
      <Title level={3}>
        {intl.formatMessage({
          id: 'pages.idols.title',
          defaultMessage: 'Idols Management',
        })}
      </Title>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '12px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            gap: '10px',
          }}
        >
          <Input
            style={{
              width: '20%',
            }}
            placeholder={`${intl.formatMessage({
              id: 'pages.chartTopIdol.solo.placeholderSearch',
              defaultMessage: 'Search by name',
            })}`}
            prefix={<SearchOutlined />}
          />
          <Select
            placeholder={`${intl.formatMessage({
              id: 'pages.idols.placeholderEsal',
              defaultMessage: 'Esalisday',
            })}`}
            style={{
              width: '20%',
            }}
            // options={listSelectEsalisday.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleEsalisdayChange}
          />
          <Select
            allowClear
            placeholder={`${intl.formatMessage({
              id: 'pages.idols.placeholderType',
              defaultMessage: 'Type',
            })}`}
            style={{
              width: '20%',
            }}
            options={typeSelect.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleTypeChange}
          />
        </div>
        <Button
          type="primary"
          style={{
            display: 'flex',
            gap: '2px',
            alignItems: 'center',
          }}
          onClick={() => setShowModal(true)}
        >
          <PlusOutlined />
          <span>
            {intl.formatMessage({
              id: 'pages.button.add',
              defaultMessage: 'Add',
            })}
          </span>
        </Button>
      </div>
      <DataIdolsTable
        handleSetCurIdol={handleSetCurIdol}
        currentType={currentType}
        curIdol={curIdol}
        render={render}
        setRender={setRender}
      />
      <CreateUpdateForm
        showModal={showModal}
        setShowModal={setShowModal}
        curItem={curIdol}
        setRender={setRender}
        setCurIdol={setCurIdol}
      />
    </div>
  );
};

export default IdolsManagement;

export type SelectType = {
  label: string;
  value: number;
};

// export const listSelectEsalisday: SelectType[] = [
//   { label: 'Daily Chart', value: 'Daily Chart' },
//   { label: 'Weekly Chart', value: 'Weekly Chart' },
//   { label: 'Monthly Chart', value: 'Monthly Chart' },
// ];

export const typeSelect: SelectType[] = [
  { label: 'Solo', value: 2 },
  { label: 'Group', value: 1 },
];
