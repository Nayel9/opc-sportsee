import axios from 'axios';
import config from '../config';

const apiService = {

    // Récupère les informations de l'utilisateur par ID
    getUserInfosData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.userInfos : `${config.apiBaseUrl}/user/${id}`;
        return axios.get(url).then(response => {
            const user = response.data.data;
            return {
                firstName: user.userInfos.firstName,
                lastName: user.userInfos.lastName,
                age: user.userInfos.age,
                keyData: user.keyData
            };
        });
    },

    // Récupère les données clés de l'utilisateur par ID
    getUserKeyData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.goals : `${config.apiBaseUrl}/user/${id}`;
        return axios.get(url).then(response => {
            const userKeyData = response.data.data;
            return {
                calorieCount: userKeyData.keyData.calorieCount,
                proteinCount: userKeyData.keyData.proteinCount,
                carbohydrateCount: userKeyData.keyData.carbohydrateCount,
                lipidCount: userKeyData.keyData.lipidCount
            };
        });
    },

    // Récupère les données d'activité de l'utilisateur par ID
    getActivityData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.activity : `${config.apiBaseUrl}/user/${id}/activity`;
        return axios.get(url).then(response => {
            const activity = response.data.data;
            return activity.sessions.map(session => ({
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories
            }));
        });
    },

    // Récupère les sessions moyennes de l'utilisateur par ID
    getAverageSessions: (id) => {
        const url = config.useMockData ? config.mockDataUrls.averageSessions : `${config.apiBaseUrl}/user/${id}/average-sessions`;
        return axios.get(url).then(response => {
            const averageSessions = response.data.data;
            return averageSessions.sessions.map(session => ({
                day: session.day,
                sessionLength: session.sessionLength
            }));
        });
    },

    // Récupère les données de performance de l'utilisateur par ID
    getPerformanceData: (id) => {
        const url = config.useMockData ? config.mockDataUrls.performance : `${config.apiBaseUrl}/user/${id}/performance`;
        return axios.get(url).then(response => {
            const performanceData = response.data.data;
            const kindMapping = {
                "1": "Cardio",
                "2": "Energie",
                "3": "Endurance",
                "4": "Force",
                "5": "Vitesse",
                "6": "Intensité"
            };
            const orderedKinds = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'];
            return orderedKinds.map(kind => {
                const item = performanceData.data.find(item => kindMapping[item.kind] === kind);
                return {
                    kind: kind,
                    value: item.value
                };
            });
        });
    },

    // Récupère les données d'objectifs de l'utilisateur par ID
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