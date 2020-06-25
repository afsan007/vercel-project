import React,{ FC, ReactElement } from "react";
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { deviceType } from "react-device-detect";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const AutoPlaySwipeableViews = SwipeableViews;

const ContainerSection = styled(Grid)`
    min-height: 507px;
    direction: rtl;
    margin-right:200px
`;

const Mygrid = styled(Grid)`
    margin-top:30px;
    margin-bottom: 30px
  `


const Stepper = styled(MobileStepper)`
    background-color: unset;
    position: relative;
    bottom: 250px;
    width:100%;
    & 	.MuiMobileStepper-dots{
        display: none
    }
`

export interface ItemCarouselProps {
    children: [ReactElement<any>];
    itemNumberInEachStepInMobile?: number;
    itemNumberInEachStepInTablet?: number;
    itemNumberInEachStepInDesktop?: number; 
  };

const createResponsiveChildren = (children, itemNumberInEachStep) => {
    let component: any[] = [];
    for(let childIndex = 0 ; childIndex < children.length; childIndex+=itemNumberInEachStep)
    {
        let childComponent: any[] = [];
        const breakCon = ((children.length - childIndex) >= itemNumberInEachStep) ? itemNumberInEachStep : children.length - childIndex;
        
        for(let itemIndex = childIndex; itemIndex < breakCon + childIndex ; itemIndex++)
        {
            childComponent.push(children[itemIndex])
        }        

        component.push( 
            <ContainerSection container key={childIndex}> 
                <Container maxWidth="md">
                  <Mygrid
                  container
                  direction="row" 
                  justify="flex-start"
                  alignItems="stretch"
                  spacing={0}>            
                    {childComponent}             
                  </Mygrid> 
                </Container>                                               
            </ContainerSection> 
        );
    }
    return component;
}

export const ItemCarousel: FC<ItemCarouselProps> = ({children, itemNumberInEachStepInMobile = 1, itemNumberInEachStepInTablet = 2, itemNumberInEachStepInDesktop = 3}) =>
{
    const [activeStep, setActiveStep] = React.useState(0);
    let itemNumberInEachStep = itemNumberInEachStepInDesktop
    if(deviceType === "mobile")
      itemNumberInEachStep = itemNumberInEachStepInMobile
    else if(deviceType === "tablet")
      itemNumberInEachStep = itemNumberInEachStepInTablet

    const childrenComponent = createResponsiveChildren(children, itemNumberInEachStep);
    let maxSteps =  Math.ceil(children.length / itemNumberInEachStep);
    
    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };

    return( 
        <>
        <AutoPlaySwipeableViews
            axis='x'
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            >
            {childrenComponent}
        </AutoPlaySwipeableViews>
          <Stepper
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0} >                        
                  <KeyboardArrowLeft /> 
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  <KeyboardArrowRight />                       
                </Button>
              }        
          /> 
        </>      
        );
};

export default ItemCarousel;