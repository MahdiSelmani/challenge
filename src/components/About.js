import React from "react";
import IMG from "../images/John-Doe.jpg"

function Aboutfn() {
    return (
        <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={IMG} alt="jhon-doe" />
    </section>

    )
}
export default Aboutfn;