import { Input } from 'antd';

const Point = () => {
  return (
    <div>
      {listPoint.map((item) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px dashed #e0e0e0',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '24px',
                marginBottom: '0px',
              }}
            >
              {item.name}
            </p>
            <p style={{ color: '#ababab', lineHeight: '22px' }}>{item.desc}</p>
          </div>
          <div
            style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}
          >
            <Input value={30} style={{ width: '100px', height: '32px' }} />
            <div>Points</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Point;

const listPoint = [
  {
    id: 1,
    name: 'Referrer',
    desc: 'Points received when entering referrer ID',
  },
  {
    id: 2,
    name: 'Receive event Honey points',
    desc: 'Points received when voting in chart',
  },
  {
    id: 3,
    name: 'Give Friend points',
    desc: 'Share points with friend each time',
  },
  {
    id: 4,
    name: 'Attendance',
    desc: 'Number of points received daily attendance',
  },
];
