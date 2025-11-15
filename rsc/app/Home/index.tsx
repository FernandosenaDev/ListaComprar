import { View,  Image } from "react-native"
import {Button} from "@/components/Button"
import { Input } from "@/components/Button/Input"

import {styles} from "./styles"

export  function Home(){
  return(
      <View style = {styles.container}>
        <Image source ={require("../../assets/logo.png")}  style={styles.logo}/>
       
          <View style = {styles.from}>

           <Input placeholder =" digite o que você precisa comprar "/>

        <Button title="Entrar" />
        </View>
      </View>
  )
}

