import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="menu">
        <div className="menu__title">
          <h1 className="menu__title--margin">Travelize</h1>
          <h2 className="menu__title--margin">My traveling experiences</h2>
        </div>
        <div className="menu__navigation">
          <button>About</button>
          <button>Blog</button>
          <button>Home</button>
        </div>
      </div>
      <div className="heroBackground">
        <img className="heroBackground__image" src={heroBackground} alt="" />
      </div>
      <div className="bio">
        <img className="bio__image" src={headshot} alt="" />
        <div className="bio__text">
          <h1>A little bit about me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Donec enim diam vulputate ut pharetra sit amet aliquam id. Tincidunt arcu non sodales neque sodales ut etiam sit. Donec ac odio tempor orci dapibus ultrices in. Volutpat ac tincidunt vitae semper quis lectus nulla at. Vitae sapien pellentesque habitant morbi. Mi eget mauris pharetra et ultrices neque. Orci a scelerisque purus semper eget duis at tellus. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Eget nulla facilisi etiam dignissim. Et magnis dis parturient montes.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. At augue eget arcu dictum. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Egestas maecenas pharetra convallis posuere morbi leo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Semper feugiat nibh sed pulvinar. Eu nisl nunc mi ipsum faucibus vitae. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Lacinia at quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor urna nunc. Posuere lorem ipsum dolor sit amet. Ultrices gravida dictum fusce ut placerat. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
