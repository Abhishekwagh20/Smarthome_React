import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";

import useFetch from "./useFetch";

const Home = () => {
    const {data} = useFetch('./ItemDetails?itemId=*&fiters[isNew=ture]');
    
    return <div className="home">
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
    </div>

}

export default Home;