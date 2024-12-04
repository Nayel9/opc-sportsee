/**
 * Composant de la barre latérale.
 *
 * Ce composant affiche la barre latérale avec des icônes représentant différentes activités sportives.
 *
 * @module Sidebar
 */

import { MdSelfImprovement } from "react-icons/md";
import { MdPool } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";
import { LuDumbbell } from "react-icons/lu";
import "./sidebar.scss";

/**
 * Composant fonctionnel pour la barre latérale.
 *
 * @function
 * @name Sidebar
 * @returns {JSX.Element} Le composant de la barre latérale.
 */
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <MdSelfImprovement size={48} />
      </div>
      <div className="SidebarItem">
        <MdPool size={36} />
      </div>
      <div className="SidebarItem">
        <IoMdBicycle size={48} />
      </div>
      <div className="SidebarItem">
        <LuDumbbell size={36} />
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </div>
  );
}

export default Sidebar;