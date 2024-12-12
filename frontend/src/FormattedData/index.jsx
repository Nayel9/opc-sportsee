class FormattedData {

   static formatUserData(user) {
        return {
            firstName: user.userInfos.firstName,
            lastName: user.userInfos.lastName,
            age: user.userInfos.age,
            keyData: user.keyData
        };
    }

    static formatKeyData(userKeyData) {
        return {
            calorieCount: userKeyData.keyData.calorieCount,
            proteinCount: userKeyData.keyData.proteinCount,
            carbohydrateCount: userKeyData.keyData.carbohydrateCount,
            lipidCount: userKeyData.keyData.lipidCount
        };
    }

    static formatActivityData(activity) {
        return activity.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

    static formatAverageSessions(averageSessions) {
        return averageSessions.sessions.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        }));
    }

    static formatPerformanceData(performanceData) {
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
    }

}

export default FormattedData;
