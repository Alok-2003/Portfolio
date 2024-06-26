import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
      <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Looks amazing you should be in Google"}
        />
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Great,design looks attractive "}
        />

        <TestimonialCard
          name={"Ramzi"}
          feedback={
            "Wow what a portfolio"
          }
        />

        
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
    <article>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );
  
  export default Testimonial;