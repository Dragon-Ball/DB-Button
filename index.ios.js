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

class Example extends Component {
  props : {
    title: string
  }
  render (){
    return (
      <View style={styles.group}>
        <View style={[styles.title]}>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
        <View style={styles.body}>
          {this.props.children}
        </View>
     </View>);
  }
}

class DBButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Example title="按钮类型">
          <Button value="主按钮" type="primary" />
          <Button value="次按钮" />
        </Example>
        <Example title="按钮大小">
          <Button value="大号按钮" size="lg"/>
          <Button value="默认按钮" />
          <Button value="小号按钮" size="sm"/>
        </Example>
        <Example title="按钮状态">
          <Button value="启用" type="primary"  />
          <Button value="禁用" disabled type="primary" />
          <Button value="启用" />
          <Button value="禁用" disabled />
        </Example>
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
