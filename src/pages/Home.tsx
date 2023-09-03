import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, ScrollDetail} from '@ionic/react';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Vignette from '../components/Vignette/Vignette';
import FixedContainer from '../components/FixedContainer/FixedContainer';
import VerticalContainer from '../components/VerticalContainer/VerticalContainer';
import './Home.css';

import { downloadSharp, logoLinkedin } from 'ionicons/icons';
let currentY = 0

function onScroll(event: CustomEvent<ScrollDetail>){
  currentY = event.detail.currentY
}

const Home: React.FC = () => {
  return (
    <IonPage 
    >
      <div className='sliding-background'></div>
      <div className='sliding-background reverse'></div>
      <Vignette></Vignette>

      <IonContent fullscreen 
        className="root" 
        scrollEvents={true}
        onIonScroll={onScroll}
      >
        
        <div className='flex-container'>
          <div>
            <FixedContainer>
              <h1>
                Jon Carlo Guiriba
              </h1>
              <h2><b className="jobtitle-highlight">Senior Engineer</b> at <b className='job-highlight'>Quest Finance</b></h2>
              <h4>
                I craft solutions to all kinds of scenarios. Building websites, apps, mini-games, and digital services since 2015.
              </h4>
              <ul>
                <li>
                  <ProgressBar label="Typescript / Nodejs" level="Expert" color="gold" value="95%"/>
                </li>
                <li>
                  <ProgressBar label="Angular" level="Proficient" color="gold" value="85%"/>
                </li>
                <li>
                  <ProgressBar label="Python" level="Proficient" color="gold" value="85%"/>
                </li>
                <li>
                  <ProgressBar label="CSS" level="Proficient" color="gold" value="70%"/>
                </li>
                <li>
                  <ProgressBar label="AWS" level="Capable" color="gold" value="60%"/>
                </li>
                <li>
                  <ProgressBar label="PHP" level="Capable" color="gold" value="45%"/>
                </li>
                <li>
                  <ProgressBar label="React" level="Beginner" color="gold" value="30%"/>
                </li>
              </ul>
              <div className='fixed-footer'>
                <div>
                  <VerticalContainer>
                    <div>Links</div>
                    <a href="https://www.linkedin.com/in/jon-guiriba-2a5203147/" target="_blank" rel="noopener noreferrer"><IonIcon icon={logoLinkedin}/></a>
                  </VerticalContainer>
                  <VerticalContainer>
                    <div>Email</div>
                    <p>jonguiriba.dev@gmail.com</p>
                  </VerticalContainer>
                  <VerticalContainer>
                    <div>Download</div>
                    <a href='../../assets/Resume Jon Carlo Guiriba.pdf' style={{ textDecoration:'none'}} download>Full Resume <IonIcon style={{verticalAlign: '-2px'}} icon={downloadSharp} size="small" aria-label="download"/></a>
                  </VerticalContainer>
                  <VerticalContainer>
                    <div>Mobile</div>
                    <p>+639150584963</p>
                  </VerticalContainer>
                </div>
              </div>
            </FixedContainer>
          </div>
          <div>
            <div>
              <h3 className='section-divider'>Work</h3>
            </div>
            <div>
              <ExperienceCard 
                title="Fullstack Developer · Netzwelt"
                tags={["PHP", "Laravel", "Angular", "MySql", "JQuery"]}
                description="Maintenance and full-stack development of a web-based product inventory management for the FortuneGlobe company. 
                  The system is for management and storage of clothing inventory local and online for multiple client companies."
                dateFrom="March 2016"
                dateTo="Oct 2016"
                link="https://www.fortuneglobe.com/en/"
              />
              <ExperienceCard 
                title="Fullstack Developer · Pccw Solutions Inc."
                tags={["Java", "Struts2", "MySql", "JQuery"]}
                description="Worked with a team to deliver support and full-stack development for a Hong Kong based project named Tap&Go. 
                  Tap&Go is a top-up credit card that is used on a scanner for easy purchases like a train ticket or convenient stores."
                dateFrom="Oct 2016"
                dateTo="Feb 2018"
                link="https://www.tapngo.com.hk/chi/index.html"
              />
              <ExperienceCard 
                title="Fullstack Developer · MarketConnect Inc."
                tags={["Nodejs", "Angular", "Ionic", "Android", "Phaser", "Firebase"]}
                description="Responsible for realizing all their digital services. Worked with creative designers for
                  development of multiple 2D Games, Mobile Apps (Android), Websites and PWAs. 
                  Market Connect Inc. is a company that helps other brands with their marketing strategy and advertisments, specializing in healthcare products. "
                dateFrom="Feb 2018"
                dateTo="Nov 2018"
                link="https://connectwithmci.com/"
              />
              <ExperienceCard 
                title="Senior Fullstack Developer · Hiraya Water"
                tags={["Python","Typescript","Nodejs", "Angular", "Ionic", "Android", "AWS", "Firebase", "MySQL"]}
                description="Development and maintenance of the RTap System. Worked closely with a team of talented engineers and data analysts on an iterative deveploment. 
                Deliverables include a TCP server to connect the IOT of water pumps, android app for remote management, PWA that shows pump location and status, data charts and alert/notifications.
                The RTap System is water facility management system that makes sure water pressure is optimized and running properly
                to save unnecessary expenditures concerning its operation. "
                dateFrom="Aug 2018"
                dateTo="Sep 2021"
                link="https://www.hirayawater.com/"
              />
              <ExperienceCard 
                title="Senior Backend Engineer · Quest Finance"
                tags={["Typescript","Nodejs", "React","AWS", "PSQL", "Terraform", ]}
                description="Worked with a team in development and maintenance of the QuestFinance system. A brokerage system that enables easy 
                application and processing of loans from quote, application to funding approval. Responsibilites were to maintain and develop backend features.
                "
                dateFrom="Sep 2021"
                dateTo="Jul 2023"
                link="https://quest.finance/"
              />
            </div>
            <div>
              <h3 className='section-divider'>Projects</h3>
            </div>
            <div>
              <ExperienceCard 
                title="Woomen.ph"
                tags={["Laravel", "Heroku", "Paypal", "MySql"]}
                description="Worked with a team as a full-stack developer to deliver a Laravel Ecommerce Project. 
                Responsible for system data handling, setting up VCS , UI enhancements, feature implementation and planning, 
                server deployment, setup payment gateway, team coordination."
                dateFrom="Feb 2018"
                dateTo="Nov 2018"
                link=""
              />
              <ExperienceCard 
                title="2080"
                tags={["Ionic", "Angular", "Firebase", "Google API", "Android"]}
                description="An app for department communication. Functions as a billboard to keep all users updated with tasks and events. 
                Published in web and android.."
                dateFrom="Feb 2018"
                dateTo="Nov 2018"
                link=""
              />
              <ExperienceCard 
                title="Nintendo Switch Eshop Unofficial"
                tags={["Ionic", "Angular","Firebase", "Android"]}
                description="A personal side project made using Ionic and Firebase. The app shows updated NS Eshop store 
                listing for comfortable viewing. Also include a wishlist feature which was allows to wait for discounts"
                dateFrom="Feb 2018"
                dateTo="Nov 2018"
                link=""
              />
              <ExperienceCard 
                title="Console Nation"
                tags={["Ionic", "Angular", "Firebase", "Google API (Maps)", "Android"]}
                description="Made with Ionic Angular and Firebase. The app lets people trade PS4, XBOX1, and Nintendo Switch games with other people. 
                Simple interface like tinder to view possible matching traders and a map feature for designating desired meetups for easy transaction."
                dateFrom="Aug 2018"
                dateTo="Sep 2021"
                link=""
              />
              <ExperienceCard 
                title="Personal Assistant (private)"
                tags={["Electron", "Angular", "Typescript", "Google API"]}
                description="Made with ElectronReact . My personal app that automates my day to day tasks. 
                Currently integrated with Git, Trello, AWS, Gmail, GChat, Selenium. Common usecase is for notifying specified changes, autoreplies, 
                autoform building, scraping. With some interest video content, it allows for automatically grab video clips, 
                download, edit and upload with one click"
                dateFrom="Aug 2018"
                dateTo="Sep 2021"
                link=""
              />
          
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
