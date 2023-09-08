import React from 'react'
import { Link } from 'react-router-dom'

export const HomeHero = () => {
    return (
        <section className="lg:flex block gap-5 my-44 container mx-auto">
            <div className="lg:w-1/2 w-full flex flex-col justify-between">
                <div className="my-4">
                    <h1 className="text-7xl font-bold mb-5">Des <span className="text-green-700" >produits</span> rares et exclusifs à portée de clic !</h1>
                    <p className="text-lg">Notre sélection de produits gaming rares et difficiles à trouver ailleurs vous propose les dernières innovations et tendances du monde du jeu vidéo. Chaque article a été soigneusement choisi pour vous offrir une expérience de jeu unique et immersive.</p>
                </div>

                <div className="flex gap-10">
                    <button className="py-4 px-10 bg-green-700 text-green-50 shadow-sm shadow-black hover:bg-green-300 hover:text-gray-900">
                        <Link to={"/connexion"}>
                            S'inscrire
                        </Link>
                    </button>
                    <button className="py-4 px-10 bg-green-50 text-green-700 shadow-sm shadow-black hover:bg-green-300 hover:text-gray-900">
                        <Link to={"/produits"}>
                            Voir tout les produits
                        </Link>
                    </button>
                </div>
            </div>
            <div className="lg:w-1/2 w-full hidden lg:flex">
                <img src="https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="" />
            </div>

        </section>
    )
}
