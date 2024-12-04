const config = {
    useMockData: false, // Changez cette valeur à true pour utiliser les données mockées
    apiBaseUrl: 'http://localhost:3000',
    mockDataUrls: {
        userInfos: '/mock/userData.json',
        activity: '/mock/activityData.json',
        averageSessions: '/mock/averageSessionData.json',
        performance: '/mock/performanceData.json',
        goals: '/mock/userData.json'
    }
};

export default config;