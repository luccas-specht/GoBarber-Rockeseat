import styled from 'styled-components';

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
