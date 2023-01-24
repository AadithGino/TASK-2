import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TopBar from '../TopBar/TopBar';
ChartJS.register(ArcElement, Tooltip, Legend);


function Graph() {
    const [jpg,setjpg]=useState();
    const [png,setpng]=useState();
    const [view,setView]=useState(false);

    const [journaljpg,setjournaljpg]=useState();
    const [journalpng,setjournalpng]=useState();
    
    
    useEffect(()=>{
        axios.get("http://localhost:5000/graph").then((data)=>{
            console.log(data.data.numberofJPG);
            setjpg(data.data.numberofJPG)
            setpng(data.data.numberofPNG)
        })


        axios.get("http://localhost:5000/graph-journal").then((data)=>{
            console.log(data.data.numberofJPG);
            setjournaljpg(data.data.numberofJPG)
            setjournalpng(data.data.numberofPNG)
        })

    },[])


    const data = {
      labels: ['JPG', 'PNG'],
      datasets: [
        {
          label: 'Images',
          data: [jpg,png],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
           
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            
          ],
          borderWidth: 1,
        },
      ],
    };


    const data2 = {
      labels: ['JPG', 'PNG'],
      datasets: [
        {
          label: 'Images',
          data: [journaljpg,journalpng],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
           
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            
          ],
          borderWidth: 1,
        },
      ],
    };


   
  return (
    <div>
      <TopBar/>
      <br />
      <button  onClick={() => setView(false)}>Book</button>
      <br />
      <br />
    
      <button  onClick={() => setView(true)}>Journal</button>
      <h2>{view?'JOURANL DATA':'BOOK DATA'}</h2>
     <div style={{height:"300px",width:"50%"}}><Pie data={view?data2:data} /></div>
    </div>
  )
}

export default Graph
