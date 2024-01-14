import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import PieChart from "../../components/PieChart";
import { useState } from "react";
import { useEffect } from "react";
import AirPollution from "../EnviromentalIndicator/AirPollution";
import NoisePollution from "../EnviromentalIndicator/NoisePollution"
import { useContext } from "react";
import { PageContext } from "../../state/PageState";
import  Allocated  from "../Budget/Allocated"
import  Utilization  from "../Budget/Utilization"
import  AdditionalBudget from "../Budget/AdditionalBudget"
import NoOfPolicyAndGuidlines from "../Interventions/NoOfPolicyAndGuidline"
import Features from "../Interventions/Features"
import CityPlanning from "../Interventions/CityPlannig"

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const allMonths = ["JANUARY", "FEBURARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
  const [month, setMonth] = useState("JANUARY");

  const { page } = useContext(PageContext)

  return (
    <div>
      {
        page === "AirPollution" ? 
        <AirPollution /> : page === "NoisePollution" ?
      <NoisePollution /> : page === "Allocated" ?
      <Allocated /> : page === "Utilization" ?
      <Utilization /> : page === "AdditionalBudget" ? 
      <AdditionalBudget /> : page ==="NoOfPolicyAndGuidline" ?
      <NoOfPolicyAndGuidlines/>: page === "Features" ?
      <Features /> : page === "CityPlannig" ?
      <CityPlanning /> : ""    
      }

    </div>
  );
};

export default Dashboard;
