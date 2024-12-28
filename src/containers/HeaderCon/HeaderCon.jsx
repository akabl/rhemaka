import './HeaderCon.css';
import HeaderNav from '../../components/Header/HeaderNav';
import HeaderHero from '../../components/Header/HeaderHero';

const HeaderCon = ({presentPage, onPageChange}) =>{

 return(
    <header className='main-header'>
        <div className='container'>
        <HeaderHero/>
        <HeaderNav onPageChange={onPageChange} presentPage={presentPage}/>
        </div>
     </header>
    );

 }
 export default HeaderCon