import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
const Product = ({image, name, price}) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.imageItem} source={image} />
      <Text>{name}</Text>
      <Text style={styles.money}>{price}</Text>
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
        <View style={styles.container}>
          {/*BANNER*/}
          <View style={styles.banner}>
            <Text style={styles.title}>Điện Thoại - Máy Tính Bảng</Text>
            <Image
              source={require('../asset/section_banner.png')}
              style={styles.imageBanner}
            />
          </View>
          {/* LIST TITLE */}
          <View>
            <ScrollView horizontal={true}>
              <View style={styles.active}>
                <Text style={styles.actived}>Tất Cả</Text>
              </View>
              <TitleItem name="Điện Thoại Smartphone" />
              <TitleItem name="Máy Tính Bảng" />
              <TitleItem name="Phụ Kiện" />
            </ScrollView>
          </View>

          {/* LIST PRODUCT */}
          <View style={styles.listProduct}>
            <ScrollView horizontal={true}>
              <View>
                <Product
                  image={item_image1}
                  name="Vsmart Bee "
                  price="990.000đ"
                />
                <Product
                  image={item_image2}
                  name="Vsmart Joy 2"
                  price="1.699.000đ"
                />
              </View>

              <View>
                <Product
                  image={item_image3}
                  name="Vsmart Joy 3"
                  price="3.200.000đ"
                />
                <Product
                  image={item_image4}
                  name="Vsmart Joy Star"
                  price="2.590.000đ"
                />
              </View>

              <View>
                <Product
                  image={item_image2}
                  name="Vsmart Joy 2"
                  price="1.699.000đ"
                />
                <Product
                  image={item_image3}
                  name="Vsmart Joy 3"
                  price="3.200.000đ"
                />
              </View>

              <View>
                <Product
                  image={item_image4}
                  name="Vsmart Joy Live"
                  price="1.800.000đ"
                />
                <Product
                  image={item_image1}
                  name="Vsmart Bee "
                  price="990.000đ"
                />
              </View>

              <View>
                <Product
                  image={item_image2}
                  name="Vsmart Joy 2"
                  price="1.690.000đ"
                />
                <Product
                  image={item_image3}
                  name="Vsmart Joy Star"
                  price="3.200.000đ"
                />
              </View>
            </ScrollView>
          </View>
          {/* SEE MORE */}
          <View style={styles.line} />
          <View style={styles.seeMore}>
            <Text style={styles.textSeemore}>XEM THÊM 284 SẢN PHẨM</Text>
          </View>
        </View>
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
  title: {
    marginVertical: 12,
    fontSize: 18,
  },
  imageBanner: {
    width: screen - 24,
    borderRadius: 12,
    height: 130,
  },
  listItem: {
    textAlign: 'center',
    paddingTop: 10,
  },
  imageItem: {
    height: 120,
    width: 100,
  },
  money: {
    fontWeight: 'bold',
  },
  titleName: {
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
  },
  textTitle: {
    paddingRight: 5,
    paddingLeft: 5,
    color: 'grey',
    fontSize: 15,
  },
  active: {
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
    backgroundColor: 'black',
    color: '#fff',
  },
  actived: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    color: 'white',
  },
  line: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#B9B7B7',
    marginRight: 10,
  },
  seeMore: {
    alignItems: 'center',
  },
  textSeemore: {
    color: '#1e88e5',
  },
});
