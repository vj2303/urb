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

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const allMonths = [
    "JANUARY",
    "FEBURARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const [month, setMonth] = useState("JANUARY");
  const [data, setData] = useState("")
  
  const apiData = {
    "ITC Park 4": {
        "JANUARY": 0.4778756993386708,
        "FEBURARY": 0.09686015252643632,
        "MARCH": 0.3537270091769027,
        "APRIL": 0.7452758534569528,
        "MAY": 0.9877182359866175,
        "JUNE": 0.20341640245582981,
        "JUlY": 0.30734592974181196,
        "AUGUST": 0.6263539678448753,
        "SEPTEMBER": 0.79244064754935,
        "OCTOBER": 0.4297781011557429,
        "NOVEMBER": 0.6496912252822225,
        "DECEMBER": 0.7595452117496968
    },
    "ITC Park 1": {
        "JANUARY": 0.41011425767257226,
        "FEBURARY": 0.3070976928924347,
        "MARCH": 0.6309058106923189,
        "APRIL": 0.348116959446497,
        "MAY": 0.8666136438389631,
        "JUNE": 0.9556139038887435,
        "JUlY": 0.46879462221750523,
        "AUGUST": 0.31884978572194944,
        "SEPTEMBER": 0.863887662310661,
        "OCTOBER": 0.4582418174405647,
        "NOVEMBER": 0.42277440629969276,
        "DECEMBER": 0.026939406787568565
    },
    "ITC Park 3": {
        "JANUARY": 0.23194013439447536,
        "FEBURARY": 0.34615936975787664,
        "MARCH": 0.22588841346152133,
        "APRIL": 0.46219266537132375,
        "MAY": 0.2565460271084088,
        "JUNE": 0.602420768597586,
        "JUlY": 0.9195507992753618,
        "AUGUST": 0.5397518852014709,
        "SEPTEMBER": 0.3974710724034558,
        "OCTOBER": 0.9072530305353161,
        "NOVEMBER": 0.1832588479944499,
        "DECEMBER": 0.18793916269912336
    },
    "ITC Park 5": {
        "JANUARY": 0.46806220912982055,
        "FEBURARY": 0.4301720047002593,
        "MARCH": 0.3960503920364886,
        "APRIL": 0.9968792145649705,
        "MAY": 0.9396443864610746,
        "JUNE": 0.3167009794499789,
        "JUlY": 0.7808930158918377,
        "AUGUST": 0.106901711621334,
        "SEPTEMBER": 0.8562388455164118,
        "OCTOBER": 0.7109331440011031,
        "NOVEMBER": 0.12242167517796987,
        "DECEMBER": 0.27499651015169846
    },
    "ITC Park 2": {
        "JANUARY": 0.8616983203951154,
        "FEBURARY": 0.20321229230863036,
        "MARCH": 0.5839986191665565,
        "APRIL": 0.7927008175383199,
        "MAY": 0.9477464770628994,
        "JUNE": 0.7337527888136501,
        "JUlY": 0.3084931409429632,
        "AUGUST": 0.0334247339645688,
        "SEPTEMBER": 0.5806764153839723,
        "OCTOBER": 0.5972188733479156,
        "NOVEMBER": 0.22029056592250917,
        "DECEMBER": 0.5228976185234044
    }
}


  const transformData = (month) => {
    const transformedData = Object.keys(apiData).map((park, index) => {
      const value = apiData[park][month];
      // const originalPark = data.forEach((item) => {item.id.toLowerCase() === park.toLowerCase(); console.log({item : item.id.toLowerCase(), park : park});});

      return {
        id: park,
        label: park,
        value: value,
        color: `hsl(${100 + (index*50)})`,
      };
    });
    setData(transformedData)
    console.log(transformedData);
    return transformedData;
  };

  useEffect(()=>{
    transformData(month)
  }, [month])


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ध्वनी प्रदूषण(NOISE POLLUTION)" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="विभाग (Department)"
            subtitle="Garden"
            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="मुलांची आणि काळजीवाहूंची संख्या (0-6 वर्षे)(Total Children and Care giver)"
            subtitle="1234"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="डेटा  वारंवारता(Data Frequency)"
            subtitle="Monthly"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="डेटा अद्ययावत केलेली अंतिम तारीख (Last Updated Date)"
            subtitle="1 jan 2024"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                महिन्यानुसार डेटा(Current Month Commulative Progresss)
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                January
              </Typography> */}
              <FormControl fullWidth>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month-select"
                  value={month}
                  label="Month"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {allMonths.map((Month, i) => {
                    return <MenuItem value={Month}>{Month}</MenuItem>;
                  })}
                  {/* <MenuItem value={"FEBURARY"}>FEBURARY</MenuItem> */}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="450px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} /> */}
            <PieChart isDashboard={true} data={data} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Images
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            {/* Campaign */}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            {/* <ProgressCircle size="125" /> */}
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {/* $48,352 revenue generated */}
            </Typography>
            <Typography></Typography>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
