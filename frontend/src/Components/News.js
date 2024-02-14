import React, { useEffect, useState } from 'react'
import './News.css'
import axios from 'axios';

function News() {

    const [ quiz , setQuiz ] = useState([]);

    const fetchQuiz = async()=>{
        const response = await axios.get("https://opentdb.com/api.php?amount=5&type=multiple");
        response.data.results.map(( quiz )=>{
            quiz.incorrect_answers.push(quiz.correct_answer)
        })
        setQuiz(response.data.results);
    }


    useEffect(()=>{
        console.log("work")
        fetchQuiz();
    },[])

    return (
        <div className='news-container'>
            <h1 className='news-title'>Updates for You</h1>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Quiz Center</h1>
                    <div>
                        {
                        quiz.map(( quiz , index )=>(
                        <div className='news-quiz-event' key={index}>
                            <p>Quiz-{index+1}</p>
                            <p>{quiz.question.replace(/&quot;/g,'"')}</p>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center", gap:"5px"}}>
                            {    
                                quiz.incorrect_answers.map(( ans , index )=>(
                                    <p key={index} style={{borderStyle:"solid",borderWidth:"1px",padding:"3px",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{ if ( ans == quiz.correct_answer){alert( "Correct answer" )}else{alert("correct answer is "+ quiz.correct_answer)} }}> {ans} </p>
                                    ))
                                    
                                }
                            </div>
                        </div>
                        ))
                        }

                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
