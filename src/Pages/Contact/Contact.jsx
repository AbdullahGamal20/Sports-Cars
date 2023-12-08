import React from "react";
import "./contact.css";
import Img from "../../images/mclaren-1.jpg";
import PageTitle from "../../Components/PageTitle/PageTitle";

function Contact() {
  return (
    <div className="page contact">
      <img src={Img} alt="Image" className="img-fluid page-img" />
      <div className="container">
        <PageTitle title="Contact Us" subTitle="Get In Touch" />
        <div className="row map">
          <div>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Egypt%20,%20Mall%20of%20Arabia+(Sports%20Car%20Store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </div>
        </div>

        <div className="row form">
          <div className="">
            <h3 className="ask my-4 text-center">Ask for Something</h3>
            <form>
              <div class="mb-3">
                <div className="d-flex justify-content-between gap-3 my-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <input
                  type="email"
                  class="form-control my-4"
                  placeholder="Your Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
                <div class="form-floating">
                  <textarea
                    required
                    class="form-control"
                    id="floatingTextarea"
                    placeholder="Send a Message"
                  ></textarea>
                  <label for="floatingTextarea">Write a Message</label>
                </div>
              </div>

              <button type="submit" class="btn ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
