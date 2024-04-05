import Adventures from "../components/Adventures";
import HeroSection from "../components/HeroSection";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default async function Home() {
  return (
    <div className="min-h-screen bg-white font-lobster text-black">
      <main>
        <div>
          <HeroSection />
          {/* Logo cloud */}
          <div className="">
            <div className="container px-8 mx-auto py-16  sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold ">Who we are</h2>
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                nam quia sequi porro aperiam possimus, molestias pariatur
                corporis illum quidem facilis ipsum unde voluptatem repellat
                veritatis est perspiciatis, ab mollitia obcaecati natus
                eligendi, praesentium in? Qui quos voluptatibus voluptate
                similique consequatur saepe explicabo eveniet. Sit alias quis
                sed veritatis ut illo! Dolore, excepturi quaerat ab dignissimos
                ullam sequi quam ad inventore ut facilis. Provident ratione quia
                quis illum voluptates quisquam numquam perferendis repellendus
                doloribus sapiente velit officia iusto aspernatur distinctio,
                aliquam iure, repudiandae obcaecati dolorem placeat nihil odio
                assumenda. Rerum quis atque quisquam deleniti expedita quos
                accusamus optio praesentium ut! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Pariatur, explicabo natus dolor ex
                nesciunt illum ipsam. Impedit, aperiam at tenetur dolor quos
                eius vero voluptatem, beatae asperiores incidunt consequuntur
                ea? Eos, natus? Molestias consectetur vero at obcaecati
                suscipit, dolorem aliquid aliquam iste natus vel labore ipsum
                atque laborum quaerat doloremque, voluptates totam, repellat nam
                saepe! Ad, consequuntur. Reiciendis cupiditate ratione, odit
                eligendi at excepturi quam, omnis similique ipsum magni amet
                voluptatem velit porro accusantium natus aperiam nam ab
                aspernatur quo hic sint autem. Consequuntur iste sequi non
                laudantium. Necessitatibus perferendis nesciunt sunt officia
                optio saepe animi quae maxime itaque aut?
              </p>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        <Adventures />
      </main>
    </div>
  );
}
