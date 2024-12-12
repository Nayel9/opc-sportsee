/**
 * Service pour les appels API.
 *
 * Ce fichier contient les fonctions pour récupérer les données de l'utilisateur depuis l'API ou les données mockées.
 *
 * @module ApiService
 */

import axios from 'axios';
import config from '../config';
import FormattedData from "../FormattedData/index.jsx";


const apiService = {

    /**
     * Récupère les informations de l'utilisateur par ID.
     *
     * @function
     * @name getUserInfosData
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<Object>} Les informations de l'utilisateur.
     */
    getUserInfosData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.userInfos : `${config.apiBaseUrl}/user/${id}`;
        return axios.get(url).then(response => {
            const user = response.data.data;
            return FormattedData.formatUserData(user);
        });
    },

    /**
     * Récupère les données clés de l'utilisateur par ID.
     *
     * @function
     * @name getUserKeyData
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<Object>} Les données clés de l'utilisateur.
     */
    getUserKeyData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.goals : `${config.apiBaseUrl}/user/${id}`;
        return axios.get(url).then(response => {
            const userKeyData = response.data.data;
            return FormattedData.formatKeyData(userKeyData);
        });
    },

    /**
     * Récupère les données d'activité de l'utilisateur par ID.
     *
     * @function
     * @name getActivityData
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<Array>} Les données d'activité de l'utilisateur.
     */
    getActivityData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.activity : `${config.apiBaseUrl}/user/${id}/activity`;
        return axios.get(url).then(response => {
            const activity = response.data.data;
            return FormattedData.formatActivityData(activity);
        });
    },

    /**
     * Récupère les sessions moyennes de l'utilisateur par ID.
     *
     * @function
     * @name getAverageSessions
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<Array>} Les sessions moyennes de l'utilisateur.
     */
    getAverageSessions: (id) => {
        const url = config.useMockData ? config.mockDataUrls.averageSessions : `${config.apiBaseUrl}/user/${id}/average-sessions`;
        return axios.get(url).then(response => {
            const averageSessions = response.data.data;
            return FormattedData.formatAverageSessions(averageSessions);
        });
    },

    /**
     * Récupère les données de performance de l'utilisateur par ID.
     *
     * @function
     * @name getPerformanceData
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<Array>} Les données de performance de l'utilisateur.
     */
    getPerformanceData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.performance : `${config.apiBaseUrl}/user/${id}/performance`;
        return axios.get(url).then(response => {
            const performanceData = response.data.data;
            return FormattedData.formatPerformanceData(performanceData);
        });
    },

    /**
     * Récupère les données d'objectifs de l'utilisateur par ID.
     *
     * @function
     * @name getGoalsData
     * @param {number} id - L'ID de l'utilisateur.
     * @returns {Promise<number>} Le score des objectifs de l'utilisateur.
     */
    getGoalsData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.goals : `${config.apiBaseUrl}/user/${id}`;
        return axios.get(url).then(response => {
            const userGoal = response.data.data;
            const score = userGoal.todayScore !== undefined ? userGoal.todayScore : userGoal.score;
            return score * 100;
        });
    }
};

export default apiService;