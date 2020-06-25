import React, {FC} from 'react';
import {
   Paper, 
   Button, 
   Grid, 
   CardMedia, 
   Typography,
   LinearProgress,
   Chip
 } from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  Toolbar,
  DateNavigator,
  WeekView,
  TodayButton,
  AppointmentTooltip} from '@devexpress/dx-react-scheduler-material-ui';
import styled from "styled-components";
import InfoIcon from '@material-ui/icons/Info';


const MyPaper = styled(Paper)`
  * {
    font-family: "IRANSans";
  }
`

const MyMedia = styled(CardMedia)`
  height: 145px;
  margin: 0 auto;
  cursor: pointer;
  object-fit: contain;
`;

const Title = styled(Typography)`
  font-family: "IRANSans";
  font-size: 16px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
  margin:10px 30px 0px 0px;
`;

const NameText = styled.span`
    font-family: "IRANSans";
    color: #323232;
    font-size: 14px;
    margin-right: 15px;
    cursor: pointer;
`;

const GridBtn = styled(Grid)`
  font-family: "IRANSans";
  margin-top:15px;
  text-align:center;
  `
const PresenterAppointment = styled.div`
  color: white;
  margin-right:2px
`
const AppointmentCard = styled(Appointments.Appointment)`
  ${props => {
    if(props.now)
    return (`
    animation:blinkingText 1.2s infinite;
    @keyframes blinkingText{
      0%{     background-color: rgb(100, 181, 246);    }
      49%{    background-color: rgb(100, 181, 246); }
      60%{    background-color: red; }
      99%{    background-color:red;  }
      100%{   background-color: rgb(100, 181, 246);    }
    }
  `)
  }};
`
const TimeStatus = styled(Chip)`
  font-family: "IRANSans";
  position: relative;
  bottom: 125px;
  right: 23px;
  float:left;
  -webkit-transform:rotate(-50deg);
  -moz-transform: rotate(-50deg);
  -ms-transform: rotate(-50deg);
  -o-transform: rotate(-50deg);
  transform: rotate(-50deg);
`
 export interface ScdulerData {
   startDate: string; 
   endDate: string; 
   title: string;
   id: string;
   presenterName: string;
   presenterId: string;
   image: string;
   webinarLink: (children: JSX.Element,id: string) => JSX.Element;
   presenterLink: (children: JSX.Element,id: string) => JSX.Element;
 }
export interface ScheduleCalendarProps{
      SchedulerData: ScdulerData[] | undefined ;
      next: () => any;
      prev: () => any;
      setCurrnetDate: (date:Date) => any;
      currentDate: Date;
      loading: boolean;
  }

 export const ScheduleCalendar: FC<ScheduleCalendarProps> = ({SchedulerData, next, prev, currentDate, setCurrnetDate, loading}) => {
  const schedulerData = SchedulerData
  let loadingToolbar = <></>;
  if (loading) loadingToolbar = <Toolbar  rootComponent={loadingComponent}/>  ;
  const nav = ({type}) => 
     { 
     let buttonType: "back" | "forward" = "forward";
     let btnOnclick = () => prev();
     if(type == "forward" ) 
     {
      buttonType = "back"
      btnOnclick = () => next();
     }
     return (<DateNavigator.NavigationButton type={buttonType} onClick={btnOnclick}/>)
    };

  const messages = {today: "امروز"}

  return (
  <MyPaper elevation={5} variant="outlined">
    <Scheduler
      data={schedulerData}
      locale="fa-FA"
      firstDayOfWeek={6}      
      rootComponent = {schedulerRoot}
      >      
      <ViewState
        defaultCurrentDate = {currentDate} 
        currentDate = {currentDate}
        onCurrentDateChange = {(date) => setCurrnetDate(date)}   
      />                   
       {loadingToolbar}
       <Toolbar /> 
       <DateNavigator navigationButtonComponent={nav} overlayComponent={overLayComponent} />
       <TodayButton messages={messages} />
      <WeekView intervalCount={1} startDayHour={6}  endDayHour={24} cellDuration={60} /> 
       <Appointments  appointmentComponent = {Appointment} />
       <AppointmentTooltip
            headerComponent = {appointemntTooltipCompnent}
            contentComponent = {renderContentComponent}
          />
    </Scheduler>
  </MyPaper>
  )
};

const schedulerRoot = ({height,children}:any) =>{   
      return( <Scheduler.Root height = {height}>
          <RootGrid>{children}</RootGrid>
      </Scheduler.Root>)
}

const Appointment = ({children, data, onClick, resources}: any) => {
  const presenting = (Date.now() >= Date.parse(data.startDate) && Date.now() <= Date.parse(data.endDate))
  return (
  <AppointmentCard  data = {data} onClick = {onClick} draggable={false} resources = {resources} now = {presenting}>
    {children}
    <PresenterAppointment><span> توسط </span><span>{data.presenterName}</span></PresenterAppointment>
  </AppointmentCard>);
}

const appointemntTooltipCompnent = ({appointmentData}:any) =>
{
  const presenting = (Date.now() >= Date.parse(appointmentData.startDate) && Date.now() <= Date.parse(appointmentData.endDate))
  const presentingChip = (presenting) ? <TimeStatus
    size="small"
    label="در حال برگزاری "
    color="secondary"
  /> : <></>;
  return (
  <Grid>   
  {appointmentData.webinarLink(         
    <MyMedia
     image={appointmentData.image}
     title={appointmentData.title}
   /> 
   ,appointmentData.id)}
   {presentingChip}
 </Grid>);
}


const recurringIconComponent = () =>
{
   return <InfoIcon />
}

const renderContentComponent = ({formatDate,appointmentData }:any) =>
{
     return (
       <MyPaper>
         <Grid item xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
         <Grid xs={12} md={6}>
          <AppointmentTooltip.Content formatDate={formatDate} recurringIconComponent={recurringIconComponent} appointmentData={appointmentData}/>         
         </Grid>
         <Grid xs={12} md={6}>
          {appointmentData.presenterLink(<Title>ارائه دهنده  <NameText> {appointmentData.presenterName} </NameText></Title>,appointmentData.presenterId)}
          <GridBtn justify="flex-start" alignItems="flex-start">{appointmentData.webinarLink(<Button variant="contained" color="primary">مشاهده</Button>, appointmentData.id)}</GridBtn>
         </Grid>
         </Grid>
      </MyPaper>
     )
}

const loadingComponent = () =>
{
  return(
    <LinearProgress color="primary" variant="query" />
  )
}

const RootGrid = styled(Grid)`
   * {
    font-family: "IRANSans";
   }
`

const MyGrid = styled(Grid)`
  direction: rtl
  *{
    font-family: "IRANSans";
  }
  & table {
    width:406px
  }
  & .MuiToolbar-root{
    direction: rtl
  }
  & .MuiSvgIcon-root {
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`

const overLayComponent = ({children, onHide, target, visible}:any) =>
{
  return (
    <DateNavigator.Overlay  onHide={onHide} target={target} visible={visible} >
      <MyGrid> {children} </MyGrid>
    </DateNavigator.Overlay>
  )
}

export default ScheduleCalendar;



