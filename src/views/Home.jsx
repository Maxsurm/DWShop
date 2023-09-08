import { Divider } from "../components/Divider";
import { HomeHero } from "../components/HomeHero";
import { ProductList } from "../components/ProductList";

export const Home = () => {

    return (
        <main>
            {/* HERO */}
            <HomeHero />
            {/* SEPARATEUR */}
            <Divider />
            {/* MEILLEURS VENTES */}
            <section className="container mx-auto">
                <div>
                    <h3 className='text-2xl font-bold'>Les meilleurs ventes</h3>
                    <p>Profitez des meilleurs choix avant ruptures</p>
                </div>

                <ProductList />

            </section>

            {/* SEPARATEUR */}
            <Divider />
        </main>
    )
};

