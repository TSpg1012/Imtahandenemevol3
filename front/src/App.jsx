import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { salam } from "./redux/slices/productSlice";
import Hero from "./components/Hero/Hero";
import OurChef from "./components/OurChef/OurChef";
import Menu from "./components/Menu/Menu";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  return (
    <ChakraProvider>
      <Hero />
      <OurChef />
      <Menu />
    </ChakraProvider>
  );
}

export default App;
