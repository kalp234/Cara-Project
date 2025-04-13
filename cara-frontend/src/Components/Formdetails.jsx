import React, { useEffect } from "react";
import "../App.css";
import i1 from "../img/people/1.png";
import i2 from "../img/people/2.png";
import i3 from "../img/people/3.png";

const Formdetails = () => {
  useEffect(() => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      formData.append("access_key", "36e897ab-964f-429e-965e-e8934ced8061");

      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      result.style.display = "block";
      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            result.innerHTML = "Your message has been sent successfully!";
            result.style.color = "green";
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.style.color = "red";
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
          result.style.color = "red";
        })

        .finally(() => {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 5000);
        });
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <section id="form-details">
      <form id="form">
        <input
          type="hidden"
          name="access_key"
          value="36e897ab-964f-429e-965e-e8934ced8061"
        />
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you!!</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Description"
          required
        ></textarea>
        <button type="submit" className="normal">
          Submit
        </button>
        <p
          id="result"
          className="text-gray-500"
          style={{ display: "none" }}
        ></p>
      </form>

      <div className="people">
        <div>
          <img src={i1} alt="John Doe" />
          <p>
            <span>John Doe</span> Senior Marketing Manager
            <br />
            Phone: +91-9123456780 <br />
            Email: john.doe@company.com
          </p>
        </div>
        <div>
          <img src={i2} alt="William Smith" />
          <p>
            <span>William Smith</span> Senior Marketing Manager
            <br />
            Phone: +91-9876543210 <br />
            Email: william.smith@brandmail.com
          </p>
        </div>
        <div>
          <img src={i3} alt="Honey" />
          <p>
            <span>Honey slavia</span> Senior Marketing Manager
            <br />
            Phone: +91-9001234567 <br />
            Email: honey@trendmail.in
          </p>
        </div>
      </div>
    </section>
  );
};

export default Formdetails;
