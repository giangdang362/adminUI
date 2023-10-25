import idolAvatar from '@/../public/images/idol-avatar.png';
import { FormatNumber } from '@/constants/common';
import { Modal } from 'antd';
import { FC } from 'react';

interface RankingResultModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RankingResultModal: FC<RankingResultModalProps> = ({ showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      title="Ranking Result"
      open={showModal}
      onCancel={handleCloseModal}
      okText="Save"
      cancelText="Cancel"
      style={{
        width: '500px',
      }}
    >
      <div
        style={{
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {dataRanking.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              padding: '12px',
            }}
          >
            <div
              style={{
                backgroundColor: `
                ${index === 0 ? '#F7D165' : ''}
                ${index === 1 ? '#D1D1D1' : ''}
                ${index === 2 ? '#FFBE84' : ''}
                `,
                border: `2px solid
                ${index == 0 ? '#F4BA5C' : ''}
                ${index == 1 ? '#BEBEBE' : ''}
                ${index == 2 ? '#C87E3F' : ''}
              `,
                borderRadius: '9999px',
                width: '26px',
                height: '26px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 600,
                fontSize: '16px',
                color: '#363636',
              }}
            >
              {index + 1}
            </div>
            <img src={idolAvatar} alt="idolAvatar" width={29} height={29} />
            <div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#363636',
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#737373',
                }}
              >{`${FormatNumber(item.vote)} vote`}</div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default RankingResultModal;

const dataRanking = [
  {
    name: 'Jenny',
    vote: 123500000,
  },
  {
    name: 'Jiso',
    vote: 123500000,
  },
  {
    name: 'Lisa',
    vote: 123500000,
  },
  {
    name: 'Rose',
    vote: 123500000,
  },
  {
    name: 'Hihi',
    vote: 123500000,
  },
];
