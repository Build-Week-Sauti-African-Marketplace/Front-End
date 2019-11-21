import styled from 'styled-components';

export const ProfileCon = styled.div`
    min-height: calc(100vh - 270px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: lightblue;
`;

export const MoveCon = styled.div`
    min-height: 100%;
    min-width: 600px;
    background: white;
    padding: 100px;
    border-radius: 15px;
    box-shadow: 5px 5px grey;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    font-family: "Hanalei Fill", cursive;
    font-size: 30px;
`;

export const ItemsDiv = styled.div`
    height: 100%;
`;

export const ItemsBoxes = styled.p`
    border: 2px solid black;
    border-radius: 15px;
    padding: 15px 0; 
    font-size: 25px;
    text-align: center;
    background: lightblue;
`;