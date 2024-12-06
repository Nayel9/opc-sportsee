/**
 * Composant de la carte des macronutriments.
 *
 * Ce composant affiche une carte avec une icône et une valeur pour un type de macronutriment spécifique.
 *
 * @module MacroNutrimentsCard
 */

import { BsFire } from "react-icons/bs";
import { TbMeat } from "react-icons/tb";
import { FaAppleAlt, FaHamburger } from "react-icons/fa";
import "./macrocard.scss";
import PropTypes from "prop-types";

const icons = {
    calories: <BsFire size={24} />,
    proteines: <TbMeat size={24} style={{ fill: "#4AB8FF" }} />,
    glucides: <FaAppleAlt size={24} />,
    lipides: <FaHamburger size={24} />
};

const colors = {
    calories: "#FF0000",
    proteines: "#4AB8FF",
    glucides: "#FDCC0C",
    lipides: "#FD5181"
};

/**
 * Composant fonctionnel pour la carte des macronutriments.
 *
 * @function
 * @name MacroNutrimentsCard
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.type - Le type de macronutriment (calories, proteines, glucides, lipides).
 * @param {string} props.value - La valeur du macronutriment.
 * @returns {JSX.Element} Le composant de la carte des macronutriments.
 */
function MacroNutrimentsCard({ type, value }) {
    return (
        <div className="MacroNutrimentsCard">
            <div className="IconWrapper">
                <div className="MacroIcon" style={{ color: colors[type], backgroundColor: `${colors[type]}1A` }}>
                    {icons[type]}
                </div>
            </div>
            <div className="MacroNutrimentsItemContent">
                <span className="MacroNutrimentsItemTitle">{value}</span>
                <p className="MacroNutrimentsItemValue">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            </div>
        </div>
    );
}

MacroNutrimentsCard.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default MacroNutrimentsCard;