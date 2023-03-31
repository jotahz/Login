import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import styles from '../estilo/estilo.js';

import {Image} from 'react-native';
export default function Hearder(){


    return( 
    
    <LinearGradient

        // Background Linear Gradient
        colors={['blue', '#CDCDC1']}
        style={styles.background}

      >

        <Image 
        source={{uri:'https://brazucadesign.files.wordpress.com/2020/03/virtuspro_logo_sports.png?w=375'}}
        style={{width:180,height:180,marginTop:-80}}
        ></Image>
        
      </LinearGradient>


    )

}
