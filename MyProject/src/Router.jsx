  import { createBrowserRouter } from "react-router-dom";
  import Billing from "./Pages/Billing";
  import Home1 from "./Pages/Home1";
  import Secondopinion from "./Pages/Secondopinion";
  import LabTestInterpretation from "./Pages/LabTestInterpretation"; 
  import Blog from "./Pages/Blog"; 
  import SymptomsGuide from "./Pages/SymptomsGuide"; 
  import SignIn from "./Pages/SignIn"; 
  import SignUp from "./Pages/SignUp"; 
  import Quizintro from "./Pages/Quizintro";
  import Primarygoal from "./Pages/Primarygoal";
  import PersonalInsights from './Pages/PersonalInsights';
  import Generalinfo from './Pages/GeneralInfo';
  import MedicalHistory from './Pages/MedicalHistory';
  import LifePatternsAndHabits from './Pages/LifePatternsAndHabits';
  import Dashboard from './Pages/Dashboard';
  import HealthProfile from './Pages/HealthProfile';
  import Appointment from './Pages/Appointment';
  import ConsultTopDoctors from './Pages/ConsultTopDoctors';
  import TestResults from './Pages/TestResults';
  import AddTestResult from './Pages/AddTestResult';
  import HelpSupport from './Pages/HelpSupport';
  import Ticket from './Pages/Ticket';
  import MainHealthInformation from './Pages/MainHealthInformation';
  import Supplements from "./Pages/Supplements";
  import Billing2 from "./Pages/Billing2";
  import KnowledgeBase from "./Pages/KnowledgeBase";
  import Glossary from "./Pages/Glossary";
  import HealthRiskPage from "./Pages/HealthRiskPage";
  const router = createBrowserRouter([
    { path: "/", element: <Home1 /> },
    { path: "/price", element: <Billing /> },
    { path: "/second-opinion", element: <Secondopinion />},
    { path: "/lab-test-interpretation", element: <LabTestInterpretation />},
    { path: "/blog", element: <Blog />},
    { path: "/symptoms-guide", element: <SymptomsGuide />},
    { path: "/sign-in", element: <SignIn />},
    { path: "/sign-up", element: <SignUp />},
    { path: "/sign-up", element: <SignUp />},
    { path: "/quizintro", element: <Quizintro />},
    { path: "/primary-goal", element: <Primarygoal />},
    { path: "/personal-insights", element: <PersonalInsights />},
    { path: "/general-info", element: <Generalinfo />},
    { path: "/medical-history", element: <MedicalHistory />},
    { path: "/life-habits", element: <LifePatternsAndHabits />},
    { path: "/dashboard", element: <Dashboard />},
    { path: "/profile", element: <HealthProfile />},
    { path: "/appointment", element: <Appointment />},
    { path: "/consult-doctors", element: <ConsultTopDoctors />},
    { path: "/test-result", element: <TestResults />},
    { path: "/add-test", element: <AddTestResult />},
    { path: "/health-risks", element: <HealthRiskPage />},
    { path: "/ticket", element: <Ticket />},
    { path: "/main-health-info", element: <MainHealthInformation />},
    { path: "/supplements", element: <Supplements />},
    { path: "/billing", element: <Billing />},
    { path: "/Billing2", element: <Billing2 />},
    { path: "/knowledge-base", element: <KnowledgeBase />},
    { path: "/glossary", element: <Glossary />},
    { path: "/help-support", element: <HelpSupport />},
    { path: "/account-settings", element: <HealthProfile />},


  ]);
  export default router;
