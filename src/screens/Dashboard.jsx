import { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { GetMetrics } from '../services/ApiServices';
import GaugeChart from 'react-gauge-chart';
import AnimatedNumber from "animated-number-react";


const MetricsChart = () => {
    const [metrics, setMetrics] = useState({
        leaveRejectedCount: 0,
        leaveApprovedCount: 0,
        jobPosting: 0,
        performance: 0,
        candidateNonHired: 0,
        leaveCount: 0,
        employeeCount: 0,
        candidateCount: 0,
        interview: 0,
        performanceAverage: 0,
        candidateHired: [],
        employeeTurnOver: 0,
        present: 0,
        absent: 0
    });
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    let duration = 2000;
    const formatValue = (value) => Math.round(value);
    // const { user, loading } = useAuth();
    // const navigate = useNavigate()
    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await GetMetrics();
                setMetrics(response);
                setIsLoading(false);
            } catch (error) {
                setError('Failed to fetch metrics');
                setIsLoading(false);
            }
        };
        // if (user?._id && !loading) {
        fetchMetrics();
        // }
    }, []);

    if (isloading) {
        return <div></div>;
    }

    if (error) {
        return <div></div>;
    }

    const barData = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                label: 'Count',
                data: [metrics?.present, metrics?.absent],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: metrics?.candidateHired.map(candidate => candidate._id),
        datasets: [
            {
                data: metrics?.candidateHired.map(candidate => candidate.count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };



    return (
        <div className='mt-5 ms-5'>
            <h1>Metrics</h1>
            <div className='d-flex gap-5 mt-3 mb-3'>

                <div style={{ width: "40%" }} className=' d-flex gap-5  p-3'>

                    <div style={{ width: "50%", height: '22 0px' }} className='mt-5 bg-dark rounded-3 p-3 d-flex flex-column gap-3 align-items-center justify-content-center'>
                        <h5 className='text-center text-white  '>Total Employee</h5>
                        <div className='fs-1 text-white text-center'>
                            <AnimatedNumber
                                value={metrics?.employeeCount}
                                formatValue={formatValue}
                                className=""
                                duration={duration}
                            />
                        </div>
                    </div>
                    <div style={{ width: "50%", height: '22 0px' }} className='mt-5 bg-dark rounded-3 p-3 d-flex flex-column gap-3 align-items-center justify-content-center'>

                        <h5 className='text-center text-white  '>Employee Turnover</h5>
                        <div className='fs-1 text-white text-center'>
                            <AnimatedNumber
                                value={metrics?.employeeTurnOver}
                                formatValue={formatValue}
                                className=""
                                duration={duration}
                            />%
                        </div>
                    </div>

                </div>
                <div style={{ width: "40%" }}>
                    <div style={{ width: '600px', maxWidth: '800px', margin: '0 auto' }}>
                        <h4 className='text-center'>Attendance</h4>
                        <Bar data={barData} options={{ responsive: true }} />
                    </div>
                </div>

            </div>
            <div className='d-flex gap-5 mt-5' style={{ marginTop: '50px' }}>
                <div style={{ width: "40%" }}>
                    <div style={{ margin: '0 auto' }}>
                        <h4 className='text-center'>Performance</h4>
                        <GaugeChart
                            id="gauge-chart1"
                            nrOfLevels={5}
                            colors={['#EA4228', '#F5CD19', '#5BE12C']}
                            textColor="black"
                            formatTextValue={() => `${metrics?.performanceAverage}`}
                            percent={metrics?.performanceAverage / 5} // Assuming performanceAverage is out of 5
                        />
                    </div>
                </div>
                <div style={{ width: "40%" }}>
                    <div style={{ width: '400px', margin: '0 auto' }}>
                        <h4 className='text-center'>Job Application</h4>
                        <Pie data={pieData} options={{ responsive: true }} />
                    </div></div>
            </div>
        </div>
    );
};

export default MetricsChart;
