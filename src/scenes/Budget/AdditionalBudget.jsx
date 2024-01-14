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

const AdditionalBudget = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [quater, setQuater] = useState("QUARTER1");
  const [data, setData] = useState("")
   
  const apiData = {
    "ITC Park 4": {
        "QUARTER1": {
            "allocated": 6170149,
            "required": 1059059,
            "utilization": 4234958
        },
        "QUARTER2": {
            "allocated": 4486329,
            "required": 9114787,
            "utilization": 4053698
        }
    },
    "ITC Park 2": {
        "QUARTER1": {
            "allocated": 3613555,
            "required": 6049845,
            "utilization": 7778366
        },
        "QUARTER2": {
            "allocated": 5696316,
            "required": 1205290,
            "utilization": 9113976
        }
    },
    "ITC Park 5": {
        "QUARTER1": {
            "allocated": 6764840,
            "required": 8946466,
            "utilization": 6661175
        },
        "QUARTER2": {
            "allocated": 9245185,
            "required": 3059374,
            "utilization": 1564518
        }
    },
    "ITC Park 3": {
        "QUARTER1": {
            "allocated": 4199984,
            "required": 6247934,
            "utilization": 7696006
        },
        "QUARTER2": {
            "allocated": 565866,
            "required": 2582498,
            "utilization": 6181124
        }
    },
    "ITC Park 1": {
        "QUARTER1": {
            "allocated": 3109696,
            "required": 963369,
            "utilization": 5596402
        },
        "QUARTER2": {
            "allocated": 4980591,
            "required": 8187087,
            "utilization": 3236250
        }
    }
}


  const transformData = (quater) => {
    const transformedData = Object.keys(apiData).map((park, index) => {
      const value = apiData[park][quater].required;
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
    transformData(quater)
  }, [quater])


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="लहान मुले (0-6 वर्षे)
                      साम्भाळकर्त्यांसाठी अतिरिक्त आवश्यक बजेट
                      (Additional Budget)" subtitle="Welcome to your dashboard" />

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
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
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
            title="डेटा वारंवारता(Data Frequency)"
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
                <InputLabel id="quater-select-label">Quater</InputLabel>
                <Select
                  labelId="quater-select-label"
                  id="quater-select"
                  value={quater}
                  label="quater"
                  onChange={(e) => setQuater(e.target.value)}
                >
                  <MenuItem value={"QUARTER1"}>First Quater</MenuItem>;
                  <MenuItem value={"QUARTER2"}>Second Quater</MenuItem>;
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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            {/* Sales Quantity */}
          </Typography>
          <Box height="250px" mt="-20px">
            {/* <BarChart isDashboard={true} /> */}
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            {/* Geography Based Traffic */}
          </Typography>
          <Box height="200px">
            {/* <GeographyChart isDashboard={true} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdditionalBudget;
