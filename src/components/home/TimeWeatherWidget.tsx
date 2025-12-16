import { useState, useEffect } from "react";
import { Clock, Cloud, Sun } from "lucide-react";

const TimeWeatherWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("vi-VN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Simulate weather based on hour
  const hour = time.getHours();
  const isDay = hour >= 6 && hour < 18;
  const WeatherIcon = isDay ? Sun : Cloud;
  const weatherText = isDay ? "Nắng nhẹ" : "Mát mẻ";

  return (
    <div className="container-custom pt-4 pb-2">
      <div className="flex justify-end">
        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl shadow-md border border-gray-200 dark:border-gray-800 px-4 py-2 inline-flex items-center gap-4">
          {/* Time */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100 tabular-nums">
              {formatTime(time)}
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

          {/* Date */}
          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
            {formatDate(time)}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

          {/* Weather */}
          <div className="flex items-center gap-2">
            <WeatherIcon className="w-4 h-4 text-primary" />
            <span className="text-xs text-gray-700 dark:text-gray-300">
              Hà Nội • 28°C • {weatherText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeWeatherWidget;
