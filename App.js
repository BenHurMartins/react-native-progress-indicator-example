import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from 'react-native';
import * as Progress from 'react-native-progress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activityIndicator: false, progress: 0, indeterminate: false};
  }

  startActivityIndicator() {
    this.setState({activityIndicator: true});
    setTimeout(() => {
      this.setState({activityIndicator: false});
    }, 5000);
  }

  activityIndicator() {
    //We can show either, activity indicator or the Button
    return this.state.activityIndicator ? (
      <ActivityIndicator size="large" color="#051923" />
    ) : (
      <Button
        title="Show Activity Indicator"
        onPress={() => this.startActivityIndicator()}
      />
    );
  }

  startProgressIndicators() {
    let progress = 0;
    this.setState({progress, indeterminate: true}, () =>
      setTimeout(() => {
        this.setState({indeterminate: false});
        setInterval(() => {
          progress += Math.random() / 5;
          if (progress > 1) {
            progress = 1;
          }
          this.setState({progress});
        }, 500);
      }, 1500),
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Progress Indicators</Text>
        {this.activityIndicator()}
        <View style={{margin: 5}} />
        <Button
          title="Start Progress Indicators"
          onPress={() => this.startProgressIndicators()}
        />
        <Text style={styles.text}>Bar</Text>
        <Progress.Bar
          progress={this.state.progress}
          width={200}
          style={{margin: 5}}
        />
        <Text style={styles.text}>Pie</Text>
        <Progress.Pie
          progress={this.state.progress}
          size={80}
          style={{margin: 5}}
        />
        <Text style={styles.text}>Circle</Text>
        <Progress.Circle
          size={30}
          indeterminate={this.state.indeterminate}
          progress={this.state.progress}
          showsText={true}
          size={80}
          style={{margin: 5}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#051923',
    margin: 10,
    fontSize: 30,
  },
});

export default App;

{
  /* <Progress.Bar progress={0.3} width={200} />
<Progress.Pie progress={0.4} size={50} />
<Progress.CircleSnail color={['red', 'green', 'blue']} /> */
}
