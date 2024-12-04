import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import {useState, useEffect} from 'react';
import apiService from '../../../../services/apiService';
import PropTypes from 'prop-types';
import {RxDotFilled} from "react-icons/rx";
import './barchart.scss';

function BarChartCard({userId}) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        apiService.getActivityData(userId)
            .then(data => {
                const sessions = data.slice(-30).map((session, index) => ({
                    name: (index + 1).toString(),
                    Poids: session.kilogram,
                    Calories: session.calories,
                }));
                setSessions(sessions);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    BarChartCard.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    const minWeight = Math.floor(Math.min(...sessions.map(session => session.Poids)) - 5);
    const maxWeight = Math.ceil(Math.max(...sessions.map(session => session.Poids)) + 6);
    const medianWeight = Math.round((minWeight + maxWeight) / 2);
    const ticks = [minWeight, medianWeight, maxWeight];

    return (
        <div className="BarChartWrapper">
            <div className="BarChartHeader">
                <h3 className="BarChartTitle">Activité quotidienne</h3>
                <div className="BarChartLegend">
                    <div className="BarChartLegendItem">
                        <RxDotFilled size={24} color="#000000"/>
                        <p>Poids (Kg)</p>
                    </div>
                    <div className="BarChartLegendItem">
                        <RxDotFilled size={24} color="#E60000"/>
                        <p>Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>
            <div className="BarChartContent">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={sessions}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                        barGap={10}
                    >
                        <CartesianGrid strokeDasharray="2 2" vertical={false}/>
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={false}
                            tick={{fontSize: 12, fill: '#9B9EAC'}}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            domain={[minWeight, maxWeight]}
                            tick={{fontSize: 12, fill: '#9B9EAC'}}
                            ticks={ticks}
                        />
                        <YAxis yAxisId="right" hide={true}/>
                        <Tooltip
                            formatter={(value, name) => [`${value} ${name === 'Poids' ? 'kg' : 'kCal'}`]}
                            labelFormatter={() => ''}
                            contentStyle={{
                                backgroundColor: '#E60000',
                                border: 'none',
                                fontSize: '12px',
                                width: '39px',
                                height: '63px',
                                textAlign: 'center',
                            }}
                            itemStyle={{
                                color: '#FFFFFF',
                                marginBottom: '20px',
                            }}
                            cursor={{fill: 'rgba(196, 196, 196, 0.5)'}}
                        />
                        <Bar
                            yAxisId="left"
                            dataKey="Poids"
                            fill="#282D30"
                            barSize={7}
                            radius={[5, 5, 0, 0]}
                        />
                        <Bar
                            yAxisId="right"
                            dataKey="Calories"
                            fill="#E60000"
                            barSize={7}
                            radius={[5, 5, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarChartCard;