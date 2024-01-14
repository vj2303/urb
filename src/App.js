import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

import NoOfchildsAndCaregivers from './scenes/AccessAndEngagement/NoOfchildsAndCaregivers'
import TimeSpend from './scenes/AccessAndEngagement/TimeSpend'
import SafetyAndWellbeing from './scenes/SafeAndSecure/SafetyAndWellbeing'
import Trips from './scenes/SafeAndSecure/Trips'
import CostOfEquipments from './scenes/EquipmentsAndMaintainance/CostOfEquipments'
import CostOfMaintain from './scenes/EquipmentsAndMaintainance/CostOfMaintain'
import FunctionalEquipments from './scenes/EquipmentsAndMaintainance/FunctionalEquipments'
import TotalEquipments from './scenes/EquipmentsAndMaintainance/TotalEquipments'
import ServiceProvider from './scenes/CapacityAndBehaviour/ServiceProvider'
import Feedback from './scenes/CapacityAndBehaviour/Feedback'
import PMCOfficer from './scenes/CapacityAndBehaviour/PMCOfficer'
import CareGiverAndcareTaker from './scenes/CapacityAndBehaviour/CareGiverAndCareTaker'
import CityPlanning from './scenes/Interventions/CityPlannig'
import Features from './scenes/Interventions/Features'
import NoOfPolicyAndGuidlines from './scenes/Interventions/NoOfPolicyAndGuidline'
import AdditionalBudget from './scenes/Budget/AdditionalBudget'
import Allocated from './scenes/Budget/Allocated'
import Utilization from './scenes/Budget/Utilization'
import NoisePollution from './scenes/EnviromentalIndicator/NoisePollution'
import AirPollution from './scenes/EnviromentalIndicator/AirPollution';
import PageState from "./state/PageState";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <PageState>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            
              <Route path="/AccessAndEngagement/NoOfchildsAndCaregivers" element={<NoOfchildsAndCaregivers />} />
              <Route path="/AccessAndEngagement/TimeSpend" element={<TimeSpend />} />
              <Route path="/SafeAndSecure/SafetyAndWellbeing" element={<SafetyAndWellbeing />} />
              <Route path="/SafeAndSecure/Trips" element={<Trips />} />
              <Route path="/EquipmentsAndMaintainance/CostOfEquipments" element={<CostOfEquipments />} />
              <Route path="/EquipmentsAndMaintainance/CostOfMaintain" element={<CostOfMaintain />} />
              <Route path="/EquipmentsAndMaintainance/FunctionalEquipments" element={<FunctionalEquipments />} />
              <Route path="/EquipmentsAndMaintainance/TotalEquipments" element={<TotalEquipments />} />
              <Route path="/capacityAndBehaviour/ServiceProvider" element={<ServiceProvider />} />
              <Route path="/capacityAndBehaviour/PMCOfficer" element={<PMCOfficer />} />
              <Route path="/capacityAndBehaviour/Feedback" element={<Feedback />} />
              <Route path="/capacityAndBehaviour/CareGiverAndCareTaker" element={<CareGiverAndcareTaker />} />
              <Route path="/Intervensions/CityPlanning" element={<CityPlanning />} />
              <Route path="/Intervensions/Features" element={<Features />} />
              <Route path="/Intervensions/NoOfPolicyAndGuidlines" element={<NoOfPolicyAndGuidlines />} />
              <Route path="/Budget/AdditionalBudget" element={<AdditionalBudget />} />
              <Route path="/Budget/Allocated" element={<Allocated />} />
              <Route path="/Budget/Utilization" element={<Utilization />} />
              <Route path="/EnvironmentalIndicators/AirPollution" element={<AirPollution />} />
              <Route path="/EnvironmentalIndicators/NoisePollution" element={<NoisePollution />} />





              
              

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </PageState>
  );
}

export default App;



