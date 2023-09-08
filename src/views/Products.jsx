import { useEffect, useState } from "react"
import { ProductListFilters } from "../components/ProductListFilters"
import axios from "axios"
import Pagination from 'rc-pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { debounce } from "lodash";

export const Products = () => {
    // V1 : FILTRAGE FRONT PAS DE PAGINATION
     // création des states
     /*
     const [products, setProducts] = useState([])
     const [filteredProducts, setFilteredProducts] = useState([])
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)
     const [search, setSearch] = useState('')
     const [category, setCategory] = useState('Tout')

     const BASE_URL_API = " http://localhost:3000/products";
     // charger les produits via l'api
     const fetchProducts = async () => {
       // on lance le chargement
       setLoading(true);
       // le resulat de l'api avec axios est stocker dans "data"
       try {
         const { data } = await axios.get(BASE_URL_API, {
            params: {
                slug: "hehehhe",
                title: "djifhodzeis",
                descripton: "fdpjfospdjed"
            }
         });
         setProducts(data);
         setFilteredProducts(data)
       } catch (error) {
         setError(error.message);
       } finally {
         setLoading(false);
       }
     };
     // lancer la requête lorsque le composant est crée
     useEffect(() => {
       fetchProducts();
     }, []);

     // filtrage des produits
     useEffect(() => {
        let newProducts = [...products]
        // filtrage par categorie 
        if(category !== 'Tout') {
            newProducts = newProducts.filter((product) => product.category === category)
        }
        // filtrage par recherche
        if(search) {
            newProducts = newProducts.filter((product) => 
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
            )
        }
        setFilteredProducts(newProducts)
     }, [search, category])

     // une methode reset 
     const reset = () => {
        setCategory("Tout")
        setSearch("")
     }
     */
    // V2 : FILTRAGE BACK + PAGINATION 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('Tout')

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(15)
    const [totalItems, setTotalItem] = useState(0)
    


    const BASE_URL_API = " http://localhost:3000/products";
    // charger les produits via l'api
    const fetchProducts = async () => {
      // on lance le chargement
      setLoading(true);
      // le resulat de l'api avec axios est stocker dans "data"
      try {
        const {data, headers} = await axios.get(BASE_URL_API, {
           params: {
              _page : currentPage, 
              _limit: itemPerPage,
              title_like : search,
              description_like : search,
              category: category !== "Tout" ? category : undefined
           }
        });
        setProducts(data);
        setTotalItem(headers["x-total-count"])
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    /* PolyFill debounce 
    
    function myDebounce(fn, delay) {
        let timerId;
        return function (...args) {
            if(timerId) {
                clearTimeout(timerId)
            }
            timerId = setTimeout(() => {
                fn(...args);
                timerId = null
            }, delay)

        }
    }
    function sayHello(name) {
        console.log("Hello " + name)
    }
    const debouncedSayHello = myDebounce(sayHello, 1000)
    debouncedSayHello("Ibra")
    debouncedSayHello("Adrien")
    debouncedSayHello("Maxime")
    debouncedSayHello("Jean Leon")

    //Output :  "Jean leon"
    */
    // Debouncing : eviter trop d'appel API
    const debouncingFetchProducts =  debounce(fetchProducts, 500)

    useEffect(() => {
        if(search) {
            debouncingFetchProducts();
            // cleanup 
            return () => {
                debouncingFetchProducts.cancel()
            }
        }
    }, [search])


    // Throttling 

    // Memoization (mettre en cache des données )


    // lancer la requête lorsque le composant est crée
    useEffect(() => {
      fetchProducts();
    }, [category, itemPerPage, currentPage]);


    // une methode reset 
    const reset = () => {
       setCategory("Tout")
       setSearch("")
       setCurrentPage(1)
       setItemPerPage(15)
    }
    // changer de page
    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum)
    }
    // V3 : AVEC REDUX 

    // TO BE CONTINUED ....
  return (
    <main className='my-10 container mx-auto'>
    {/* TITRE */}
    <div>
        <h3 className='text-2xl font-bold'>Faites votre choix</h3>
        <p>Profitez des meilleurs choix avant ruptures</p>
    </div>

    {/* FORM */}
    <div className="my-4 flex gap-6">
        <input
            value={search}
            onChange={(e) =>{
                setSearch(e.target.value)
                setCurrentPage(1)
            } }
            className=" py-2 px-6 leading-none bg-gray-900 text-slate-100  focus:outline-none focus:border-green-700  border-b-2 border-green-50"
            type='text'
            placeholder="Que recherchez-vous ?" />
        <select
            value={category}
            onChange={(e) => {
                setCategory(e.target.value)
                setCurrentPage(1)
            }}
            className="py-2 px-6 bg-gray-900 text-slate-100"
            name="cat"
            id="cat">
            <option value="Tout">Tout</option>
            <option value="Souris">Souris</option>
            <option value="Jeux video">Jeux video</option>
            <option value="Ordinateur">Ordinateur</option>
            <option value="VR">VR</option>
            <option value="Casque">Casque</option>
            <option value="Ecran">Ecran</option>
            <option value="Clavier">Clavier</option>
            <option value="Accessoire">Accessoire</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Montre connectée">Montre connectée</option>
        </select>

        <select
        value={itemPerPage}
        onChange={(e) => {
            setItemPerPage(e.target.value)
            setCurrentPage(1)
        }}
        className="py-2 px-6 bg-gray-900 text-slate-100"
        name="itemPerPage" 
        id="itemPerPage">
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>

        {search.length > 1 && <button className="font-bold text-2xl text-green-700" onClick={reset}>X</button>}
 
    </div>
       {/*LISTE DES PRODUIT */}
       <ProductListFilters
          products={products}
          loading={loading}
          error={error}
        />

       {/* PAGINATION */} 
       
       <div className='my-10 flex justify-center '>
                <Pagination
                    current={currentPage}
                    total={totalItems}
                    pageSize={itemPerPage}
                    onChange={handlePageChange}
                    showLessItems
                    showTitle={false}
                    pageSizeOptions={[itemPerPage.toString()]}
                    prevIcon={<FontAwesomeIcon className="text-green-500 text-xl" icon={faChevronLeft} />}
                    nextIcon={<FontAwesomeIcon className="text-green-500 text-xl" icon={faChevronRight} />}
                />
            </div>


</main>
  )
}