

import {Link, useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import SideBar from './sidebar';



    const Books = () => {

        const [data, setData]=useState([])
        const [error, setError]=useState(null)


        //params
        const {bibleId}= useParams()

        

        useEffect(() => {
        const fetchedData = async()=>{
            try{
                const url=`https://api.scripture.api.bible/v1/bibles/${bibleId}/books`
                const response = await fetch(url,
                    {headers: { 'api-key': process.env.REACT_APP_API_KEY }})
                const result= await response.json()
                setData(result.data)
                
            }
            catch(error) {
                setError(error)
            }}

        fetchedData()
        
    },[bibleId])
        


     
            // divComponents will hold subarrays of the content, each subarray 
            //will contain the sizedivision number of elements
            const divComponents = [];
            const sizeDivision = 13;   

                 data.forEach((v, i) => {
                if (i % sizeDivision === 0) {
                  divComponents.push([]);
                }
                divComponents[Math.floor(i / sizeDivision)] = [...divComponents[Math.floor(i / sizeDivision)], v];
              });


            
              const myComponent=()=>{
                return <div>
                        
                    
                
                    {divComponents.map((column)=>{
                       return (
                       <div style={{ float: "left", width: "33%",paddingBottom:"20px",
                       border:"1px solid #212121", borderRadius:"5px" }}> 
                           {column.map((w)=>{
                            return <Link to={{
                                pathname:`/version/${bibleId}/books/${w.id}/chapters`,
                                state:{version: w.name}
                            }} 
                            style={{display:"flex",
                            padding: "6px 12px",
                            } }
                            key={w.id}>{w.name}</Link>})}
                        </div>)
                    })}
                    
                    
                    </div>
           }












        //error handling 

        let content

        if(!data.length === 0){

            content= <p>loading...</p>
        }else if(error){
            content= <p>something is wrong..</p>
        }else{
            content=(

                <div
                >
                  Available Books

                  {myComponent()}
                </div>
                

            )
        }



        return (
            <div>
                
                <Navbar style={{backgroundColor:"#975252"}}>
                    <div style={{fontSize:"1.5vw",}}>
                    <a style={{border:"none",
                        backgroundColor:"#975252", 
                    }} href='/'>📖 Bible</a>

                    </div>
                </Navbar>
                <div className='container'>
                <div className="col1">
                <SideBar/>
                </div>
                
                
                    <div className='col2'>{content}</div>
                    
                
             
                </div>

                
            </div>);
}
 


export default Books;

