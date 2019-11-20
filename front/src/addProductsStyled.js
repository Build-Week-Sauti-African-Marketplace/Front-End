import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

export const useStyles = makeStyles(theme => ({
    container: {
      height: '98vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textField: {
      width: 200,
      margin: '10px !important',
    },
}));

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background: #EAEBED;
    box-shadow: 7px 7px #393E41;
    border-radius: 15px;
  `;