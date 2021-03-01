import { createGlobalStyle } from 'styled-components';
// import wallpaper from './img/wallpaper.jpg';
export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box; 
  font-family: sans-serif;
  font-size: 16px;
  
}


body {
  margin: 0;
background: rgb(4,165,186);
background: radial-gradient(circle, rgba(4,165,186,1) 23%, rgba(203,235,1,1) 67%, rgba(48,142,10,1) 95%);
background-size: cover;
height: 100vh;

}


`;
