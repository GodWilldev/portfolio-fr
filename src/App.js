import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './pages/Page';
import SkillsSwiper from './components/SkillsSwiper';
import {StaticProjects} from './datas/projects.js';
import {StaticSkills} from './datas/skills.js';
import {StaticCertifs} from './datas/certifs.js';


function App() {
  return (
    <>
      <Page projects={StaticProjects} skills={StaticSkills} certifs={StaticCertifs}/>
      {/* <SkillsSwiper type="All" skills={StaticSkills} /> */}
      <Footer /> 
    </>
  );
}
export default App;
/* 
    const [projects, setProjects] = useState(StaticProjects);
  const [skills, setSkills] = useState(StaticSkills);
  const [certifs, setCertifs] = useState(StaticCertifs);
  const [isLoaded1, setIsLoaded1] = useState(true);
  const [isLoaded2, setIsLoaded2] = useState(true);
  const [isLoaded3, setIsLoaded3] = useState(true);

  useEffect(() => { // to activate bootstrap tooltips
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });

    fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => {
            setProjects(data);
            setIsLoaded1(true);
        })
    fetch("/api/skills")
        .then((res) => res.json())
        .then((data) => {
            setSkills(data);
            setIsLoaded2(true);
        })
    fetch("/api/certifs")
        .then((res) => res.json())
        .then((data) => {
            setCertifs(data);
            setIsLoaded3(true);
        })
  }, []);

  if(!(isLoaded1 && isLoaded2 && isLoaded3)){
    return(
      <>
        <Header />
        <div className="d-flex">
          <SideBarLoading />
          <div className="w-100 mb-3 mt-2">
            <AboutMe view="no"/>
            <div>
              <Loader />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
    */