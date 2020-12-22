import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.main`
    max-width: 1120px;
    margin: 64px auto;
    display: flex;
`;

export const Schedule = styled.div`
    flex: 1;
    margin-right: 120px;

    h1 {
        font-size: 36px;
    }
    p {
        margin-top: 8px;
        color: ${props => props.theme.colors.primary};
        display: flex;
        align-items: center;
        font-weight: 500;

            span {
              display: flex;
              align-items: center;
            }
            
            span + span::before {
              content: '';
              width: 1px;
              height: 12px;
              background: ${props => props.theme.colors.primary};
              margin: 0 8px;
            }
    }
    /*
    or
     p {
        margin-top: 8px;
        color: ${props => props.theme.colors.primary};

        span + span {
            margin-left: 8px;
            padding-left: 8px;
            border-radius: 1px; 
            border-left: 1px solid ${props => props.theme.colors.primary};
        }
    } */
`;

export const Calendar = styled.aside`
    width: 380px;
    .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;


export const NextAppointment = styled.div`
    margin-top: 50px;

    > strong{
        color: ${props => props.theme.colors.gray};
        font-size: 20px;
        font-weight: 400;
    }
    
`;

export const Section = styled.section`
    margin-top: 40px;

    > strong{
        color: ${props => props.theme.colors.gray};
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid ${props => props.theme.colors.gray};
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }
`;

export const Appointment = styled.div`
`;
