
import {Platform} from 'react-native'
import colors from './color'
export default {
    colors,
    text: {
        ...Platform.select({
            ios: {
                fontSize :18,
                
                fontFamily : "Avenir",
            },
            android :{
                fontSize: 18,
                fontFamily : 'Roboto',
            }
        })
    },
}

  
  
