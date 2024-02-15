import Advert from './Advert';
import Hero from './Hero';
import Services from './Services';

const Home: React.FC<{}> = () =>{
    return (
        <>
            <Hero />
            <Services />
            <Advert />
        </>
    );
};
export default Home;