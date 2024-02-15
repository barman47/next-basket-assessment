import Advert from './Advert';
import FeaturedPosts from './FeaturedPosts';
import Hero from './Hero';
import Review from './Review';
import Services from './Services';

const Home: React.FC<{}> = () =>{
    return (
        <>
            <Hero />
            <Services />
            <FeaturedPosts />
            <Review />
            <Advert />
        </>
    );
};
export default Home;