import IMG1 from "../images/proj1.jpg"
import IMG2 from "../images/proj2.jpg"
import IMG3 from "../images/proj3.jpg"
import IMG4 from "../images/proj4.jpg"

function Projectfn() {
    return (
        <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        <div class="project-card">
          <img src={IMG1} alt="project" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="/">Github Link</a></p>
        </div>
        <div class="project-card">
          <img src={IMG2} alt="project" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="/">Github Link</a></p>
        </div>
        <div class="project-card">
          <img src={IMG3} alt="project" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="/">Github Link</a></p>
        </div>
        <div class="project-card">
          <img src={IMG4} alt="project" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="/">Github Link</a></p>
        </div>
      </div>
    </section>
    )
}
export default Projectfn;