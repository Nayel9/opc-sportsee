import {useState, useEffect} from 'react';
import apiService from '../../../../services/apiService';
import PropTypes from 'prop-types';
import './radialchart.scss';


import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts';

function SimpleRadialBarChart({userId}) {
    const [todayScore, setTodayScore] = useState(0);

    useEffect(() => {
        apiService.getGoalsData(userId)
            .then(score => {
                setTodayScore(score);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    SimpleRadialBarChart.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    return (
        <div className="RadialChartCard">

            {/* Nomenclature "Score" */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#282D30',
                }}
            >
                Score
            </div>

            {/* RadialBarChart */}
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="100%"
                    outerRadius="70%"
                    barSize={10}
                    data={[{name: 'Progression', value: todayScore, fill: '#ff0000'}]}
                    startAngle={90}
                    endAngle={450}
                >
                    {/* Axe invisible pour positionner */}
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    {/* Barre de progression */}
                    <RadialBar
                        minAngle={15}
                        clockWise
                        dataKey="value"
                        cornerRadius={50}
                    />
                </RadialBarChart>
            </ResponsiveContainer>

            {/* Texte centré */}
            <div
                style={{
                    position: 'absolute',
                    textAlign: 'center',
                    color: '#282D30',
                }}
            >
                <div style={{fontSize: '22px', fontWeight: 'bold'}}>{todayScore}%</div>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#74798C',
                    width: '100px',
                    lineHeight: '1.8',
                }}>de votre objectif
                </div>
            </div>
        </div>
    );
}

export default SimpleRadialBarChart;