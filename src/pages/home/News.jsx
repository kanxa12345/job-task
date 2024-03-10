import React from "react";

const News = () => {
  return (
    <section className="news-section">
      <div className="container news-container">
        <h2>Latest News</h2>
        <div>
          {[1, 2, 3].map((item, id) => (
            <div key={id} className="news-div">
              <img src="/images/img1.webp" alt="image" />
              <div className="news-content">
                <h3>The Catalyzer</h3>
                <div>
                  <a href="#">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
                  <p>10-03-2024</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
