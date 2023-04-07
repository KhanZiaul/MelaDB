import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import Search from './Components/SearchField/Search'
import React, { useState } from 'react';

function App() {
  const [datas,setDatas] = useState([])
  function searchResult(result){
    setDatas(result)
  }

  return (
    <div >
      <Header></Header>
      <Search searchResult={searchResult}></Search>
      <Cards datas={datas}></Cards>
    </div>
  )
}

export default App
