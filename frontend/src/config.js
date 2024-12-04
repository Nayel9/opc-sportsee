/**
 * Configuration de l'application.
 *
 * Ce fichier contient les paramètres de configuration pour l'application, y compris l'utilisation des données mockées et les URL de l'API.
 *
 * @module Config
 */

const config = {
    /**
     * Indique si les données mockées doivent être utilisées.
     * @type {boolean}
     */
    useMockData: false, // Changez cette valeur à true pour utiliser les données mockées

    /**
     * URL de base de l'API.
     * @type {string}
     */
    apiBaseUrl: 'http://localhost:3000',

    /**
     * URLs des données mockées.
     * @type {Object}
     * @property {string} userInfos - URL des informations utilisateur mockées.
     * @property {string} activity - URL des données d'activité mockées.
     * @property {string} averageSessions - URL des sessions moyennes mockées.
     * @property {string} performance - URL des données de performance mockées.
     * @property {string} goals - URL des objectifs mockés.
     */
    mockDataUrls: {
        userInfos: '/mock/userData.json',
        activity: '/mock/activityData.json',
        averageSessions: '/mock/averageSessionData.json',
        performance: '/mock/performanceData.json',
        goals: '/mock/userData.json'
    }
};

export default config;