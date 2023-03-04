import './App.css';
import {Layout, Breadcrumb, Menu, Button} from 'antd';
import {SmileOutlined, SmileTwoTone, SortDescendingOutlined} from '@ant-design/icons';
import {React, useState, useEffect} from 'react';
import { getGeneratedCountry } from './client';

const { Header, Footer, Sider, Content } = Layout;

let hideFlagImage = true;
let hideDetailsDiv = true;

function showContent(){

  hideFlagImage = false;
  hideDetailsDiv = false;
}

function formatPercentage(percentage){

  //percentage = 0.00035;

  let splittedPercentage = (String(percentage).split("."))[1];
  let precision = 100;

  splittedPercentage = String(splittedPercentage);

  console.log(splittedPercentage);

  //TODO
  // for(let i=2; i<splittedPercentage.length; i++){

  //   if(splittedPercentage[i] == 0){
  //     precision *= 10;
  //   }else{
  //     return;
  //   }
  // }

  let formatted = Math.round((percentage + Number.EPSILON) * precision) / precision;

  return formatted;
}

function App() {
  
  const [country, setCountry] = useState([]);

   const getCountry = () => getGeneratedCountry()
                              .then(res => res.json())
                              .then(data => {
                                  
                                setCountry(data); 
                                console.log(country);                           
                              })
                              .catch(err => console.log(err.message));


  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <SmileOutlined id='smile' style={{ fill: 'white' }}/>
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <div className="site-layout-content" align="center">
        
        <br/>
        <br/>
        <br/>
        <Button 
        size='large'
        onClick={  () => {  getCountry(); showContent();}}>
          Let there be life!
        </Button>
      
      </div>
      <div id='flag_div' align="center" className="site-layout-content">       
          <img id='country_flag' hidden={hideFlagImage}
          src={country.imageUrl}         
          />
       </div>
      <div id='information_area' className="site-layout-content" hidden={hideDetailsDiv}>
          <p id='congrats_paragraph'><b>Congratulations! You were born in:</b></p>
          <p id='country_paragraph'><b>{country.name}</b></p>
          <br></br>
          <p><b>Rank: {country.id}</b></p>
          <p><b>Chance:  {formatPercentage(country.percentage)}%</b></p>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Designed by Adrian
    </Footer>
  </Layout> 
  );
}

export default App;
