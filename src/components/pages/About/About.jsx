import bg from "../../../assets/bg2.png";
import logo from "../../../assets/logo2.png";
import OurTeam from "./OurTeam";
const About = () => {
  return (
    <>
      <div className="container">
        <main style={{ background: `url(${bg})` }} className="Login py-20">
        <div className="logo">
              <img src={logo} className='md:hidden md:w-auto w-36 mx-auto'  alt="logo" />
            </div>
          <div className=" hidden md:flex items-center justify-around">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex max-w-lg text-white flex-col">
              <h1 className="text-3xl my-2 font-semibold text-white">
                Get to know about us
              </h1>
              <p className="text-white  leading-7 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit
                facilisis egestas lorem nibh facilisis orci adipiscing. Nunc
                aliquam neque fermentum pretium. Tristique nibh consectetur
                elementum cursus odio lacus. Nibh enim nullam egestas fames
                augue arcu enim. Orci consequat, cras elementum sapien gravida
                pellentesque pharetra risus. Nunc, velit nibh laoreet nisi
                fermentum id in in. Ipsum eget odio id in aliquam. Non duis
                dictumst auctor nullam porttitor in sed. Consectetur in
                malesuada nulla commodo. Egestas viverra mattis non eget.
                Pretium sit nullam risus pulvinar. At maecenas massa.
              </p>
            </div>
          </div>
        </main>
        <div className="flex flex-col px-2 md:px-64  mx-auto items-center justify-center">
          <h1 className="text-3xl font-semibold my-5">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            tenetur blanditiis, quos non id harum dignissimos tempora fuga
            quaerat recusandae perspiciatis iste laboriosam corporis maxime
            assumenda eos quis adipisci! Maxime facere voluptatum, in
            dignissimos voluptas, doloremque mollitia, assumenda ipsum placeat
            nesciunt distinctio. Saepe, fugit. Voluptate, culpa alias, vel,
            voluptates est magni veniam necessitatibus quasi optio eum
            dignissimos! Minus et placeat unde cum labore numquam saepe, veniam
            in perferendis rerum autem totam harum dolores incidunt delectus
            architecto voluptatibus assumenda itaque dicta. Blanditiis magnam
            suscipit inventore expedita eius ea quis, maxime tempore assumenda
            repellat nemo id est quae autem doloribus odio beatae architecto
            alias pariatur. Sint aliquid ab nesciunt soluta velit quidem
            assumenda! Obcaecati consequuntur facilis fugit ad velit autem
            incidunt ipsa ex consequatur perspiciatis nulla exercitationem quia
            dignissimos minima, est, necessitatibus voluptatibus quod quaerat
            nesciunt cupiditate inventore provident iusto quidem! Nostrum
            blanditiis repellat animi molestias quasi itaque, dignissimos,
            tempore labore velit reiciendis repellendus voluptates, similique
            tempora nisi. Nisi dolore reiciendis quos? Aspernatur ullam magnam
            impedit temporibus facere. Ratione sit cum, doloribus inventore non
            eaque illum sed animi unde, tempora illo, cumque vel sint quisquam
            deleniti optio placeat quos doloremque! Nobis exercitationem iste
            provident consequuntur, dolorem placeat accusantium quia mollitia
            illo. Harum impedit laboriosam cumque iste similique quae voluptates
            voluptate officia aspernatur, error distinctio incidunt asperiores
            culpa neque et nihil consequuntur iure? Obcaecati eius eos magnam,
            perspiciatis nostrum sit fugit laboriosam eum totam tenetur
            repellendus, enim cupiditate omnis dolor porro rem? Officia
            exercitationem maiores dolores quam. Id praesentium quam eveniet!
            Eos officiis numquam consequatur beatae et asperiores ad eius at
            quia excepturi provident cupiditate quaerat fugit animi, id
            aspernatur, in sapiente consectetur. Molestias reiciendis quasi
            soluta cumque incidunt. Libero iste repellendus non corporis quis
            deleniti ex, atque ullam vitae accusantium itaque et! Saepe tempora
            dolorum dolorem, placeat inventore rem ducimus earum dicta.
          </p>
        </div>
        <OurTeam />
      </div>
    </>
  );
};
export default About;
