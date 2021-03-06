import { Block } from './layout';
import GlobalCSS from './global.css'
import { ContentPosition } from './layout/types';
import { Header, Main, Tiling, Services, Comparison, Contact, MyWork } from './components';

function App() {
  return (
    <>
      <GlobalCSS />
      <Block children={<Header />} contentPosition={ContentPosition.CENTER} backgroundColor='#22252b' header/>
      <Block children={<Main />} contentPosition={ContentPosition.CENTER} backgroundUrl={require('./img/plumbing.jpg')}/>
      <Block children={<Services />} contentPosition={ContentPosition.CENTER} backgroundColor='#f5f5f5'/>
      <Block children={<Tiling />} contentPosition={ContentPosition.END} backgroundUrl={require('./img/tiling.jpg')} backgroundPosition="-200px 0" left />
      <Block children={<Comparison />} contentPosition={ContentPosition.CENTER}/>
      <Block children={<Contact />} contentPosition={ContentPosition.START} backgroundUrl={require('./img/owner.jpg')} right />
      <Block children={<MyWork />} contentPosition={ContentPosition.CENTER} />
      <Block children={<Header />} contentPosition={ContentPosition.CENTER} backgroundColor='#22252b'/>
    </>
  )
}

export default App;
