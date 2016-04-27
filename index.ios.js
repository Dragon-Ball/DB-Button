/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React , {
  AppRegistry ,
  Component ,
  StyleSheet ,
  Text ,
  View
} from 'react-native';
import Button from './src/';

class DBButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <View style={[styles.title]}>
            <Text style={styles.titleText}>按钮类型</Text>
          </View>
          <View style={[styles.body]}>
          <Button value="主按钮" type="primary" />
          <Button value="次按钮" />
          </View>
        </View>
        <View style={styles.group}>
          <View style={[styles.title]}>
            <Text style={styles.titleText}>按钮大小</Text>
          </View>
          <View style={[styles.body]}>
            <Button value="大号按钮" size="lg"/>
            <Button value="默认按钮" />
            <Button value="小号按钮" size="sm"/>
          </View>
        </View>
        <View style={styles.group}>
          <View style={[styles.title]}>
            <Text style={styles.titleText}>按钮状态</Text>
          </View>
          <View style={[styles.body]}>
            <Button value="启用" />
            <Button value="禁用" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop:20
  },
  group:{
    marginVertical:14
  },
  title:{
    paddingHorizontal:10,
    paddingVertical:10
  },
  titleText : {
    color : '#6d6d72'
  },
  body:{
    flexDirection:'row',
    backgroundColor:'#FFF',
    alignItems:'center',
    paddingVertical:12,
    paddingHorizontal:10
  }
});

AppRegistry.registerComponent('DBButton', () => DBButton);
