import React, { useState } from 'react';
import Icon from './Component/Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"
const ticktactoe = new Array().fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")
    const playAgain = () => {
        setIsCross(true)
        setWinMessage("")
        ticktactoe.fill("")
    }
    const findWinner=()=>{
        if((ticktactoe[0]==ticktactoe[1] || ticktactoe[0]==ticktactoe[2])&&(ticktactoe[0]!=""))
        {
       setWinMessage(ticktactoe[0]+"is the winner")     
        }
        else if((ticktactoe[3]==ticktactoe[4] || ticktactoe[3]==ticktactoe[5])&&(ticktactoe[3]!=""))
        {
            setWinMessage(ticktactoe[3]+"is the winner")     
        }
        else if((ticktactoe[6]==ticktactoe[7] || ticktactoe[6]==ticktactoe[8])&&(ticktactoe[6]!=""))
        {
            setWinMessage(ticktactoe[6]+"is the winner")     
        }
        else if((ticktactoe[0]==ticktactoe[3] || ticktactoe[0]==ticktactoe[6])&&(ticktactoe[0]!="")){

        setWinMessage(ticktactoe[0]+"is the winner")  
    }
        else if((ticktactoe[1]==ticktactoe[4] || ticktactoe[1]==ticktactoe[7])&&(ticktactoe[1]!="")){
        setWinMessage(ticktactoe[1]+"is the winner")  
    }
    else if((ticktactoe[2]==ticktactoe[5] || ticktactoe[2]==ticktactoe[8])&&(ticktactoe[2]!="")){
        setWinMessage(ticktactoe[2]+"is the winner")  
    }
    else if((ticktactoe[2]==ticktactoe[4] || ticktactoe[2]==ticktactoe[6])&&(ticktactoe[2]!="")){
        setWinMessage(ticktactoe[2]+"is the winner")  
    }
    else if((ticktactoe[0]==ticktactoe[4] || ticktactoe[0]==ticktactoe[8])&&(ticktactoe[0]!="")){
        setWinMessage(ticktactoe[0]+"is the winner")  
    }
    return (
        <div>
            <Icon choice="circle" />
        </div>
    )
}
export default App;