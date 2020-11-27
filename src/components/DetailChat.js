import React from 'react';
import {
   View,
   Text,
} from 'react-native';

function DetailChat({name}) {
   console.log('nama', name);
   return (
      <View>
         <Text>{name}</Text>
      </View>
   );
}

export default DetailChat;
