import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Typography } from 'antd';
import { useState } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import DataIdolsTable from './DataSoloTable';

const { Title } = Typography;

const IdolsManagement = () => {
  const [curIdol, setCurIdol] = useState<API.IdolItem>();
  const [currentEsalisday, setCurrentEsalisday] = useState<SelectType>();
  const [currentType, setCurrentType] = useState<SelectType>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSetCurIdol = (x: API.IdolItem) => {
    setCurIdol(x);
    setShowModal(true);
  };

  const handleEsalisdayChange = (value: SelectType) => {
    setCurrentEsalisday(value);
  };

  const handleTypeChange = (value: SelectType) => {
    setCurrentType(value);
  };

  return (
    <div>
      <Title level={3}>Idols Management</Title>
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
            placeholder="Search by name"
            prefix={<SearchOutlined />}
          />
          <Select
            placeholder="Esalisday"
            style={{
              width: '20%',
            }}
            options={listSelectEsalisday.map((op) => ({ label: op.label, value: op.value }))}
            onChange={handleEsalisdayChange}
          />
          <Select
            placeholder="Type"
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
          <span>Add</span>
        </Button>
      </div>
      <DataIdolsTable handleSetCurIdol={handleSetCurIdol} />
      <CreateUpdateForm showModal={showModal} setShowModal={setShowModal} curItem={curIdol} />
    </div>
  );
};

export default IdolsManagement;

type SelectType = {
  label: string;
  value: string;
};

export const listSelectEsalisday: SelectType[] = [
  { label: 'Daily Chart', value: 'Daily Chart' },
  { label: 'Weekly Chart', value: 'Weekly Chart' },
  { label: 'Monthly Chart', value: 'Monthly Chart' },
];

export const typeSelect: SelectType[] = [
  { label: 'Solo', value: 'solo' },
  { label: 'Group', value: 'group' },
];
