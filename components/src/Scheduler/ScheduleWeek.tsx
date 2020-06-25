





// import React, {FC, useState} from 'react';
// import {
//    Paper, 
//    Button, 
//    Grid, 
//    CardMedia, 
//    Typography,
//   //  LinearProgress 
//  } from '@material-ui/core'
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   Appointments,
//   Toolbar,
//   DateNavigator,
//   WeekView,
//   TodayButton,
//   AppointmentTooltip} from '@devexpress/dx-react-scheduler-material-ui';
// import styled from "styled-components";
// import InfoIcon from '@material-ui/icons/Info';

// const MyPaper = styled(Paper)`
//   font-family: "IRANSans";
//   direction:rtl;
// `

// const MyMedia = styled(CardMedia)`
//   height: 145px;
//   margin: 0 auto;
//   cursor: pointer;
//   object-fit: contain;
// `;

// const Title = styled(Typography)`
//   font-family: "IRANSans";
//   font-size: 16px;
//   letter-spacing: -0.29px;
//   color: #c2c2c2;
//   margin:10px 30px 0px 0px;
// `;

// const NameText = styled.span`
//     font-family: "IRANSans";
//     color: #323232;
//     font-size: 14px;
//     margin-right: 15px;
//     cursor: pointer;
// `;

// const GridBtn = styled(Grid)`
//   font-family: "IRANSans";
//   margin-top:15px;
//   text-align:center;
//   `
//  export interface scdulerdate {
//    startDate: Date;
//    endDate: Date;
//    title: string;
//    id: string;
//    presenterName: string;
//    presenterId: string;
//    image: string;
//    webinarLink: (children: JSX.Element,id: string) => JSX.Element;
//    presenterLink?: (children: JSX.Element,id: string) => JSX.Element;
//  }
// export interface ScheduleCalendarProps{
//       SchedulerData: scdulerdate[];
//       next: () => any;
//       prev: () => any;
//   }

// const schedulerData = [
//   { startDate: '2020-05-01T09:45', endDate: '2020-05-01T11:00', title: 'وبینار گراف کیوال',id:"54646566546", image: "gph.png", presenterName:"سینا ماشینی"},
//   { startDate: '2020-05-31T09:00', endDate: '2020-05-31T13:00', title: 'دسته بیل',id:"879789798", image: "gph.png",presenterName:"سینا ماشینی" },
// ];

//  export const ScheduleCalendar: FC<ScheduleCalendarProps> = ({SchedulerData, next, prev}) => {
//   schedulerData = SchedulerData
//   const [addDays, setAddDays] = useState(0);
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const nav = ({type}) => 
//      { 
//      let buttonType: "back" | "forward" = "forward";
//      let btnOnclick = () => setAddDays(addDays - 7)
//      if(type == "forward" ) 
//      {
//       buttonType = "back"
//       btnOnclick = () => setAddDays(addDays + 7)
//      }
//      return (<DateNavigator.NavigationButton type={buttonType} onClick={btnOnclick}/>)
//     };
//   const messages = {today: "امروز"}
//   let curTime = addDaysToDate(currentDate, addDays)
//   return (
//   <MyPaper elevation={5} variant="outlined">
//     <Scheduler
//       data={schedulerData}
//       locale="fa-FA"
//       firstDayOfWeek={6}
//       >      
//       <ViewState
//         defaultCurrentDate = {currentDate} 
//         currentDate = {curTime}
//         onCurrentDateChange = {(date) => {setCurrentDate(date);setAddDays(0);}}   
//       />           
//        {/* <Toolbar  rootComponent={loadingComponent}/>  */}
//        <Toolbar /> 
//        <DateNavigator navigationButtonComponent={nav} overlayComponent={overLayComponent} />
//        <TodayButton messages={messages} />
//       <WeekView intervalCount={1} startDayHour={8}  endDayHour={24} cellDuration={60} /> 
//        <Appointments  />
//        <AppointmentTooltip
//             headerComponent = {appointemntTooltipCompnent}
//             contentComponent = {renderContentComponent}
//           />
//     </Scheduler>
//   </MyPaper>
//   )
// };

// const addDaysToDate = (date, days) =>
// {
//  let result = new Date(date);
//  result.setDate(result.getDate() + days);
//  return result;
// }
// const appointemntTooltipCompnent = ({appointmentData}:any) =>
// {
//   return (
//   <Grid>                
//     <MyMedia
//      image={appointmentData.image}
//      title={appointmentData.title}
//    /> 
//  </Grid>);
// }


// const recurringIconComponent = () =>
// {
//    return <InfoIcon />
// }

// const renderContentComponent = ({formatDate,appointmentData }:any) =>
// {
//      return (
//        <MyPaper>
//          <Grid item xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
//          <Grid xs={12} md={6}>
//           <AppointmentTooltip.Content formatDate={formatDate} recurringIconComponent={recurringIconComponent} appointmentData={appointmentData}/>         
//          </Grid>
//          <Grid xs={12} md={6}>
//           <Title>ارائه دهنده  <NameText> {appointmentData.presenterName} </NameText></Title>
//           <GridBtn justify="flex-start" alignItems="flex-start"><Button variant="contained" color="primary">مشاهده وبینار</Button></GridBtn>
//          </Grid>
//          </Grid>
//       </MyPaper>
//      )

// }

// // const loadingComponent = () =>
// // {
// //   return(
// //     <LinearProgress color="primary" variant="query" />
// //   )
// // } 

// const MyGrid = styled(Grid)`
//   direction: rtl
//   font-family: "IRANSans";
//   & table {
//     width:406px
//   }
//   & .MuiToolbar-root{
//     direction: ltr
//   }
// `

// const overLayComponent = ({children, onHide, target, visible}:any) =>
// {
//   return (
//     <DateNavigator.Overlay  onHide={onHide} target={target} visible={visible}>
//       <MyGrid> {children} </MyGrid>
//     </DateNavigator.Overlay>
//   )
// }


// export default ScheduleCalendar;


