import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import RecommentedCrs from './components/RecommentedCrs';
import SaleImg from './components/SaleImg';
import Topics from './components/Topics';
import './index.css';
export function App() {

  return (
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <SaleImg></SaleImg>
      <RecommentedCrs></RecommentedCrs>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </>
  )
}
