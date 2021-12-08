import IMG1 from "../images/proj1.jpg"
import IMG2 from "../images/proj2.jpg"
import IMG3 from "../images/proj3.jpg"
import IMG4 from "../images/proj4.jpg"

function Projectfn() {
  var arr=[{title:"Project1",image:IMG1},{title:"project2",image:IMG2},{title:"project3",image:IMG3},{title:"project4",image:IMG4}]

  return (
      
        <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
      {arr.map((el)=> <div className="project-card">
          <img src={el.image} alt="project" />
          <h3>{el.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#z">Github Link</a></p>
        </div>)}
        
      </div>
    </section>
    )
}
export default Projectfn;
