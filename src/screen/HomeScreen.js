import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeContainer from '../components/Home';
const screen = Dimensions.get('window').width;
const item_image1 = require('../asset/item_image_1.png');
const item_image2 = require('../asset/item_image_2.png');
const item_image3 = require('../asset/item_image_3.png');
const item_image4 = require('../asset/item_image_4.png');
const TitleItem = ({name}) => {
  return (
    <View style={styles.titleName}>
      <Text style={styles.textTitle}>{name}</Text>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar hidden={true} />
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.inputSearch}>
            <Icon style={styles.iconSearch} name="md-search" size={24} />
            <TextInput
              style={styles.inputText}
              placeholder="Bạn tìm gì hôm nay?"
            />
          </View>
          <View style={styles.iconCart}>
            <Icon name="md-cart" color="#fff" size={24} />
          </View>
        </View>
        {/* CONTAINER */}
        <HomeContainer />
        {/*  */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e88e5',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 4,
    alignItems: 'center',
  },
  inputSearch: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  iconCart: {
    paddingRight: 10,
  },
  iconSearch: {
    paddingLeft: 10,
    color: '#969696',
  },
  container: {
    marginLeft: 12,
  },
});
