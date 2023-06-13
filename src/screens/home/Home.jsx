import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Adds from '../../components/adds/Adds'
import Review from '../../components/review/Review'
import Brand from '../../components/brand/Brand'
import {Top, Content} from './Home.style'

function Home() {
  return (
    <Content>
      {/** Top of view **/}
      <Top>
        <Header/>
        <Search/>
      </Top>
      {/** Bottom of view **/}
      <Adds/>
      <Review/>
      <Brand/>
    </Content>
  );
}

export default Home;
