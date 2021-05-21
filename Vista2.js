import axios from 'axios';
import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect} from 'react';
import ModalEliminar from '../components/ModalEliminar';


export default function Vista2() {

  const [state, setState]= useState({
    data: []
  })

  useEffect(() => {
    getData();
  }, [])

  const getData=()=>{

  axios.get('http://192.168.1.3:4000/usuarios/api/listarusuario')

    .then(response => {
      const data =response.data
      setState({
        data: data
      })  
               
  }).catch((err)=>{
      console.log(err)
  })
  }

    return (
      <View style={{ margin: 140, marginTop: 60, justifyContent: "center" }}>
          <FlatList
            data={state.data}
            renderItem={
              ({item})=>
              <View>
                <Text>Nombre: {item.nombres}</Text>
                <Text>Apellido: {item.apellidos}</Text>
                <ModalEliminar
                id={item.id_usuario}
                name={item.nombres}
                ></ModalEliminar>
              </View>
            }
          />
      </View>
    );
  }
