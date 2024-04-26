import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MacroInfo from '../components/MacroInfo';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Graph() {
  const [dataA, setDataA] = useState([
    { name: 'Group A', value: 35 },
    { name: 'Group B', value: 25 },
    { name: 'Group C', value: 40 }
  ]);

  const [dataB, setDataB] = useState([
    { name: 'Group D', value: 33 },
    { name: 'Group E', value: 33 },
    { name: 'Group F', value: 33 }
  ]);

  const [dataC, setDataC] = useState([
    { name: 'Group G', value: 30 },
    { name: 'Group H', value: 20 },
    { name: 'Group I', value: 50 }
  ]);

  return (
    <>
      <Navbar />
      <div className='calories'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ width: '33%' }}> {/* Adjusted width for each container */}
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataA}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {dataA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>Macro split for cutting</p>
          </div>
          <div style={{ width: '33%' }}> {/* Adjusted width for each container */}
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataB}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {dataB.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>Macro split for maintaining</p>
          </div>
          <div style={{ width: '33%' }}> {/* Adjusted width for each container */}
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataC}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={800}
                >
                  {dataC.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>Macro split for bulking</p>
          </div>
        </div>
      </div>
      <MacroInfo />
    </>
  );
}

export default Graph;
