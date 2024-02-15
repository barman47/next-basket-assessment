import Advert from './Advert';
import Hero from './Hero';
import Review from './Review';
import Services from './Services';

const Home: React.FC<{}> = () =>{
    return (
        <>
            <Hero />
            <Services />
            <Review />
            <Advert />
        </>
    );
};
export default Home;