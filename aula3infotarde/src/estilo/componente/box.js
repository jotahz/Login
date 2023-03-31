import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import styles from '../estilo/estilo.js';

import {Image} from 'react-native';
import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';

export default function Hearder(){


    return( 
        <View
        // Button Linear Gradient
        style={styles.box}>
        
          <TextInput style={styles.inputs} placeholder= 'e-mail' />
          
          <TextInput style={styles.inputs}   placeholder= 'senha' />
        
          <TouchableOpacity style={{width:'80%'}}> 
              <LinearGradient
              // Background Linear Gradient
               colors={['#D2691E','#FF4500']}
               style={styles.button}
              >
                  <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
               </LinearGradient>
          </TouchableOpacity>
          </View>
    
    


    );

}
