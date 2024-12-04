import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";
import {useState, useEffect, useRef} from "react";
import apiService from '../../../../services/apiService';
import './linechart.scss';

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
        })
    ),
};

function LineChartCard({userId}) {
    const [sessionData, setSessionData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const cardRef = useRef(null);

    useEffect(() => {
        apiService.getAverageSessions(userId)
            .then(data => {
                const sessions = data.map((session) => ({
                    day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
                    duration: session.sessionLength,
                }));
                setSessionData(sessions);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des données:", error);
            });
    }, [userId]);

    LineChartCard.propTypes = {
        userId: PropTypes.number.isRequired,
    }

    const calculateOverlayWidth = (index, dataLength, chartWidth) => {
        if (index === null) return 0;
        const segmentWidth = chartWidth / dataLength;
        return chartWidth - segmentWidth * (index + 1);
    };

    return (
        <div className="LineChartCard" ref={cardRef}>
            <ResponsiveContainer width="100%" height="100%">
                <p className="LineChartTitle">
                    Durée moyenne des sessions
                </p>

                <LineChart
                    data={sessionData}
                    margin={{top: 80, right: 20, left: 20, bottom: 40}}
                    onMouseMove={(e) => {
                        if (e.isTooltipActive) {
                            setActiveIndex(e.activeTooltipIndex);
                        }
                    }}
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ff6e6e"/>
                            <stop offset="100%" stopColor="#FFFFFF"/>
                        </linearGradient>
                    </defs>

                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fill: "rgba(255, 255, 255, 0.6)",
                            textAnchor: "middle",
                        }}
                        tickMargin={30}
                    />

                    <YAxis hide={true}/>

                    <Tooltip cursor={false} content={<CustomTooltip/>}/>

                    <Line
                        type="natural"
                        dataKey="duration"
                        stroke="url(#colorGradient)"
                        strokeWidth={2}
                        activeDot={{
                            r: 8,
                            fill: "white",
                            stroke: "rgba(255, 255, 255, 0.3)",
                            strokeWidth: 14,
                        }}
                        dot={false}
                    />
                </LineChart>

                {activeIndex !== null && cardRef.current ? (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: (cardRef.current.clientWidth / sessionData.length) * (activeIndex + 1),
                            width: calculateOverlayWidth(activeIndex, sessionData.length, cardRef.current.clientWidth),
                            height: "263px",
                            backgroundColor: "rgba(0, 0, 0, 0.1)",
                            pointerEvents: "none",
                            borderRadius: "0 10px 10px 0",
                        }}
                    />
                ) : null}
            </ResponsiveContainer>
        </div>
    );
}

export default LineChartCard;