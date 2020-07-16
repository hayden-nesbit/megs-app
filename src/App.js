import React, { useState } from 'react';
import TopNav from './components/TopNav'
import QuickView from './components/QuickView'
import InputForm from './components/Form'
import Inventory from './components/Inventory'
import Commission from './components/Commission'
import Finance from './components/Finance'

function App() {

  const [view, setView] = useState("quick")
  const [list, setList] = useState(JSON.parse(localStorage.getItem("inventoryData")));
  const [type, setType] = useState("")
  const [title, setTitle] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [status, setStatus] = useState("Available")
  const [price, setPrice] = useState("")
  const [buyer, setBuyer] = useState("")
  const [due, setDue] = useState(new Date())
  const [img, setImg] = useState("")

  function storeList(props) {
    setList(props)
    localStorage.setItem("inventoryData", JSON.stringify(props))
  }

  return (
    <>
      <TopNav 
        view={view}
        setView={setView}
      />
      <div className="container mt-5">
      {view === "quick" ? 
        <div className="row mb-5">
          <div className="col-md-8 col-12">
          <legend>Upcoming</legend>
            <QuickView
              list={list}
              storeList={storeList}
              status={status}
              setStatus={setStatus}
            />
          </div>
          <div className="col-md-4 col-12 bg-light rounded">
            <InputForm
              list={list}
              storeList={storeList}
              type={type}
              setType={setType}
              title={title}
              setTitle={setTitle}
              dimensions={dimensions}
              setDimensions={setDimensions}
              status={status}
              setStatus={setStatus}
              price={price}
              setPrice={setPrice}
              buyer={buyer}
              setBuyer={setBuyer}
              due={due}
              setDue={setDue}
              img={img}
              setImg={setImg}
            />
          </div>
        </div>
        : view === "inventory" ?
        <Inventory 
          list={list}
          storeList={storeList}
        />
        : view === "commissions" ?
        <Commission 
          list={list}
          storeList={storeList}
        />
        : view === "finances" ?
        <Finance 
          list={list}
        />
        : view === "receipts" ?
        "Receipts"
        :
        null
      }
      </div>
    </>
  );
}

export default App;
