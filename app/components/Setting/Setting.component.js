import React, {Component} from 'react';
import Share from 'react-native-share';
import styles from './Setting.style';
import {LoginButton, ShareDialog} from 'react-native-fbsdk';
import {Text, TouchableHighlight, View} from 'react-native';

export default class Setting extends Component {

  constructor (props) {
    super(props);
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: 'https://www.facebook.com/',
      contentDescription: 'Facebook sharing is easy!'
    };

    this.state = {shareLinkContent: shareLinkContent};
  }

  shareLinkWithShareDialog () {
    var tmp = this;
    ShareDialog.canShow(this.state.shareLinkContent).then(
      function (canShow) {
        if (canShow) {
          return ShareDialog.show(tmp.state.shareLinkContent);
        }
      }
    ).then(
      function (result) {
        if (result.isCancelled) {
          alert('Share cancelled');
        } else {
          alert('Share success with postId: ' + result.postId);
        }
      },
      function (error) {
        alert('Share fail with error: ' + error);
      }
    );
  }

  render () {
    
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert('Login failed with error: ' + error.message);
              } else if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                alert('Login was successful with permissions: ' + result.grantedPermissions);
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')}/>
        <TouchableHighlight onPress={this.shareLinkWithShareDialog.bind(this)}>
          <Text style={styles.shareText}>Share link with fb</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { 
          Share.open({
            title: 'this.state.shareLinkContent.contentType',
            message: this.state.shareLinkContent.contentDescription,
            url: this.state.shareLinkContent.contentUrl
          }) 
          ;
        }}>
          <Text style={styles.shareText}>Share link with native</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}}>
          <Text style={styles.shareText}>Share link with tw</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}}>
          <Text style={styles.shareText}>Share link with line</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
