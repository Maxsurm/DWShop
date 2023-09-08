import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'

export const Contact = () => {
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)


    const sendContactInfo = async (data) => {
        console.log(data);
        // lancer un chargement 
        setLoading(true)
        // envoi de l'email 
        try {
            await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data, import.meta.env.VITE_USER_ID)
            // reset les champs 
            resetField("name")
            resetField("email")
            resetField("phone")
            resetField("content")
            // envoyer un toast
            console.log("successfuly email send")
        } catch (error) {
            console.log(error)

        } finally {
            // arreter le chargement 
            setLoading(false)
        }

    }
    return (
        <main>
            <section className="lg:flex justify-center block gap-5 my-24 container mx-auto">
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-4xl lg:text-7xl font-bold mb-5">Contactez-
                        <span className="text-green-500">Nous</span></h1>

                    <form className="bg-white p-10 rounded-lg shadow-lg  shadow-black" onSubmit={handleSubmit(sendContactInfo)}>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Nom <sup>*</sup>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full border border-gray-400 p-2"
                                type="text"
                                id="name"
                                name="name"

                            />
                            {errors.name?.type === 'required' && <p role="alert text-red-700">First name is required</p>}
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Adresse email <sup>*</sup>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className="w-full border border-gray-400 p-2"
                                type="email"
                                id="email"
                                name="email"

                            />
                            {errors.email?.type === 'required' && <p role="alert text-red-700">Email is required</p>}

                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Nuémero de téléphone
                            </label>
                            <input
                                {...register("phone")}
                                className="w-full border border-gray-400 p-2"
                                type="text"
                                id="phone"
                                name="phone"

                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Message <sup>*</sup>
                            </label>
                            <textarea
                                {...register("content", { required: "Message is required", maxLength: { value: 500, message: "Le champ ne peut pas dépasser 500" } })}
                                className=" h-60 appearance-none block w-full  border border-gray-400 p-2"
                                id="grid-message" type="text" placeholder="Message"
                            >
                            </textarea>
                            {errors.content && <p role="alert text-red-700">{errors.content.message}</p>}
                        </div>


                        <div className="flex items-center justify-between">
                            <button className="bg-green-500 text-green-50 py-2 px-4 rounded-lg shadow-sm hover:bg-green-300">
                                {loading ? "Envoi en cours" : "Envoyer"}
                            </button>
                        </div>
                    </form>
                </div>

            </section>
        </main>

    );
};