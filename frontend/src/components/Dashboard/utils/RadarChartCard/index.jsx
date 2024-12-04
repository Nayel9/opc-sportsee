import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import {useState, useEffect} from "react";
import apiService from '../../../../services/apiService';
import PropTypes from 'prop-types';
import './radarchart.scss';


// Fonction pour personnaliser le rendu des labels
const renderCustomLabel = ({x, y, payload}) => {
    let offsetX = 0;
    let offsetY = 0;

    // Ajuste l'espacement selon le label
    switch (payload.value) {
        case 'Intensité':
            offsetY = -10;
            break;
        case 'Endurance':
            offsetY = 10;
            break;
        case 'Cardio':
            offsetX = -20;
            break;
        case 'Vitesse':
            offsetX = 20;
            break;
        case 'Energie':
            offsetX = -20;
            break;
        case 'Force':
            offsetX = 20;
            break;
        default:
            break;
    }

    return (
        <text
            x={x + offsetX}
            y={y + offsetY}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#ffffff"
            fontSize={14}
        >
            {payload.value}
        </text>
    );
};

// Fonction pour calculer la valeur maximale initiale
const getMaxValue = (data) => {
    return data.length > 0 ? Math.max(...data.map(item => item.value)) : 200;
};

function RadarChartCard({userId}) {
    const [perfData, setPerfData] = useState([]);
    const [maxValue, setMaxValue] = useState(() => getMaxValue([])); // Initialisation adaptative

    useEffect(() => {
        apiService.getPerformanceData(userId)
            .then(data => {
                const validData = data.filter(item => item.kind && item.value !== undefined);
                setPerfData(validData);
                setMaxValue(getMaxValue(validData)); // Mise à jour de maxValue
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    RadarChartCard.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    return (
        <div className="RadarChartWrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={perfData} cx="50%" cy="50%" outerRadius="70%">
                    {/* Grille */}
                    <PolarGrid
                        stroke="#ffffff"
                        radialLines={false}
                    />

                    {/* Axes angulaires (labels) */}
                    <PolarAngleAxis
                        dataKey="kind"
                        tickLine={false}
                        tick={renderCustomLabel} // Applique la fonction personnalisée
                    />

                    {/* Axe radial */}
                    <PolarRadiusAxis
                        domain={[0, maxValue]}
                        stroke="#ffffff"
                        tick={false}
                        axisLine={false}
                    />

                    {/* Courbes */}
                    <Radar
                        name="Performance"
                        dataKey="value"
                        fill="#ff0000"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadarChartCard;