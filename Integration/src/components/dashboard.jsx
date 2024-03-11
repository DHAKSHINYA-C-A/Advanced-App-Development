
import "../assets/css/dashboard.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import AHome from "./aHome";
function Dashboard() {

    const data = [
        {
          name: '2018',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2019',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '2020',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '2021',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '2022',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2023',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '2024',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
      <div className='main-title'>
            <h3 style={{color:"black"}}>DASHBOARD</h3>
        </div>
        <div>
          <AHome/>
        </div>

        
        <div className='main-cards1'>
            <div className='card1'>
                <div className='card-inner'>
                    <h3>Available</h3>
                   
                </div>
                <h1>300</h1>
            </div>
            <div className='card1'>
                <div className='card-inner'>
                    <h3>Ongoing</h3>
                    
                </div>
                <h1>12</h1>
            </div>
            <div className='card1'>
                <div className='card-inner'>
                    <h3>History</h3>
                </div>
                <h1>33</h1>
            </div>
            
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Dashboard