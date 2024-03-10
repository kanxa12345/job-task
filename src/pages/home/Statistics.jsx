import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import StatisticsData from "../../data/StatisticsData";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <section className="statistics-section">
      <div className="overlay"></div>
      <div className="container statistics-container">
        {StatisticsData.map((item, id) => (
          <div key={id} className="statistics-div">
            <div>
              <i className={`${item.icon}`}></i>
              <div ref={ref}>
                {inView && (
                  <CountUp
                    className="counter"
                    end={item.value}
                    duration={3}
                    formattingFn={(value) => `${value}+`}
                  />
                )}
              </div>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
