import { createGlobalStyle } from "styled-components";

export const TemplateGlobal= createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #D9D9D9;
        color:#F4F4F4;
        display: table;
        width: 100%;
        height: 100%;
        
    }

     .v{
        margin: 7px;
        top: 10px;
        font-size:12px ;
        color: #BC3A3A;
        
    }


*::-webkit-scrollbar-thumb {
  
  border: 1.5px solid #676767;
  
}

*::-webkit-scrollbar-track {
  background-color: white;
}


    p{
        font-size: medium;
        font-weight: lighter;
        line-height:30px;
        margin-bottom: 2rem;
        font-family: sans-serif;
    }

    a{
        color: #F4F4F4;
        font-family: sans-serif;
        margin:5px 5px;
        transition: 0.5s;
        padding: 2px 10px;
        border: 1px solid #212121
    }

    a:hover{
        background-color:#0D0D0D;
        color: white;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        border: 1.5px solid #676767;
    }

 

    h1{
        font-size: 3vh;
        font-weight: bold;
        font-family: sans-serif;
        color: #F4F4F4;
        text-decoration: none;
        width: 100px;
    }
    
    .col0{
        width: 15%;
        height: 100vh;
        float: left;
        border-collapse: collapse;
        background-color:none;
        overflow-x: hidden;
        overflow-y: auto;
        margin:0 10vh 0 0 ;
        padding: 10px 0;
        border-radius:2vw;
    }


    .col1{
        width: 15%;
        height: 100vh;
        float: left;
        border-collapse: collapse;
        background-color:#1B1717;
        overflow-x: hidden;
        overflow-y: auto;
        margin:0 10vh 0 0 ;
        padding: 10px 0;
        border-radius:2vw;
        
    }
    .col2{
        background-color:#1B1717;
        border-radius:2vw;
        width: 50% !important;
        height: 90vh;
        float: left;
        overflow-x: hidden;
        overflow-y: scroll;
        margin:10vh 0 0 0 ;
        padding: 7vh 4vw;
        
    }
    
    .col3{
        width: 23%;
        height: 50vh;
        position: relative;
        float: right;
        background-color:#1B1717;
        border-collapse: collapse;
        overflow-x: hidden;
        overflow-y: scroll;
        margin:0 2vw 0 10vh ;
        padding: 4vh 2vw;
        border-radius:2vw;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
}
    
    

`