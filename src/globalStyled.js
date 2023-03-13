
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  :root{

      /*box-shadow*/
     --shadow-1: 10px 10px 30px rgba(0, 0, 0, 0.06); 
    /*colors actions*/
    --sucess-1: #00A131;
    --sucess-2: #C3F042;
    --danger-1: #E91B06;
    --danger-2: #FA5C00;
    --primary-1: #0659FF;
    --primary-2:#07B1CC;
        /* Colors*/
    --cyan-400: #CEF5FD;
    --tangerine-400:#FFA987;
    --red-400: #FF4F53;
    --red-600: #e54b4b;
    --red-900: #A90E0E;
    --carbon-100: 97abb1;
    --carbon-300: ##4b4e47;
    --white-600: #f7eb8;
    --yellow-100: #8FCDA;
    --green-400: #Ceff1a;
    --green-300: #267944;
    --green-600: #7ef8bb;
    --blueLight-900: #95b8d1;
    --Purple-100: #A829FB;
    --pink-600: #E34BA9;

    /*Gradients*/
    --gradient-header: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    
    /*Border Radius*/
    --rounded: 15px; 
    --roundedLight: 10px; 
    --roundedMedium: 20px;
    --black: #f5f5f5;
    --gray-200: #94a3b8;
    --gray-500: #f5f5f5;
    --gray-900: #64748b;



    /*font size span*/
    --small: 20px;
  }

  body{
    display: block;
    padding: 1rem;
  }
  
  h1, h2, h3 , h4, h5, h6, input, select, option, button{
    font-family: 'Space Grotesk', sans-serif;
  }
  

  form{
    width: 100%s;
    margin:  30px auto;
    padding: 0.5rem;
    

   
  }

 input{
      box-shadow: var(--shadow-1);

      :placeholder{
        color: #efefef;
      }
    }


  `