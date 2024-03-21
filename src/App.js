function App() {

  const handleColor = (val) => {
    const background = document.querySelector(".container");
    switch (val) {
      case "red":
        background.style.backgroundColor = "red";
        break;
      case "blue":
        background.style.backgroundColor = "blue";
        break;
      case "green":
        background.style.backgroundColor = "green";
        break;
      case "orange":
        background.style.backgroundColor = "orange";
        break;
      case "violet":
        background.style.backgroundColor = "purple";
        break;
      case "yellow":
        background.style.backgroundColor = "yellow";
        break;
      default:
        background.style.backgroundColor = "white";
        break;
    }
  }

  return (
    <>
      <div className="container flex flex-col justify-center items-center h-screen w-full">
        <div className="button-box rounded-md p-2 flex-row justify-center items-center space-x-3 mt-auto  mb-6 bg-gray-500 ">
          <button onClick={() => handleColor("red")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-red-500">Red</button>
          <button onClick={() => handleColor("blue")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-blue-400">Blue</button>
          <button onClick={() => handleColor("green")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-green-400">Green</button>
          <button onClick={() => handleColor("orange")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-orange-400">Orange</button>
          <button onClick={() => handleColor("violet")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-violet-400">Violet</button>
          <button onClick={() => handleColor("yellow")} className=" border-black p-1 rounded-md bg-gray-50 hover:bg-yellow-400">Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
 