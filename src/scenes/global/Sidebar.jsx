import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useContext } from "react";
import { PageContext } from "../../state/PageState";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.blueAccent[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { setPage } = useContext(PageContext)

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                URBAN95
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                 Vanleer Foundation
                </Typography>
              </Box>
            </Box>
          )}


          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            
            
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
         लहान मुले (0-6 वर्षे) आणि त्यांचे संभाळकर्त्यांचे सुविधेला बेटी देण्याचे प्रमाण(Accessbility and Engagement)
            </Typography>

            
          <SubMenu label={<span style={{ color: 'white' }}>Settings</span>}  style={{ color: 'white' }}>
            <MenuItem>अनुकूल सुविधांमध्ये प्रवेश<br />केलेल्या मुलांची आणि<br />काळजीवाहूंची संख्या<br />(0-6 वर्षे)(No of childrens and Caregivers)</MenuItem>
            <MenuItem>सुविधेमध्ये संभाळकर्त्यांनी <br />एका दिवसात सरासरी <br />व्यतित केलेली वेळ<br />(Time Spend)</MenuItem>            
          </SubMenu>

          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            सुविधेमधील सुरक्षितेतेची स्थिती(Safety and Security)
            </Typography>           
          <SubMenu label={<span style={{ color: 'white' }}>Settings</span>}  style={{ color: 'white' }}>
            <MenuItem>संभाळकर्त्यांद्वारे सुविधेमध्ये <br />सुरक्षितता आणि ITC साठी<br />अनुकूल वातावरण वाढल्याचे प<br />रमाण(Safety and Wellbeing) </MenuItem>
            <MenuItem>वाहनांचा उपयोग न करता<br />सुविधेला भेट देणाऱ्याचे<br />(मुले आणि साम्भाळकर्ते)प्<br />रमाण(Trips) </MenuItem>            
          </SubMenu>

          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          सुविधेमधील उपकरणे आणि त्यांच्या देखभालीची स्थिती(Equipments and Maintainance)
            </Typography>
          <SubMenu label="Maintainanace"  style={{ color: 'white' }}>
            <MenuItem>सुविधांमध्ये उपलब्ध ITC<br />पूरक उपकरणांची संख्या<br />(Total equipments) </MenuItem>
            <MenuItem>कार्यरत उपकरणांची संख्या<br />(functional Equipments) </MenuItem>
            <MenuItem>सुविधांमध्ये स्थापित केलेल्या <br />सर्व उपकरणांची किंमत<br />(खरेदीच्या वेळी)<br />(Cost of Equipments) </MenuItem>
            <MenuItem>उपकरणांच्या दुरुस्ती आणि<br />देखभालीसाठी लागणारा खर्च<br />(Cost of Maintainance) </MenuItem>
          </SubMenu>
            
            
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          क्षमताबांधणी कार्यक्रमाची प्रगती आणि स्थिती(Capacity building and Behaviour changes from Sessions)
            </Typography>          
          <SubMenu label={<span style={{ color: 'white' }}>Settings</span>}  style={{ color: 'white' }}>
            <MenuItem > सेवा प्रदात्यांसाठी आयोजित<br/>केलेल्या प्रशिक्षण/कार्यशाळा/<br/>मंथन सत्रांची संख्या<br/>(Service Provider) </MenuItem>
            <MenuItem>काळजीवाहू आणि काळजीवाहूंसाठी<br/>आयोजित केलेल्या प्रशिक्षण/<br/>कार्यशाळा/मंथन सत्रांची<br/>संख्या(caregiver and Caretaker) </MenuItem>
            <MenuItem> पीएमसी अधिकार्‍यांसाठी<br/>आयोजित केलेल्या प्रशिक्षण/<br/>कार्यशाळा/मंथन सत्रांची<br/>संख्या(PMC officer) </MenuItem>
            <MenuItem>सेवा प्रदात्याच्या वर्तनाबद्दल<br/>सकारात्मक अभिप्राय<br/>देणाऱ्या सुविधा वापरकर्त्यांचे<br/> प्रमाण(Feedback) </MenuItem>
          </SubMenu>

          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
           आय.टी.सी अनुकूल उपक्रमांचे व नाविन्यपूर्ण उपक्रमांचे मनपा धोरणासोबत एकत्रीकरण(INTERVENSIONS)
            </Typography>
          <SubMenu label=""  style={{ color: 'white' }}>
            <MenuItem onClick={()=>setPage("NoOfPolicyAndGuidline")}>ITC च्या गरजा लक्षात <br />घेऊन PMC ने मंजूर <br />केलेल्या धोरणांची आणि <br />मार्गदर्शक तत्त्वांची संख्या<br />(No of Policies and<br />Guidlines) </MenuItem>
            <MenuItem onClick={()=>setPage("Features")}>पी.एम.सी च्या विविध<br /> विभागामध्ये समाविष्ट <br />केलेल्या आय. टी. सी <br />अनुकूल घटक/वैशिष्ट्यांची<br />संख्या(Features) </MenuItem>
            <MenuItem onClick={()=>setPage("CityPlanning")}>शहर नियोजनात समाविष्ट<br />केलेल्या ITC अनुकूल <br />कृतींची/उपाययोजनांची <br />संख्या(City Plannig) </MenuItem>  
          </SubMenu>

          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
           अर्बन ९५ बजेट(BUDGET)
            </Typography>
          
          <SubMenu label={<span style={{ color: 'white' }}>Settings</span>}  style={{ color: 'white' }}>
            <MenuItem onClick={()=>setPage("Allocated")} > लहान मुले (0-6 वर्षे)<br />साम्भाळकर्त्यांसाठी<br /> केलेल्या  बजेटची तरतूद<br />(Allocated) </MenuItem>
            <MenuItem onClick={()=>setPage("Utilization")}> लहान मुले (0-6 वर्षे)<br />  साम्भाळकर्त्यांसाठी<br />वापरलेले बजेट<br />(Utilization) </MenuItem>
            <MenuItem onClick={()=>setPage("AdditionalBudget")}>लहान मुले (0-6 वर्षे)<br />साम्भाळकर्त्यांसाठी अतिरिक्त आवश्यक बजेट<br />(Additional Budget)</MenuItem>
            {/* <MenuItem onClick={()=>setPage("CostOfMaintainance")}> Cost of Maintainance </MenuItem> */}
          </SubMenu>
          
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              अनुकूल सुविधांच्या आवारातील  ध्वनी आणि हवा प्रदूषणाची स्थिती(ENVIROMENTAL INDICATORS)
            </Typography>
          
         
          <SubMenu label={<span style={{ color: 'white' }}>Settings</span>}  style={{ color: 'white' }}>
            <MenuItem onClick={()=>setPage("NoisePollution")}>ध्वनी प्रदूषण (Noise Pollution) </MenuItem>
            <MenuItem onClick={()=>setPage("AirPollution")}>हवा प्रदूषण (Air Pollution) </MenuItem>
          </SubMenu>

            {/* <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {/* Data */}
            </Typography>
            {/* <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
