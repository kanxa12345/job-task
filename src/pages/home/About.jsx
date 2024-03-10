import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div>
          <h2>About Us</h2>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              veniam animi harum ullam tempora quo est ducimus quae ipsum
              obcaecati deserunt nostrum, earum eum repudiandae iure eligendi
              tenetur facilis omnis illum! Nemo, aspernatur. Autem atque nisi
              ab, sapiente quia hic repudiandae, sequi, officia temporibus
              ratione provident est quidem praesentium eos!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              repellat aliquam assumenda minima illum corrupti cum quod, qui
              doloribus quaerat.
            </p>
          </div>
          <a href="#" className="button">
            Read More
          </a>
        </div>
        <div>
          <img src="/images/about1.jpg" alt="image" />
          <img src="/images/about2.jpg" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default About;
