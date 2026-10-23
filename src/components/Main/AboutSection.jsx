import ProductCard from "./ProductCard";

function AboutSection({ onSelectReward, inventory }) {
    return(
        <section className="relative bg-white rounded-sm w-70 p-8 m-auto mb-10 shadow flex flex-col justify-center gap-4 sm:w-150">
            <h2 className="font-bold sm:text-xl">About this project</h2>
            <p  className="text-[11px]/5 text-Gray-500 sm:text-sm/6">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potencial to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p className="text-[11px]/5 text-Gray-500 sm:text-sm/6">Featuring artisan craftmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <ProductCard
            productId="bamboo"  onSelectReward={onSelectReward} product={"Bamboo Stand"} pledge={"$25"} description={"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaing, and you'll be added to a special Backer member list."} amountLeft={inventory.bamboo} />
            <ProductCard productId="black"
  onSelectReward={onSelectReward} product={"Black edition Stand"} pledge={"$75"} description={"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={inventory.black}/>
            <ProductCard productId="mahogany"
  onSelectReward={onSelectReward} product={"Mahogany Special Edition"} pledge={"$200"} description={"You get two Special Edition Mahogamy stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."} amountLeft={inventory.mahogany}/>
        </section>
    )
}

export default AboutSection;