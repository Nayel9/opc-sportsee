/**
 * Composant du tableau de bord.
 *
 * Ce composant affiche le tableau de bord de l'utilisateur, incluant différents graphiques et cartes de macronutriments.
 *
 * @module Dashboard
 */

import BarChartCard from "./utils/BarChartCard/index.jsx";
import './dashboard.scss';
import MacroNutrimentsCard from "./utils/MacroNutrimentsCard/index.jsx";
import LineChartCard from "./utils/LineChartCard/index.jsx";
import { useState, useEffect } from "react";
import apiService from '../../services/apiService';
import RadarChartCard from "./utils/RadarChartCard/index.jsx";
import SimpleRadialBarChart from "./utils/RadialBarCard/index.jsx";
import PropTypes from 'prop-types';


/**
 * Composant fonctionnel pour le tableau de bord.
 *
 * @function
 * @name Dashboard
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'ID de l'utilisateur.
 * @returns {JSX.Element} Le composant du tableau de bord.
 */
function Dashboard({ userId }) {
    const [keyData, setKeyData] = useState({});

    useEffect(() => {
        apiService.getUserKeyData(userId)
            .then(data => {
                setKeyData(data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    Dashboard.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    return (
        <div className="Dashboard">
            <div className="ChartsWrapper">
                <BarChartCard userId={userId} />
                <div className="ChartCardWrapper">
                    <LineChartCard userId={userId} />
                    <RadarChartCard userId={userId} />
                    <SimpleRadialBarChart userId={userId} />
                </div>
            </div>
            <div className="MacroNutrimentsWrapper">
                <MacroNutrimentsCard type="calories" value={`${keyData.calorieCount}kCal`} />
                <MacroNutrimentsCard type="proteines" value={`${keyData.proteinCount}g`} />
                <MacroNutrimentsCard type="glucides" value={`${keyData.carbohydrateCount}g`} />
                <MacroNutrimentsCard type="lipides" value={`${keyData.lipidCount}g`} />
            </div>
        </div>
    );
}

export default Dashboard;