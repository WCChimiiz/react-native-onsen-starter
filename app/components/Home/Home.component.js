import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Home.style';
import {bindActionCreators} from 'redux';
import {Button, Platform, Text, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index.action';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

class Home extends Component {
  state = {
    count: 0
  }

  increase = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  onPressCountButton = () => {
    this.increase();
  }
  
  goToAboutPage = () => {
    this.props.navigation.navigate('About');
  }

  onPressGreetingButton = () => {
    this.props.greetingAll();
  }

  onPressGoodMorningButton = () => {
    this.props.goodMorning('Good Morning');
  }

  onPressGoodAfternoonButton = () => {
    this.props.goodAfternoon('Good Afternoon');
  }

  onPressGoodNightButton = () => {
    this.props.goodNight('Good Night');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit Home.component.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          count : {this.state.count}
        </Text>
        <Button title='count' onPress={this.onPressCountButton}/>
        <View style={styles.horizontalContainer}>
          <IconEntypo name='mail' size={30} color='#900' />
          <IconEvilIcons name='plus' size={30} color='#900' />
          <IconFeather name='mail' size={30} color='#900' />
          <IconFontAwesome name='rocket' size={30} color='#900' />
          <IconFoundation name='mail' size={30} color='#900' />
        </View>
        <View style={styles.horizontalContainer}>
          <IconIonicons name='logo-playstation' size={30} color='#900' />
          <IconMaterialCommunityIcons name='rocket' size={30} color='#900' />
          <IconMaterialIcons name='replay-30' size={30} color='#900' />
          <IconOcticons name='rocket' size={30} color='#900' />
          <IconSimpleLineIcons name='rocket' size={30} color='#900' />
          <IconZocial name='pocket' size={30} color='#900' />
        </View>
        <Button title='Go to About page >' onPress={this.goToAboutPage}/>

        <Text style={styles.welcome}>
          Greeting: {this.props.greeting} at {this.props.time}
        </Text>
        <Button title='Greeting' onPress={this.onPressGreetingButton} />
        <Button title='Good Morning' onPress={this.onPressGoodMorningButton} />
        <Button title='Good Afternoon' onPress={this.onPressGoodAfternoonButton} />
        <Button title='Good Night' onPress={this.onPressGoodNightButton} />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
  
  greeting: PropTypes.string,
  time: PropTypes.string,
  
  greetingAll: PropTypes.func,
  goodMorning: PropTypes.func,
  goodAfternoon: PropTypes.func,
  goodNight: PropTypes.func
};

Home.defaultProps = {
  navigation: null,
  
  greeting: '',
  time: '',

  greetingAll: noop,
  goodMorning: noop,
  goodAfternoon: noop,
  goodNight: noop
};

const mapStateToProps = (state) => ({
  greeting: state.message.message,
  time: state.message.time
});
 
const mapDispatchToProps = (dispatch) => ({
  greetingAll: bindActionCreators(actions.greetingAll, dispatch),
  goodMorning: bindActionCreators(actions.greetingMorning, dispatch),
  goodAfternoon: bindActionCreators(actions.greetingAfternoon, dispatch),
  goodNight: bindActionCreators(actions.greetingNight, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
